const Node = require('./node')

class Tree {
	constructor(arr) {
		this.root = this.buildTree(arr)
	}

	buildTree(arr) {
		const sortedArr = arr.sort((a, b) => a - b)
		const removedDuplicatesArr = sortedArr.filter(
			(item, index) => sortedArr.indexOf(item) === index
		)

		const buildSubTree = (start, end) => {
			if (start > end) return null

			const mid = Math.floor((start + end) / 2)
			const root = new Node(removedDuplicatesArr[mid])

			root.left = buildSubTree(start, mid - 1)
			root.right = buildSubTree(start + 1, end)

			return root
		}

		return buildSubTree(0, removedDuplicatesArr.length - 1)
	}

	insert(value) {
		if (this.root === null) {
			this.root = new Node(value)
			return
		}

		const insertNode = (node, value) => {
			if (value < node.data) {
				if (node.left === null) {
					node.left = new Node(value)
				} else {
					insertNode(node.left, value)
				}
			} else if (value > node.data) {
				if (node.right === null) {
					node.right = new Node(value)
				} else {
					insertNode(node.right, value)
				}
			}
		}

		insertNode(this.root, value)
	}

	delete(value) {
		const deleteNode = (node, value) => {
			if (node === null) return null

			if (value < node.data) {
				node.left = deleteNode(node.left, value)
			} else if (value > node.data) {
				node.right = deleteNode(node.right, value)
			} else {
				// Nodo encontrado, ahora a eliminarlo

				// Caso 1 y 2: Sin hijos o un hijo
				if (node.left === null) {
					return node.right
				} else if (node.right === null) {
					return node.left
				}

				// Caso 3: Dos hijos
				// Encuentra el sucesor (el mínimo en el subárbol derecho)
				let successorParent = node
				let successor = node.right
				while (successor.left !== null) {
					successorParent = successor
					successor = successor.left
				}

				// Reemplaza el valor del nodo a eliminar con el del sucesor
				node.data = successor.data

				// Elimina el sucesor de su posición original
				if (successorParent !== node) {
					successorParent.left = successor.right
				} else {
					successorParent.right = successor.right
				}
			}

			return node
		}

		this.root = deleteNode(this.root, value)
	}

	find(value) {
		const findNode = (node, value) => {
			if (node === null || node.data === value) return node

			if (value < node.data) return findNode(node.left, value)
			return findNode(node.right, value)
		}

		return findNode(this.root, value)
	}

	levelOrder(callback) {
		if (!this.root) return

		const queue = [this.root]
		while (queue.length > 0) {
			const node = queue.shift()
			callback(node)

			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
	}

	inOrder(callback) {
		const traverse = (node) => {
			if (node === null) return

			traverse(node.left)
			callback(node)
			traverse(node.right)
		}

		traverse(this.root)
	}

	preOrder(callback) {
		const traverse = (node) => {
			if (node === null) return

			callback(node)
			traverse(node.left)
			traverse(node.right)
		}

		traverse(this.root)
	}

	postOrder(callback) {
		const traverse = (node) => {
			if (node === null) return

			traverse(node.left)
			traverse(node.right)
			callback(node)
		}

		traverse(this.root)
	}
}
