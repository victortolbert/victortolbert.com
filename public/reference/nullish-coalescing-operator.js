const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

//  Earlier, when one wanted to assign a default value to a variable, a common pattern was to use the logical OR operator (||):
let foo;

//  foo is never assigned any value so it is still undefined
let someDummyText = foo || 'Hello!';

// However, due to || being a boolean logical operator, the left hand-side operand was coerced to a boolean for the evaluation and any falsy value (0, '', NaN, null, undefined) was not returned. This behavior may cause unexpected consequences if you consider 0, '', or NaN as valid values.


let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""

// The nullish coalescing operator avoids this pitfall by only returning the second operand when the first one evaluates to either null or undefined (but no other falsy values):

let myText = ''; // An empty string (which is also a falsy value)

let notFalsyText = myText || 'Hello world';
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)


let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
