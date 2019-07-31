window.onload = function(){
    //简单的字符串操作
    var wrapdiv = document.querySelector("#string-basic");
    var radioA = wrapdiv.querySelector("#radio-a");
    var strA = wrapdiv.querySelector("#str-a");
    var strB = wrapdiv.querySelector("#str-b");
    var numA = wrapdiv.querySelector("#num-a");
    var numB = wrapdiv.querySelector("#num-b");
    var outputP = wrapdiv.querySelector("#result");
    var btnGroup = wrapdiv.querySelector("#btn-group");

    function clickFun(event){
        //获取当前输入框的内容长度。
        if(event.target.id === "btn-1"){
            if(radioA.checked){
                outputP.innerHTML = "当前输入框输入内容的长度为" + strA.value.length + "个字符。"
            }else{
                outputP.innerHTML = "当前输入框输入内容的长度为" + strB.value.length + "个字符。"
            }
        }

        //当前输入框中内容的第三个字符
        if(event.target.id === "btn-2"){
            if(radioA.checked){
                if(strA.value.length < 3){outputP.innerHTML = "您输入的字符小于三，请继续输入。"; return;}
                outputP.innerHTML = "当前输入内容的第三个字符为：" + strA.value[2];
            }else{
                if(strB.value.length < 3){outputP.innerHTML = "您输入的字符小于三，请继续输入。"; return;}
                outputP.innerHTML = "当前输入内容的第三个字符为：" + strB.value[2];
            }
        }

        //把两个输入框的内容连接在一起输出
        if(event.target.id === "btn-3"){
            outputP.innerHTML = "两个输入框内容连接起来为：" + strA.value.concat(strB.value);
        }

        //B内容在A内容中第一次出现的位置
        if(event.target.id === "btn-4"){
            if(!strA.value || !strB.value){
                outputP.innerHTML = "请分别在两个输入款中输入内容。";
                return;
            }
            if(strA.value.indexOf(strB.value) === -1){
                outputP.innerHTML = "B中的内容在A中未找到，请从新输入。";
                return;
            }
            outputP.innerHTML = "B内容在A内容中第一次出现的位置为：" + strA.value.indexOf(strB.value);
        }

        //A中的内容在B中最后一次出现的位置
        if(event.target.id === "btn-5"){
            if(!strA.value || !strB.value){
                outputP.innerHTML = "请分别在两个输入款中输入内容。";
                return;
            }
            if(strB.value.lastIndexOf(strA.value) === -1){
                outputP.innerHTML = "A中的内容在B中未找到，请从新输入。";
                return;
            }
            outputP.innerHTML = "A内容在B内容中最后一次出现的位置为：" + strB.value.lastIndexOf(strA.value);
        }

        //使用slice获取部分内容
        if(event.target.id === "btn-6"){
            var temp = radioA.checked ? strA.value:strB.value ;
            if(!temp) {
                outputP.innerHTML = "请先输入内容";
                return;
            }
            outputP.innerHTML = temp.slice(+numA.value, +numB.value);
        }

        //当前输入框的行数
        if(event.target.id === "btn-7"){
            var temp = radioA.checked ? strA.value:strB.value ;
            if(!temp){
                outputP.innerHTML = "请先输入内容";
                return;
            }
            outputP.innerHTML = "您当前输入文本的行数为：" + temp.split("\n").length;
        }

        //substr获取选中输入框内容的子字符串
        if(event.target.id === "btn-8"){
            var temp = radioA.checked ? strA.value : strB.value;
            if(!temp){
                outputP.innerHTML = "请先输入内容";
                return;
            }
            outputP.innerHTML = "使用substr获取您当前选中文本框的内容为：" + temp.substr(numA.value, numB.value);
        }

        //转换为大写
        if(event.target.id === "btn-9"){
            var temp = radioA.checked ? strA.value : strB.value;
            if(!temp){
                outputP.innerHTML = "请先输入内容";
                return;
            }
            outputP.innerHTML = "您输入的内容转换为大写为：" + temp.toLocaleUpperCase();
        }

        //转换为大写
        if(event.target.id === "btn-10"){
            var temp = radioA.checked ? strA.value : strB.value;
            if(!temp){
                outputP.innerHTML = "请先输入内容";
                 return;
            }
            outputP.innerHTML = "您输入的内容转换为大写为：" + temp.toLocaleLowerCase();
        }

        //去除所有的半角空格
        if(event.target.id === "btn-11"){
            var temp = radioA.checked ? strA.value : strB.value;
            if(!temp){
                outputP.innerHTML = "请先输入内容";
                 return;
            }
            outputP.innerHTML = "您输入的内容去掉所有的空格后结果为：" + (temp.split(" ")).join("");
        }

        //把所选输入框中内容的a全部替换成另外一个输入框中的内容
        if(event.target.id === "btn-12"){
            var temp0 = radioA.checked ? strA.value : strB.value;
            var temp1 = (temp0 === strA.value) ? strB.value : strA.value;
            outputP.innerHTML = "替换后的内容为：" + temp0.replace(/a/g, temp1);
        }
    }
    
    btnGroup.addEventListener("click", clickFun, false);
};