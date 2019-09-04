
// create stack
let stack = [];
stack.push("1");
stack.push("2", "3");
let elem = stack.pop();
stack.push( 'text');
elem = stack.pop();
elem = stack.pop();
stack.push( 'sa');
console.log(stack)
console.log(elem)

// create queue 1 
let queue1 = [];
queue1.push('1');
queue1.push('4', '6')
let el1 = queue1.shift();
queue1.push('fds');
el1 = queue1.shift();
el1 = queue1.shift();
console.log(queue1);
console.log(el1);

// create queue 2
let queue2 = [];
queue2.push('1');
queue2.push('4', '6')
let el2 = queue2.unshift();
queue2.pop('fds');
console.log(queue2);
console.log(el2);

// create binary tree

let binaryTree = {
    value: 43,
    left: null,
    right: null
};

console.log(binaryTree);

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
};

function Tree(data) {
    let node = new Node(data);
    this._root = node;
};

let tree = new Tree('CEO');
tree._root;

console.log(tree._root);

Tree.prototype.traverseDF = function(callback) {

 
    (function recurse(currentNode) {
        // шаг 2
        for (let i = 0, length = currentNode.children.length; i < length; i++) {
            // шаг 3
            recurse(currentNode.children[i]);
        }

        // шаг 4
        callback(currentNode);

        // шаг 1
    })(this._root);

};

let tree1 = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree.traverseDF(function(node) {
    console.log(node.data)
});
