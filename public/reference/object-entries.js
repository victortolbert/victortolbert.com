// Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj))

// Converting an Object to a Map
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

// Iterating through an Object
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));

// iterate through key-value gracefully
const obj2 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj2)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj2).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
