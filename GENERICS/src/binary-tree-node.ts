class BinaryTreeNode<T> {
    value: T;
    left: BinaryTreeNode<T> | null = null;//null= ile initial null olacak 
    right: BinaryTreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

    const rootNode = new BinaryTreeNode<number>(10);
    const leftChild1 = new BinaryTreeNode<number>(5);
    const rightChild1 = new BinaryTreeNode<number>(15);
    
    rootNode.left = leftChild1;
    rootNode.right = rightChild1;

    console.log(rootNode)

    const leftChild2 = new BinaryTreeNode<number>(3);
    const rightChild2 = new BinaryTreeNode<number>(8);

    leftChild1.left = leftChild2;
    leftChild1.right = rightChild2;

console.log(rootNode)

 