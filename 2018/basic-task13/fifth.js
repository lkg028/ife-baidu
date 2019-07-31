window.onload = function(){
    var queue = ["apple", "pear"];
    var arrayWrap = document.querySelector("#array-wrap");
    var itemInput = arrayWrap.querySelector("#queue-input");
    var arrayOutput = arrayWrap.querySelector("#queue-cont");

    function clickFun(event){
        if(event.target.id === "in-btn" && itemInput.value){
            queue.unshift(itemInput.value);
        }
        if(event.target.id === "out-btn"){
            queue.shift();
        }
        if(event.target.id === "font-btn"){
            if(!queue.length) arrayOutput.innerHTML = "当前队列为空。";
            else arrayOutput.innerHTML = "当前队列队头为：" + queue[0];
            return;
        }
        if(event.target.id === "empty-btn"){
            if(!queue.length) arrayOutput.innerHTML = "当前队列为空。";
            else arrayOutput.innerHTML = "队列内容：" + queue.join("&lt;-");
            return;
        }
        arrayOutput.innerHTML = "队列内容：" + queue.join("&lt;-");
    }

    arrayWrap.addEventListener("click", clickFun, false);
};
