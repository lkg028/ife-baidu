var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
    arr1.sort(function(a,b){return a - b;});
    console.log(arr1.join());

var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
    arr2.sort(function(a,b){return a.charCodeAt(0) - b.charCodeAt(0); });
    console.log(arr2.join());
    arr2.sort(function(a,b){return b.charCodeAt(0) - a.charCodeAt(0); });
    console.log(arr2.join());

var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
    arr3.sort(function(a,b){return b[1] - a[1]});
    console.log("[" + arr3.join("],[") + "]");
var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

    arr4.sort(function(a,b){return b.value - a.value});
    var outArr4 = arr4.map(function(item){return JSON.stringify(item);});
    console.log(outArr4.join());

//对象转换为数组
var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
};
var oTa = (Object.keys(scoreObject)).map(function(item){return [item]});
    oTa.forEach(function(item,index, arr){
        item.push(scoreObject[item[0]].Math);
        item.push(scoreObject[item[0]].English);
        item.push(scoreObject[item[0]].Music);
    });
    console.log("[" + oTa.join("],[") + "]");

//数组转化为对象
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
//构建数组对象
var toArrO = [];
menuArr.forEach(function(item,idx,arr){
    toArrO.push({name : item[1]});
});

//构建对象
var tree = {};
menuArr.forEach(function(item,idx,arr){
    if(item[2] < 0 ){
        tree[item[0] + ""] = toArrO[item[0]-1];
    }else{
       if(!toArrO[item[2]-1].subMenu) toArrO[item[2]-1].subMenu = {};
       toArrO[item[2]-1].subMenu[item[0]+""] = toArrO[item[0]-1];
    }
});
//删去辅助数组
toArrO = null;
