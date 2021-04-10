/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(element) {
    this.stack[this.size] = element;
    this.size++;
  }

  pop() {
    const p = this.stack[this.size - 1];
    this.stack.splice(this.size - 1, 1);
    this.size--;
    return p;
  }

  peek() {
    return this.stack[this.size - 1];
  }
}

module.exports = Stack;
