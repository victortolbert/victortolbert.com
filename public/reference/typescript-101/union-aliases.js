"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && input2 === 'number' || resultConversion == 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toLocaleString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine(30, 26, 'as-text');
console.log(combinedAges);
var combinedNames = combine('Reginald', ' Victor', 'as-text');
console.log(combinedNames);
//# sourceMappingURL=union-aliases.js.map