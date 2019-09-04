
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

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function tree(data) {
    var node = new Node(data);
    this._root = node;
}

var tree = new tree('CEO');

// {data: 'CEO', parent: null, children: []}
tree._root;

console.log(tree)