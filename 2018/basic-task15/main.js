window.addEventListener('load',function(){
    var wrapperDiv = document.querySelector(".wrapper");
    var outUl = wrapperDiv.querySelector("#email-sug-wrapper");
    var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    var inputText = wrapperDiv.querySelector("#email-input");
    //获得焦点
    inputText.focus();
    //注册事件处理函数,输入后出现提示框
    inputText.addEventListener('input',function(){
       var text =  getInput(this);
       creatLi(outUl, text, postfixList);
       ctrOutUl(outUl);
    },false);
    //注册事件处理函数，监听键盘事件
    inputText.addEventListener( 'keydown', function(e){
        if(!outUl.children) return;
        var tempSelectedLi = null;
        for(var i = 0; i < outUl.childElementCount; i++){
            if(outUl.children[i].classList.contains("selected")){
                tempSelectedLi = outUl.children[i];
                break;
            }
        }

        if(e.key === "ArrowUp"){
            tempSelectedLi.classList.remove("selected");
            if(tempSelectedLi !== outUl.firstElementChild){
                tempSelectedLi.previousElementSibling.classList.add("selected");
            }else{
                outUl.lastElementChild.classList.add("selected");
            }
        }
        if(e.key === "ArrowDown"){
            tempSelectedLi.classList.remove("selected");
            if(tempSelectedLi !== outUl.lastElementChild){
                tempSelectedLi.nextElementSibling.classList.add("selected");
            }else{
                outUl.firstElementChild.classList.add("selected");
            }
        }
        if(e.key === "Enter"){
            inputText.value = tempSelectedLi.textContent;
            inputText.focus();
        }
    }, false);
    //单独监听键盘ESC事件
    inputText.addEventListener('keydown',function(e){
        if(e.key === "Escape"){
            inputText.select();
        }
    },false);

    //注册事件处理函数，点击后输输入内容到输入框，并消失提示框
    outUl.addEventListener('click',function(){
        if(event.target.nodeName.toLowerCase() === "li"){
            inputText.value = event.target.textContent;
        }
        hid(outUl);
        inputText.focus();
    },false);
    //获取用户输入
    function getInput(textInput){
        var result = new Array(2);
        var tempText = textInput.value.trim();
        result[0] = (document.createTextNode(tempText)).nodeValue;
        if(result[0].search("@") > 0){
            result[1] = result[0].slice(result[0].search("@") + 1, );
            result[0] = result[0].slice(0 , result[0].search("@"));
        }
        return result;
    }
    //生成提示框提示内容
    function creatLi(ulEle, text, basicArr){
        if(!text[0]) {
            ulEle.innerHTML = "";
            return;
        }
        if(basicArr.length === 0 || ulEle === null) {
            return;
        }

        ulEle.innerHTML = "";
        var tempEleArr = [];
        var tempKeyArr = [];

        basicArr.forEach(function(item, idx, arr){
            var li = document.createElement('li');
            li.textContent = text[0] + "@" +  item;
            if(idx === 0) li.classList.add("selected");
            tempEleArr.push(li);
            if(item.search(text[1]) === 0){
                tempKeyArr.push(idx);
            }
        });

        if(tempKeyArr.length > 0){
            tempKeyArr.forEach(function(item, idx,arr){
                ulEle.appendChild(tempEleArr[item]);
            });
        }else{
            tempEleArr.forEach(function(item, idx, arr){
                ulEle.appendChild(item);
            });
        }
    }
    //控制列表的显示隐藏
    function ctrOutUl(ulEle) {
        if (!ulEle.firstElementChild) {
            hid(ulEle);
        } else {
            visi(ulEle);
        }
    }
    //控制显示
    function visi(ele) {
        if(!ele) return;
        ele.style.cssText = "";
        ele.style.cssText = "display: initial;";
    }
    //控制隐藏
    function hid(ele) {
        if(!ele) return;
        ele.style.cssText = "";
        ele.style.cssText = "display: none;";
    }
},false);