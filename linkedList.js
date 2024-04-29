/**
 * Linked List Implementation
 *
 * Implement a simple linked list in JavaScript which supports three operations:
 * 1. addToTail(value): Appends a node with the given value to the end of the list.
 * 2. removeHead(): Removes the first node of the list and returns its value.
 *    Return null if the list is empty.
 * 3. contains(value): Returns true if a node with the given value exists in the list,
 *    otherwise returns false.
 *
 * Constraints:
 * - All node values will be integers.
 * - Number of function calls will not exceed 1000.
 */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Appends a node with the specified value to the end of the list.
   * @param {number} value - The value of the node to add to the list.
   */
  addToTail(value) {
    // Implement this method
  }

  /**
   * Removes the head node from the list and returns its value.
   * Returns null if the list is empty.
   * @return {number | null} - The value of the removed head node or null.
   */
  removeHead() {
    // Implement this method
  }

  /**
   * Checks if the list contains a node with the specified value.
   * @param {number} value - The value to search for in the list.
   * @return {boolean} - True if the list contains the value, otherwise false.
   */
  contains(value) {
    // Implement this method
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
console.log(linkedList.removeHead()); // Expected: 1
console.log(linkedList.contains(1)); // Expected: False
console.log(linkedList.contains(2)); // Expected: True
