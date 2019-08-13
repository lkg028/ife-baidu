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

    //点击按钮后出发的回调函数
    function clickFun(){
      var data = getData(region_checkbox.inputsData, product_checkbox.inputsData);
      var saleData = [];
      data.forEach(function(item, idx, arr){
          saleData.push(item.sale);
      });
      saleBar.drawBar(saleData);
      saleLine.drawLine(saleData);
      list = drawTable(data);
      //console.log(list);
    }

    //加载页面后默认画出完整表格
    list = drawTable(sourceData);
    //console.log(list);
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
    //console.log(list);
    (function(){
        var table = document.querySelector('#table-wrap');
            table.addEventListener('mouseover', overFun, false);
            table.addEventListener('mouseleave', leaveFun, false);
        function overFun(event){
          var data = [],
              lineIdx = 0;
          //获得当前行数
          lineIdx = event.path[1].rowIndex;
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
    

},false);
    