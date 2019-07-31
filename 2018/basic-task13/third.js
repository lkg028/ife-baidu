/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";
    var start = 0, end = str.length;
    for(var i = 0; i < str.length;i++){
        if(str[i] !== "\u3000" && str[i] !== "\u0020"){
            break;
        }
    }
    start = i;
    for(var k = str.length - 1; k > start;k--){
        if(str[k] !== "\u3000" && str[k] !== "\u0020"){
            break;
        }
    }
    end = k + 1;
    result = str.slice(start, end);
    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->
/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    for(var i = 0;i < str.length - 1; i++){
        if(i === 0) result += str[0];
        if(str[i] !== str[i+1]) result += str[i+1];
    }
    return result;
}
// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc