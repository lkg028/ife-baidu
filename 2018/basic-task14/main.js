function Go() {
    console.log("Go");
}

function GoSteps(n) {
    if(!arguments.length) n = 1;
    n = Math.floor(+n);
    if(isNaN(n) || n < 0) return;
    while(n--){
        Go();
    }

}

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0);  // 0次
GoSteps(-1);  // 0次
GoSteps(1.4);  // Go 1次
GoSteps(1.6);  // Go 1次
GoSteps(-1);  // 0次
GoSteps(true);  // Go 1次
GoSteps(false);  // 0次
GoSteps("Test");  // 0次
GoSteps(NaN);  // 0次
GoSteps(null);  // 0次

//根据Date对象，返回月份，两个字符。
function myGetMonth(date){
    var result = date.getMonth() + 1;
    if(result < 10){result = "0" + result;}
    return result + "";
}
//根据Date对象，返回日期，两个字符。
function myGetDate(date){
    var result = date.getDate();
    if(result < 10){result = "0" + result;}
    return result + "";
}
//根据Date对象，今天是星期几？
function myGetDay(date){
    var result = "";
    switch(date.getDay()){
        case 0: 
            result = "星期日";
            break;
        case 1: 
            result = "星期一";
            break;
        case 2:
            result = "星期二";
            break;
        case 3:
            result = "星期三";
            break;
        case 4:
            result = "星期四";
            break;
        case 5:
            result = "星期五";
            break;
        case 6:
            result = "星期六";
            break;
        default:
            break;
    }
    return result;
}

//获得星期，英文
function myGetDayEn(date){
    var result = "";
    switch(date.getDay()){
        case 0: 
            result = "Sunday";
            break;
        case 1: 
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
        default:
            break;
    }
    return result;
}
//获得小时
function myGetHours(date){
    var result = date.getHours();
    if(result < 10){result = "0" + result;}
    return result + "";
}
//获得分钟
function myGetMinutes(date){
    var result = date.getMinutes();
    if(result < 10){result = "0" + result;}
    return result + "";
}
//获得秒
function myGetSeconds(date){
    var result = date.getSeconds();
    if(result < 10){result = "0" + result;}
    return result + "";
}

