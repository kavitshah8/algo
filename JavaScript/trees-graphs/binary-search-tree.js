// Create Binary Tree

function BinarySearchTree(){
	this._root = null;
}

BinarySearchTree.prototype.add = function(value) {
	
	var node = {
		value: value,
		left: null,
		right: null
	};

	var current;

	if (this._root === null) {
		this._root = node;
	} else {
		current = this._root;

		while (true) {

			if (value < current.value) {
				if (current.left === null) {
					current.left = node;
					break; 
				} else {
					current = current.left;
				}
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = node;
					break;
				} else {
					current = current.right;
				}
			} else {
				break;
			}

		}
	}
};

BinarySearchTree.prototype.traverse = function(tree) {
	
	// helper function
	function inOrder(node){

		if (node) {
			
			if (node.left) {
				inOrder.call(this, node.left);
			}

			console.log(node);
			
			if (node.right) {
				inOrder.call(this, node.right)
			}
		
		}
	
	}

	inOrder(tree._root);
};

var bst = new BinarySearchTree();
bst.add(15);
bst.add(5);
bst.add(4);
bst.add(6);
bst.add(20);
bst.add(16);
bst.add(21);
bst.traverse(bst);
// console.log(bst);