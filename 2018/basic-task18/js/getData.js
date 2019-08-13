//根据表单数据，从原始数据中提取要显示的数据
function getData(regions, products){
    var list = [],
    regionStr = regions.join('');
    productsStr = products.join('');
    sourceData.forEach(function(item, idx, arr){
       if(regionStr.search(item.region) >= 0 && productsStr.search(item.product) >= 0){
           list.push(item);
       }
    });
    return list;
}