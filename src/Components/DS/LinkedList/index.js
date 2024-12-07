import React from "react";

const Linked = () => {
  class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }

  // Creating head of the Linked list
  const head = new Node(1);
  console.log("The value at head is " + head.value);
  S;
  console.log("The value at next is " + head.next);
  return <div>Linked</div>;
};

export default Linked;



class Node {
    constructor(value) {
      this.value = value;  // Value of the node (integer)
      this.next = null;    // Pointer to the next node (initially null)
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;  // Initialize the linked list with no elements (head is null)
    }
  
    // Insert an element at the beginning of the list
    insertAtBeginning(value) {
      const newNode = new Node(value);
      newNode.next = this.head;  // Point new node's next to the current head
      this.head = newNode;  // Update the head to the new node
    }
  
    // Insert an element at the end of the list
    insertAtEnd(value) {
      const newNode = new Node(value);
      
      if (this.head === null) {
        this.head = newNode;  // If the list is empty, make the new node the head
        return;
      }
  
      let current = this.head;
      while (current.next !== null) {
        current = current.next;  // Traverse to the last node
      }
  
      current.next = newNode;  // Set the next of the last node to the new node
    }
  
    // Insert an element at a specific position (0-based index)
    insertAtPosition(value, position) {
      if (position === 0) {
        this.insertAtBeginning(value);  // Special case for inserting at the beginning
        return;
      }
  
      const newNode = new Node(value);
      let current = this.head;
      let index = 0;
  
      // Traverse to the node just before the desired position
      while (current !== null && index < position - 1) {
        current = current.next;
        index++;
      }
  
      if (current === null) {
        console.log("Position out of bounds");
        return;
      }
  
      newNode.next = current.next;  // Set new node's next to the current node's next
      current.next = newNode;  // Set current node's next to the new node
    }
  
    // Delete a node by value
    deleteByValue(value) {
      if (this.head === null) {
        console.log("List is empty");
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;  // If head node contains the value, move head to the next node
        return;
      }
  
      let current = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;  // Traverse to find the node containing the value
      }
  
      if (current.next === null) {
        console.log("Value not found");
        return;
      }
  
      current.next = current.next.next;  // Skip the node to delete it
    }
  
    // Delete a node by position (0-based index)
    deleteByPosition(position) {
      if (this.head === null) {
        console.log("List is empty");
        return;
      }
  
      if (position === 0) {
        this.head = this.head.next;  // Special case for deleting the head node
        return;
      }
  
      let current = this.head;
      let index = 0;
  
      // Traverse to the node just before the desired position
      while (current !== null && index < position - 1) {
        current = current.next;
        index++;
      }
  
      if (current === null || current.next === null) {
        console.log("Position out of bounds");
        return;
      }
  
      current.next = current.next.next;  // Skip the node to delete it
    }
  
    // Display all elements in the list
    display() {
      if (this.head === null) {
        console.log("List is empty");
        return;
      }
  
      let current = this.head;
      let result = [];
      
      while (current !== null) {
        result.push(current.value);
        current = current.next;  // Move to the next node
      }
  
      console.log(result.join(" -> "));  // Print the values in the list in a readable format
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  
  list.insertAtEnd(10);
  list.insertAtEnd(20);
  list.insertAtBeginning(5);
  list.insertAtPosition(15, 2);
  
  list.display();  // Output: 5 -> 10 -> 15 -> 20
  
  list.deleteByValue(10);
  list.display();  // Output: 5 -> 15 -> 20
  
  list.deleteByPosition(1);
  list.display();  // Output: 5 -> 20
  
