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
}
