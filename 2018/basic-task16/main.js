window.addEventListener('load', function(){
    var data = [{
        product: "手机",
        region: "华东",
        sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
    }, {
        product: "手机",
        region: "华北",
        sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
    }, {
        product: "手机",
        region: "华南",
        sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
    }, {
        product: "笔记本",
        region: "华东",
        sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
    }, {
        product: "笔记本",
        region: "华北",
        sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
    }, {
        product: "笔记本",
        region: "华南",
        sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
    }, {
        product: "智能音箱",
        region: "华东",
        sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
    }, {
        product: "智能音箱",
        region: "华北",
        sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
    }, {
        product: "智能音箱",
        region: "华南",
        sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
    }];
    var firstTaskWrap = document.querySelector("#first-task-wrap");
    var tableEle = document.createElement("table");
        firstTaskWrap.appendChild(tableEle);
    var formData = {"地区":[], "商品":[], "月份":0};

    //表单模块,构建指引创建表格的数据formData
    document.forms[0].addEventListener('input', function(e){
        var target = e.target;
        if(target.name === "region") {
            var rigionDiv = document.querySelector("#region-checkbox");
            var inputs = rigionDiv.querySelectorAll("input");
            formData["地区"] = [];
            inputs.forEach(function(item, idx, arr){
                if(item.checked) formData["地区"].push(item.value);
            });
        }
        if(target.name === "product") {
            var productDiv = document.querySelector("#product-checkbox");
            var inputs = productDiv.querySelectorAll("input");
            formData["商品"] = [];
            inputs.forEach(function(item, idx, arr){
                if(item.checked) formData["商品"].push(item.value);
            });
        }
        if(target.name === "month") {
            formData["月份"] = +target.value;
        }
        createTableFun();
    }, false);
    //重置表单
    document.forms[0].addEventListener( 'click',function(e){
        if(e.target.type === "reset"){
            formData["地区"] = [];
            formData["商品"] = [];
            formData["月份"] = 0;
        }
        createTableFun();
    }, false);
    //根据formData和原始数据创建表格
    function createTableFun(){
        //初始化表格
        tableEle.innerHTML = "";
        var tempText = "";
        //formData为默认值的时候，根据Data生成完整的表格
        if(formData["地区"].length === 0 && formData["商品"].length === 0 && formData["月份"] === 0){
            tableEle.innerHTML = "<thead><tr><th>地区</th><th>商品</th><th>1月</th><th>2月</th><th>3月</th> \
                                <th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th>\
                                <th>10月</th><th>11月</th><th>12月</th></tr></thead>";
            data.forEach(function(item, idx, arr){
                tempText += "<tr><td>" + item.region + "</td><td>" + item.product + "</td>";
                item.sale.forEach(function(item, idx, arr){
                    tempText += "<td>" + item + "</td>";
                });
                tempText += "</tr>";
            });
            tableEle.innerHTML += tempText;
        }else{
            //根据表单生成的数据，生成表头。
            tempText =  "<thead><tr><th>地区</th><th>商品</th>";
            if(formData["月份"] === 0){
                tempText += "<th>1月</th><th>2月</th><th>3月</th> \
                            <th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th>\
                            <th>10月</th><th>11月</th><th>12月</th></tr></thead>"
            }else{
                tempText += "<th>" + formData["月份"] + "月</th></thead>"; 
            }
            if(formData["地区"].length === 0) formData["地区"] = ["华北", "华东", "华南"];
            if(formData["商品"].length === 0) formData["商品"] = ["手机", "笔记本", "智能音箱"];
            data.forEach(function(item, idx, arr){
                if(formData["地区"].join("").search(item.region) >= 0 && formData["商品"].join("").search(item.product) >= 0){
                    tempText += "<tr><td>" + item.region + "</td><td>" + item.product + "</td>";
                    if(formData["月份"] === 0){
                        item.sale.forEach(function(item, idx, arr){
                            tempText += "<td>" + item + "</td>";
                        });
                    }else{
                        tempText += "<td>" + item.sale[formData["月份"] - 1] + "</td>";
                    }
                    tempText += "</tr>";
                }
            });
            tableEle.innerHTML = tempText;
        }

    }
    createTableFun();


    
}, false);
