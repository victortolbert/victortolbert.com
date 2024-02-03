"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Vic';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, error: code };
    // while(true) {}
}
generateError('An error occurred!', 500);
//# sourceMappingURL=unknown-never.js.map