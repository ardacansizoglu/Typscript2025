"use strict";
class BinaryTreeNode {
    constructor(value) {
        this.left = null; //null= ile initial null olacak 
        this.right = null;
        this.value = value;
    }
}
const rootNode = new BinaryTreeNode(10);
const leftChild1 = new BinaryTreeNode(5);
const rightChild1 = new BinaryTreeNode(15);
rootNode.left = leftChild1;
rootNode.right = rightChild1;
console.log(rootNode);
const leftChild2 = new BinaryTreeNode(3);
const rightChild2 = new BinaryTreeNode(8);
leftChild1.left = leftChild2;
leftChild1.right = rightChild2;
console.log(rootNode);
