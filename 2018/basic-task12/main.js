window.onload = function(){
    function onclickFun(event){
        //获取输入框的内容
        if(event.target.id === "submit-btn"){
            var textInput = document.querySelector("#name");
            console.log(textInput.value);
        }
        //控制元素的显示和隐藏
        if(event.target.nodeName.toLowerCase() === "lable" || event.target.nodeName.toLowerCase() === "input"){
            if(event.target.type === "radio"){
                var schoolSelect = document.querySelector("#school-select");
                var companySelect = document.querySelector("#company-select");
                schoolSelect.style.position = "relative";
                companySelect.style.position = "relative";

                if(event.target.id === "school"){
                    schoolSelect.style.left = "";
                    companySelect.style.left = "-150%";
                }else if(event.target.id === "company"){
                    schoolSelect.style.left = "-150%";
                    companySelect.style.left = "";
                }
            }
        }

        //点击选择背景色
        if(event.target.nodeName.toLowerCase() === "li"){
            if(event.target.parentNode.className === "palette"){
                var outputP = document.querySelector(".color-picker");
                outputP.style.backgroundColor = event.target.style.backgroundColor;
                outputP.style.color = event.target.style.backgroundColor;
            }
        }

        //实现淡入淡出
        if(event.target.id === "fade-btn"){
            event.target.disabled = true;
            var div = document.querySelector("#fade-obj");
            function fade(){
                if(event.target.innerHTML === "淡入"){
                    if((1 - (+div.style.opacity)) < 0.0001 && +div.style.opacity !== 1){
                        div.style.opacity = "1";
                        event.target.innerHTML = "淡出";
                        event.target.disabled = false;
                    }else{
                        div.style.opacity = (1 - (+div.style.opacity)) * 0.4 + (+div.style.opacity) + "";
                        setTimeout(fade, 60);
                    }
                }else{
                    if(+div.style.opacity < 0.0001 && +div.style.opacity > 0){
                        div.style.opacity = "0";
                        event.target.innerHTML = "淡入";
                        event.target.disabled = false;
                    }else {
                        div.style.opacity = (+div.style.opacity * 0.6) + "";
                        setTimeout(fade, 60);
                    }
                }
            }
            setTimeout(fade,60);
        }
    }
    function onkeyupFun(event){
        if(event.target.id === "name"){
            if(event.keyCode === 13){
                console.log(event.target.value);
            }
            if(event.keyCode === 27){
                event.target.value = "";
            }
        }
    }
    document.body.addEventListener("click", onclickFun, false);
    document.body.addEventListener("keyup", onkeyupFun, false);

    //使用雪花图，实现一个动画效果
    (function(){
        var div = document.querySelector("#sprites");
            div.style.backgroundPositionY = "0";
        var k = -1;
        setInterval(function(){
            if(parseFloat(div.style.backgroundPositionY) === 0) k = -1;
            if(parseFloat(div.style.backgroundPositionY) === -7680) k = 1;

            div.style.backgroundPositionY = parseFloat(div.style.backgroundPositionY) + 480*k + "px";
        },80);
    })();
};