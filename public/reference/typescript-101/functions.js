"use strict";
function add3(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result: ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(printResult2(add3(5, 12)));
// let combineValues: Function
var combineValues;
combineValues = add3;
// combineValues = printResult2
// combineValues = 5
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//# sourceMappingURL=functions.js.map