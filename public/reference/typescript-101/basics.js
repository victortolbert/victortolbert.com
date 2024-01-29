"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 1;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
resultPhrase = '5';
var result = add(number1, number2);
add2(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map