
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

/*var queue = [];         // []
queue.push( "first" );  // queue === ["first"]
queue.push( 10, 20 );   // queue === ["first", 10, 20]
var el = queue.unshift(); // queue === [10, 20] && el === "first"
queue.pop( 2 );        // queue === [10, 20, 2]
el = queue.unshift();     // queue === [20, 2] && el === 10
el = queue.unshift();     // queue === [2] && el === 20
el = queue.unshift();     // queue === [] && el === 2
el = queue.unshift();     // queue === [] && typeof el === "undefined"*/