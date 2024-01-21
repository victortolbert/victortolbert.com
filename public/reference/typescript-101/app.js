"use strict";
var appIp = 'abc';
var button = document.querySelector('button');
function add4(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    // let userName = 'Vic'
    console.log('Clicked!' + message);
}
// a comment
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'You’ve clicked the button'));
}
// const nickname = 'Vic'
// console.log(nickname)
//# sourceMappingURL=app.js.map