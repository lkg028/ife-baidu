window.onload = function(){
    //非常简单的计算器
    (function(){
        var num1 = document.getElementById("first-number");
        var num2 = document.getElementById("second-number");
        var output = document.getElementById("rresult-calc");
        document.getElementById("add-btn").onclick = function() {
            var num1_value = +num1.value;
            var num2_value = +num2.value;
            output.innerHTML = "运算结果<br>" + (num1_value + num2_value).toFixed(3);
        };
        document.getElementById("minus-btn").onclick = function() {
            var num1_value = +num1.value;
            var num2_value = +num2.value;
            output.innerHTML = "运算结果<br>" + (num1_value - num2_value).toFixed(3);
        };
        document.getElementById("times-btn").onclick = function() {
            var num1_value = +num1.value;
            var num2_value = +num2.value;
            output.innerHTML = "运算结果<br>" + (num1_value * num2_value).toFixed(3);
        };
        document.getElementById("divide-btn").onclick = function() {
            var num1_value = +num1.value;
            var num2_value = +num2.value;
            if(num2_value === 0) {
                output.innerHTML = "除数不能为0，请重新输入";
            }else {
                output.innerHTML = "运算结果<br>" + (num1_value / num2_value).toFixed(3);
            }
        };
    })();

    //十进制转化为二进制
    (function(){
        var dec_input = document.getElementById("dec-number");
        var bin_bit = document.getElementById("bin-bit");
        var trans_btn = document.getElementById("trans-btn");
        var output_p = document.getElementById("result-dec2bin");

        function dec2bin(){
            var dec = +dec_input.value;
            var bit = +bin_bit.value;
            var dec_str = dec.toString(2);
            if(dec < 0){
                output_p.innerHTML = "您输入了负数，请输入非负整数。";
            }else if ((dec % 1) > 0){
                output_p.innerHTML = "您输入了小数，请输入非负整数。";
            }else if(dec >= 0){
                if(dec_str.length < bit){
                    var arr = [];
                    for(var i = 0 ;i<(bit-dec_str.length);i++){
                        arr[i] = 0;
                    }
                    output_p.innerHTML = "运算结果<br>" + arr.join("") + dec.toString(2);
                }else if (dec_str.length > bit){
                    output_p.innerHTML = "运算结果<br>" + dec.toString(2);
                    console.log("指定的位数不够");
                }else {
                    output_p.innerHTML = "运算结果<br>" + dec.toString(2);
                }
                //output_p.innerHTML = "运算结果<br>" + dec.toString(2);
            }

            
        }
        trans_btn.onclick = dec2bin;
    })();

    //从1输出到100，遇到3的倍数替换成PA并换行
    (function(){
        var output = "";
        for(var i = 1;i<=100;i++){
            if(!(i%3)){
                output += "PA," ;
            }else{
                output += i + ",";
            }
        }
        console.log(output);
    })();

    //在console中输出乘法口诀
    (function(){
        for(var i = 1;i<=9;i++){
            var output = "";
            for(var j = 1;j<=i;j++){
                output += i + "*" + j + "=" + (i*j) + " ";
            }
            console.log(output);
        }
    })();

    //在页面表格中输入乘法口诀
    (function(){
        var conbox = document.createElement("div");
        var table = document.createElement("table");
        var output_table = "";
        for(var i = 1;i<=9;i++){
            var output_row = "<tr>";
            for(var j = 1;j<=9;j++){
                if(j<=i){
                    output_row += "<td>" + i + "*" + j + "=" + (i*j) + "</td>";
                }else{
                    output_row += "<td></td>";
                }
            }
            output_table += output_row + "</tr>";
        }
        table.innerHTML = output_table;
        conbox.append(table);
        document.body.append(conbox);
    })();

    //根据时间输出问候语
    (function(){
        var now = new Date();
        var output_p = document.createElement("p");
        var title = document.createElement("h3");
        title.innerHTML = "根据时间问候";
        document.body.append(title);
        switch(now.getHours()){
            case 0: case 1: case 2: case 3: case 4: case 5: case 6:
                output_p.innerHTML = "夜深了，早点休息。";
                break;
            case 7: case 8: case 9: case 10: case 11: 
                output_p.innerHTML = "早上好！";
                break;
            case 12: case 13: case 14: 
                output_p.innerHTML = "中午好！";
                break;
            case 15: case 16: case 17: case 18:  
                output_p.innerHTML = "下午好！";
                break;
            case 19: case 20: case 21: case 22: case 23: 
                output_p.innerHTML = "晚上好！";
                break;
        }
        document.body.append(output_p);
    })();
};



