const Tree = require('./tree')

// Función para generar un array de números aleatorios
function randomArray(size, max) {
	return Array.from({ length: size }, () => Math.floor(Math.random() * max))
}

// Crear el BST
const arr = randomArray(10, 100)
const bst = new Tree(arr)

console.log('Is the tree balanced?', bst.isBalanced())

console.log('Level Order:')
bst.levelOrder((node) => console.log(node.data))

console.log('Pre Order:')
bst.preOrder((node) => console.log(node.data))

console.log('Post Order:')
bst.postOrder((node) => console.log(node.data))

console.log('In Order:')
bst.inOrder((node) => console.log(node.data))

// Desbalancear el árbol
for (let i = 0; i < 5; i++) {
	bst.insert(100 + Math.floor(Math.random() * 100))
}

console.log('Is the tree balanced?', bst.isBalanced())

// Rebalancear el árbol
bst.rebalance()

console.log('Is the tree balanced?', bst.isBalanced())

console.log('Level Order:')
bst.levelOrder((node) => console.log(node.data))

console.log('Pre Order:')
bst.preOrder((node) => console.log(node.data))

console.log('Post Order:')
bst.postOrder((node) => console.log(node.data))

console.log('In Order:')
bst.inOrder((node) => console.log(node.data))
