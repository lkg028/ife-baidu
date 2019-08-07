window.addEventListener('load', function(){
    //定义地区选项
    var region_checkbox = new CreateRadioBox(document.querySelector('#region-radio-wrap'),
        [{value: '华北', text: '华北'},{value: '华东', text: '华东'},{value:'华南',text:'华南'}]);
    region_checkbox.setContent('请选择地区：');

    //定义商品选项
    var product_checkbox = new CreateRadioBox(document.querySelector('#product-radio-wrap'),
        [{value: '手机', text: '手机'},{value: '笔记本', text: '笔记本'},{value: '智能音箱',text:'智能音箱'}]);
    product_checkbox.setContent('请选择产品：');

    region_checkbox.container.addEventListener('click', clickFun, false);
    product_checkbox.container.addEventListener('click', clickFun, false);

    function clickFun(){
    var data = getData(region_checkbox.inputsData, product_checkbox.inputsData);
    drawTable(data);
    }

    //加载页面后默认画出完整表格
    drawTable(sourceData);
},false);
    