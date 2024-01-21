/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

[1, 2, 3].map(number => `A string containing the ${number}.`);
/*
A string containing the 1.,A string containing the 2.,A string containing the 3.
*/

class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}

class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}

// good
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }

  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}

/*
Exception: SyntaxError: redeclaration of let Jedi
@Scratchpad/2:1:1
*/

const schools = {
  "Yourtown": 10,
  "Washington & Lee": 2,
  "Wakefiled": 5,
}

const schoolArray = Object.keys(schools).map(key => ({
  name: key,
  wins: schools[key]
}))

console.log(schoolArray)
