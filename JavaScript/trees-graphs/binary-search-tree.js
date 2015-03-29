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

var bst = new BinarySearchTree();
bst.add(15);
bst.add(5);
bst.add(20);
bst.add(10);
bst.add(35);

console.log(bst);