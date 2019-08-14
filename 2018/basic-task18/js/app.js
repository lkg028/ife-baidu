window.addEventListener('load', function(){
    //定义一个变量，存储当前画表格使用的数据List
    var list = null;
    //定义地区选项
    var region_checkbox = new CreateRadioBox(document.querySelector('#region-radio-wrap'),
        [{value: '华北', text: '华北'},{value: '华东', text: '华东'},{value:'华南',text:'华南'}]);
    region_checkbox.setContent('请选择地区：');

    //定义商品选项
    var product_checkbox = new CreateRadioBox(document.querySelector('#product-radio-wrap'),
        [{value: '手机', text: '手机'},{value: '笔记本', text: '笔记本'},{value: '智能音箱',text:'智能音箱'}]);
    product_checkbox.setContent('请选择产品：');

    //画图部分
    var saleBar = new Bar(document.querySelector('#bar-wrap'), 630, 320);
    var saleLine = new Line(document.querySelector('#canvas'));
    console.log(saleLine);

    region_checkbox.container.addEventListener('click', clickFun, false);
    product_checkbox.container.addEventListener('click', clickFun, false);

    //点击按钮事件函数
    function clickFun(){
      var data = getData(region_checkbox.inputsData, product_checkbox.inputsData);
      var saleData = [];
      data.forEach(function(item, idx, arr){
          saleData.push(item.sale);
      });
      saleBar.drawBar(saleData);
      saleLine.drawLine(saleData);
      list = drawTable(data);
    }

    //加载页面后默认画出完整表格
    list = drawTable(sourceData);
    //加载页面后默认画出两个图
    (function(){
      var saleData = [];
      sourceData.forEach(function(item, idx, arr){
          saleData.push(item.sale);
      });
      saleBar.drawBar(saleData);
      saleLine.drawLine(saleData);
    })();

    //让图表动起来，添加鼠标hover的时候显示单条数据,使用当前的list作为基础
    (function(){
        var table = document.querySelector('#table-wrap');
            table.addEventListener('mouseover', overFun, false);
            table.addEventListener('mouseleave', leaveFun, false);
        function overFun(event){
          var data = [],
              lineIdx = 0,
              target = event.target;
          //获得当前行数
          if(target.nodeName === 'TD') lineIdx = event.path[1].rowIndex;
          if(target.nodeName === 'TR') lineIdx = target.rowIndex;
          
          //如果是标题行，直接返回
          if(!lineIdx) return;
          //如果是其它行，获得当前行的数据放到data里面
          data[0] = list[lineIdx - 1].sale;
          saleBar.drawBar(data);
          saleLine.drawLine(data);
        }
        //移开鼠标，恢复原始图表
        function leaveFun(event){
          var data = [];
          list.forEach(function(item, idx, arr){
              data.push(item.sale);
          });
          saleBar.drawBar(data);
          saleLine.drawLine(data);
        }
    })();
    
    //增加交互输入,并把有效的输入存储到本地
    (function(){
        var tableDIV = document.querySelector('#table-wrap');
        var inputbox = new InputBox();
        //点击出现输入框
        tableDIV.addEventListener('click', clickFun, false);
        function clickFun(event){
           var target = event.target;
           inputbox.show(target);
           target.classList.remove('active');
           event.stopPropagation();
        }
        //单元格数据变化回调
        function dataChangeFun(event){
            var target = event.target;
            var dataKey = '';
            var saleKey = 0;
            var row = null;
            var rowIndex = 0;
            if(target.nodeName !== 'TD' || !target.innerHTML.length
               || isNaN(target.innerHTML) || +target.innerHTML === inputbox.preData) return;
            row = target.parentNode;
            rowIndex = row.rowIndex;
            saleKey = list[0].sale.length - (row.lastElementChild.cellIndex - target.cellIndex) - 1;
            //生成dataKey
            dataKey =saleKey + list[rowIndex - 1].product + list[rowIndex - 1].region;
            //存入localStorage
            window.localStorage.setItem( dataKey, target.innerHTML);
            //存入list
            list[rowIndex - 1].sale[saleKey] = +target.innerHTML;
            //存储到原始数据sourceData
            sourceData.forEach(function(item, idx, arr){
                if(dataKey.search(item.product) >=0 && dataKey.search(item.region) >= 0)
                item.sale[saleKey] = +target.innerHTML;
            });

            //重新画图
            var data = [];
            list.forEach(function(item, idx, arr){
              data.push(item.sale);
            });
            saleBar.drawBar(data);
            saleLine.drawLine(data);
        }
        tableDIV.addEventListener('DOMSubtreeModified', dataChangeFun, false);

        //清空数据
        var resetBtn = document.querySelector('#reset-local-data');
        resetBtn.addEventListener('click', function(){
            window.localStorage.clear();
            window.location.reload(true);
        }, false);
    })();

    //增加鼠标悬停效果
    (function(){
        var tableDIV = document.querySelector('#table-wrap');
        tableDIV.addEventListener('mouseover', function(event){
            if(event.target.nodeName === 'TD' && !isNaN(event.target.innerHTML)){
                event.target.classList.add('active');
            }
        }, false);
        tableDIV.addEventListener('mouseout', function(event){
            if(event.target.nodeName === 'TD' && !isNaN(event.target.innerHTML)){
                event.target.classList.remove('active');
            }
        }, false);
    })();
},false);