//输出一定格式的时间，2008年10月10日星期一 12:12:12
function outTime(date){
    result = "北京时间： " + date.getFullYear() + "年" + myGetMonth(date) + "月" 
            + myGetDate(date) + "日" + myGetDay(date) + myGetHours(date) + ":" + myGetMinutes(date) + ":" + myGetSeconds(date);
    return result;
}
function outTime1(date){
    result = "北京时间：" +  date.getFullYear() + "-" + myGetMonth(date) + "-" 
            + myGetDate(date) + " " + myGetDayEn(date) + " " + myGetHours(date) + ":" + myGetMinutes(date) + ":" + myGetSeconds(date);
    if(myGetHours(date) < 12) result += " AM";
    else result += " PM";
    return result;
}
window.addEventListener('load', function(){
    var outPutP = document.createElement("p");
    var outPutP1 = document.createElement("p");
        outPutP.style.cssText = "font-size:20px;";
        outPutP1.style.cssText = "font-size:20px;";
        document.body.appendChild(outPutP);
        document.body.appendChild(outPutP1);
    setInterval(function(){
        var now = new Date();
        outPutP.innerHTML = outTime(now);
        outPutP1.innerHTML = outTime1(now);
    },100);

    //一个简单的倒计时
    //先生成要使用的HTML
    var docFragment = document.createDocumentFragment();

    var yearSelect = document.createElement("select");
        yearSelect.id = "year-select";
        docFragment.appendChild(yearSelect);
    var yearLabel = document.createElement("label");
        yearLabel.setAttribute("for", "year-select");
        yearLabel.innerHTML = " 年 ";
        docFragment.appendChild(yearLabel);

    var monthSelect = document.createElement("select");
        monthSelect.id = "month-select";
        docFragment.appendChild(monthSelect);
    var monthLabel = document.createElement("label");
        monthLabel.setAttribute("for", "month-select");
        monthLabel.innerHTML = " 月 ";
        docFragment.appendChild(monthLabel);

    var daySelect = document.createElement("select");
        daySelect.id = "day-select";
        docFragment.appendChild(daySelect);
    var dayLabel = document.createElement("label");
        dayLabel.setAttribute("for", "day-select");
        dayLabel.innerHTML = " 日&nbsp;&nbsp;&nbsp;&nbsp;";
        docFragment.appendChild(dayLabel);

    var hourSelect = document.createElement("select");
        hourSelect.id = "hour-select";
        docFragment.appendChild(hourSelect);
    var hourLabel = document.createElement("label");
        hourLabel.setAttribute("for", "hour-select");
        hourLabel.innerHTML = "时";
        docFragment.appendChild(hourLabel);

    var minSelect = document.createElement("select");
        minSelect.id = "min-select";
        docFragment.appendChild(minSelect);
    var minLabel = document.createElement("label");
        minLabel.setAttribute("for", "min-select");
        minLabel.innerHTML = "分";
        docFragment.appendChild(minLabel);

    var secondSelect = document.createElement("select");
        secondSelect.id = "second-select";
        docFragment.appendChild(secondSelect);
    var secondLabel = document.createElement("label");
        secondLabel.setAttribute("for", "second-select");
        secondLabel.innerHTML = "秒";
        docFragment.appendChild(secondLabel);

    var now = new Date();
    //生成年份
    for(var i = now.getFullYear() - 50;i < now.getFullYear() + 50; i++){
        var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i + "";
        if(now.getFullYear() === i ) opt.selected = true;
        yearSelect.appendChild(opt);
    }
    //生成月份
    for(var i = 1;i <= 12; i++){
        var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i + "";
        if(now.getMonth() + 1 === i ) opt.selected = true;
        monthSelect.appendChild(opt);
    }
    //生成日期
    var lastThreeDays = [];
    for(var i = 1;i <= 31;i++){
        var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i + "";
        if(now.getDate() === i ) opt.selected = true;
        if(i>28) lastThreeDays.push(opt);
        daySelect.appendChild(opt);
    }

    //调整天数
    function setDayOptions(year, month){
        lastThreeDays.forEach(function(item,idx,arr){
            item.style.display = "initial";
        });
        switch(+month){
            case 2: 
                lastThreeDays[1].style.display = "none";
            case 4: 
            case 6: 
            case 9: 
            case 11:
                lastThreeDays[2].style.display = "none";
                break;
        }
        if((year%4 === 0 && year%100 !== 0) || (year%400 === 0 && year%3200 !== 0)){
            lastThreeDays[0].style.display = "none";
        }

    }
    setDayOptions(yearSelect.value, monthSelect.value);

    //生成小时
    for(var i = 0;i <= 23; i++){
        var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i + "";
        if(now.getHours() === i ) opt.selected = true;
        hourSelect.appendChild(opt);
    }
    //生成分钟
    for(var i = 0;i <= 59; i++){
        var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i + "";
        if(now.getMinutes() === i ) opt.selected = true;
        minSelect.appendChild(opt);
    }
    //生成秒
    for(var i = 0;i <= 59; i++){
        var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i + "";
        if(now.getSeconds() === i ) opt.selected = true;
        secondSelect.appendChild(opt);
    }

    document.body.appendChild(docFragment);
    //根据选定的时间输出倒计时
    (function(){
        var outPutP = document.createElement("p");
        document.body.appendChild(outPutP);
        function changeFun(){
            var now = new Date();
            var otherTime = new Date(+yearSelect.value, +monthSelect.value - 1, +daySelect.value, 
                                        hourSelect.value, +minSelect.value, +secondSelect.value, now.getMilliseconds());
            var diff = otherTime - now;
            if(diff > 0) outPutP.innerHTML = "距离您选择的时间还有：";
            else outPutP.innerHTML = "距离您选择的时间已经过去：";
            diff = Math.abs(diff);
            outPutP.innerHTML += Math.floor(diff/86400000) + "天";
            diff %= 86400000;
            outPutP.innerHTML += Math.floor(diff/3600000) + "小时";
            diff %= 3600000;
            outPutP.innerHTML += Math.floor(diff/60000) + "分";
            diff %= 60000;
            outPutP.innerHTML += Math.floor(diff/1000) + "秒";
            diff %= 1000;
        }
        yearSelect.onchange = changeFun;
        monthSelect.onchange = changeFun;
        daySelect.onchange = changeFun;
        hourSelect.onchange = changeFun;
        minSelect.onchange = changeFun;
        secondSelect.onchange = changeFun;
        setInterval(changeFun, 500);
    })();

},false);