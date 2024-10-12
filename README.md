# Binary Search Tree (BST) Implementation in JavaScript

This project implements a balanced Binary Search Tree (BST) data structure in JavaScript. It provides an efficient way to store, retrieve, and manipulate ordered data.

## Features

- **Tree Construction**: Build a balanced BST from an array of numbers.
- **Node Insertion**: Add new nodes while maintaining BST properties.
- **Node Deletion**: Remove nodes from the tree.
- **Search**: Find a node with a specific value.
- **Traversal Methods**:
  - Level Order (breadth-first)
  - Pre-order (depth-first)
  - In-order (depth-first)
  - Post-order (depth-first)
- **Tree Analysis**:
  - Calculate height of a node
  - Calculate depth of a node
  - Check if the tree is balanced
- **Rebalancing**: Rebalance an unbalanced tree

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/binary-search-tree-js.git
   ```
2. Navigate to the project directory:
   ```
   cd binary-search-tree-js
   ```
3. Install dependencies (if any):
   ```
   npm install
   ```

## Usage

1. Import the Tree class in your JavaScript file:

   ```javascript
   import Tree from './tree.js'
   ```

2. Create a new BST:

   ```javascript
   const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
   ```

3. Use the various methods to interact with the tree:
   ```javascript
   bst.insert(10)
   bst.delete(7)
   console.log(bst.find(8))
   bst.levelOrder((node) => console.log(node.data))
   console.log(bst.isBalanced())
   bst.rebalance()
   ```

## Example

Check out the `driver.js` file for a comprehensive example of how to use all the features of this BST implementation.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
