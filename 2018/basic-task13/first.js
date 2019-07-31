window.onload = function(){
    //实现一些数字操作
    (function(){
        var numberType = document.querySelector("#number");
        var radioA = numberType.querySelector("#radio-a");
        var numA = numberType.querySelector("#num-a");
        var numB = numberType.querySelector("#num-b");
        var outputP = numberType.querySelector("#result")
        var numBtnWrap = numberType.querySelector("#numBtnWrap");

        function clickFun(event){
            //判断两个输入框输入的是否是数字
            if(event.target.id === "btn-1"){
                if(radioA.checked){
                    if(numA.value === "" || isNaN(numA.value)) outputP.innerHTML = "请输入数字。";
                    else outputP.innerHTML = "您输入的数字为：" + numA.value;
                }else {
                    if(numB.value === "" || isNaN(numB.value)) outputP.innerHTML = "请输入数字。";
                    else outputP.innerHTML = "您输入的数字为：" + numB.value;
                }
                return;
            }

            //把 A 四舍五入为 B 个小数位数的数
            if(event.target.id === "btn-2"){
                if(numA.value === "" || numB.value === "" || isNaN(numA.value) || isNaN(numB.value)) {
                    outputP.innerHTML = "请输入数字。";
                    return;
                }
               outputP.innerHTML = (+numA.value).toFixed(parseInt(numB.value));
            }

            //当前选中数字的绝对值
            if(event.target.id === "btn-3"){
                if(radioA.checked){
                    if(numA.value==="" || isNaN(numA.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字的绝对值为：" + Math.abs(+numA.value);
                }else{
                    if(numB.value==="" || isNaN(numB.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字的绝对值为：" + Math.abs(+numB.value);
                }
            }

            //对当前选中的数字进行上舍入
            if(event.target.id === "btn-4"){
                if(radioA.checked){
                    if(numA.value==="" || isNaN(numA.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字向上舍入的值为：" + Math.ceil(+numA.value);
                }else{
                    if(numB.value==="" || isNaN(numB.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字向上舍入的值为：：" + Math.ceil(+numB.value);
                }
            }

            //对当前选中的数字进行下舍入
            if(event.target.id === "btn-5"){
                if(radioA.checked){
                    if(numA.value==="" || isNaN(numA.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字向下舍入的值为：" + Math.floor(+numA.value);
                }else{
                    if(numB.value==="" || isNaN(numB.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字向下舍入的值为：" + Math.floor(+numB.value);
                }
            }

            //把当前选中的数字四舍五入为最接近的整数
            if(event.target.id === "btn-6"){
                if(radioA.checked){
                    if(numA.value==="" || isNaN(numA.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字四舍五入的值为：" + Math.round(+numA.value);
                }else{
                    if(numB.value==="" || isNaN(numB.value)){
                        outputP.innerHTML = "请输入数字。";
                        return;
                    }
                    outputP.innerHTML = "该数字四舍五入的值为：" + Math.round(+numB.value);
                }
            }

            //返回 A 和 B 中的最高值
            if(event.target.id === "btn-7"){
                if(numA.value === "" || numB.value === "" || isNaN(numA.value) || isNaN(numB.value)) {
                    outputP.innerHTML = "请输入数字。";
                    return;
                }
                switch(true){
                    case +numA.value > +numB.value: 
                        outputP.innerHTML = "A最大，A为：" + numA.value;
                        break;
                    case +numA.value === +numB.value:
                        outputP.innerHTML = "A和B相等，均为：" + numA.value;
                        break;
                    default:
                        outputP.innerHTML = "B最大，B为：" + numB.value;
                        break;
                }
            }

            //返回 A 和 B 中的最低值
            if(event.target.id === "btn-8"){
                if(numA.value === "" || numB.value === "" || isNaN(numA.value) || isNaN(numB.value)) {
                    outputP.innerHTML = "请输入数字。";
                    return;
                }
                switch(true){
                    case +numA.value > +numB.value: 
                        outputP.innerHTML = "B最小，B为：" + numB.value;
                        break;
                    case +numA.value === +numB.value:
                        outputP.innerHTML = "A和B相等，均为：" + numA.value;
                        break;
                    default:
                        outputP.innerHTML = "A最小，A为：" + numA.value;
                        break;
                }
            }

        }

        numBtnWrap.addEventListener("click", clickFun, false);
    })();

    //
};