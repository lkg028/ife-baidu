//根据数据画出表格
function drawTable(data){
    if(!data.length) return;
    //对原始数据进行简单排序
    data.sort(function(a , b){return a.product.length - b.product.length});

    //定义基本数据
    var count = {'product': {count: 1, str: ''}, region: {count: 1, str: ''}};
        firstCol = 'product',
        secondCol = 'region',
        tableWrap = document.querySelector('#table-wrap'),
        table = null,
        rows = null,
        tempText = '';

    //初始化表头
    tableWrap.innerHTML = tableHeadHTML;
    table = tableWrap.children[0];
    rows = document.getElementsByTagName('tr');


    //分析给定的数据，得出统计数据
    data.forEach(function(item, idx, arr){
        if(!idx){
            count.product.str += item.product;
            count.region.str += item.region;
        }else{
            if(count.product.str.search(item.product) === -1){
                count.product.count++;
                count.product.str += item.product;
            }
            if(count.region.str.search(item.region) === -1){
                count.region.count++;
                count.region.str += item.region;
            }
        }
    });
    
    //画tbody
    //先确定谁是第一列
    if(count.region.count === 1 && count.product.count > 1){
        rows[0].insertBefore(rows[0].children[1], rows[0].children[0]); 
        firstCol = 'region';
        secondCol = 'product';
    }
    //构建整个tbody的innHTML
    data.forEach(function(item, idx, arr){
        tempText += '<tr><td>' + item[firstCol] + '</td><td>' + item[secondCol] + '</td>';
        item.sale.forEach(function(item, idx, arr){
            tempText += '<td>' + item + '</td>';
        });
        tempText += '</tr>';
    });
    table.innerHTML += tempText;
    //合并单元格，根据统计数据
    var rowIdx = 1;
    for(var i = 0 ; i < count[firstCol].count; i++){
        for(var j = 0; j < count[secondCol].count; j++){
            if(!j) rows[rowIdx].children[0].setAttribute('rowspan', count[secondCol].count);  
            else rows[rowIdx].removeChild(rows[rowIdx].children[0]);
            rowIdx++;
        }
    }
}