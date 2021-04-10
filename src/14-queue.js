const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.value = element;
    if (this.size === 0) {
      this.head = node;
    } else {
      let lastnode = this.head;
      while (lastnode.next) {
        lastnode = lastnode.next;
      }
      lastnode.next = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head.next) {
      return this.head.value;
    }
    const top = this.head.value;
    this.head = this.head.next;
    return top;
  }
}

module.exports = Queue;
