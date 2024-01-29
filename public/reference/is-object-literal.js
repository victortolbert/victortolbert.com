function isObjLiteral(obj) {
  var test  = obj
  return (typeof obj !== 'object' || obj === null
    ? false
    : (
        (function () {
          while (!false) {
            if (Object.getPrototypeOf( test = Object.getPrototypeOf(test)  ) === null) {
              break
            }
          }
          return Object.getPrototypeOf(obj) === test
        })()
      )
  )
}

var cases= {
    objLit : {},
    objNew : new Object(),
    fn : new Function(),
    arr : new Array(),
    str : new String(),
    // img : new Image(),
    bool: true
};

console.dir(cases)

for ( var test in cases ) {
  console.group(test);
  console.dir( {
    type:    typeof cases[test],
    string:  cases[test].toString(),
    result:  isObjLiteral(cases[test])
  });
  console.groupEnd()
}
