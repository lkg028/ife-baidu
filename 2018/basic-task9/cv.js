window.onload = function(){
    var weichat_p = document.getElementById("weichat-p");
    var weichat_qd = document.getElementById("weichat");

    //定义一个事件函数
    function visible(){
        weichat_qd.classList.toggle("visible");
        return false;
    }
    function hidden(){
        if(weichat_qd.classList.contains("visible")){
            weichat_qd.classList.remove("visible")
        }
        return false;
    }
    weichat_p.onclick = visible;
    weichat_p.onmouseover = visible;
    weichat_p.onmouseout = hidden;
};