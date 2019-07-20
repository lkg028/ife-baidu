window.onload = function(){
    var num1 = document.getElementById("first-number");
    var num2 = document.getElementById("second-number");
    var output = document.getElementById("result");

    
    document.getElementById("add-btn").onclick = function() {
        var num1_value = +num1.value;
        var num2_value = +num2.value;
        output.innerHTML = "运算结果<br>" + (num1_value + num2_value);
    };
    document.getElementById("minus-btn").onclick = function() {
        var num1_value = +num1.value;
        var num2_value = +num2.value;
        output.innerHTML = "运算结果<br>" + (num1_value - num2_value);
    };
    document.getElementById("times-btn").onclick = function() {
        var num1_value = +num1.value;
        var num2_value = +num2.value;
        output.innerHTML = "运算结果<br>" + (num1_value * num2_value);
    };
    document.getElementById("divide-btn").onclick = function() {
        var num1_value = +num1.value;
        var num2_value = +num2.value;
        output.innerHTML = "运算结果<br>" + (num1_value / num2_value);
    };
    
};