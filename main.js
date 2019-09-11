// create stack

class Stack { 
  
     constructor() 
    { 
        this.items = []; 
    } 
  
    push(element) 
    { 
        this.items.push(element); 
    }  

    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    }  

} 

let stack = new Stack(); 
 
// returns Underflow 
console.log(stack.pop());  

// Adding element to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30); 

console.log(stack);



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

// node
class Node { 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}; 

console.log(Node);

// tree
class BinarySearchTree 
{ 
    constructor() 
    { 
        this.root = null; 
    } 
   
 // создание нового узла   
    insert(data) 
    { 

        let newNode = new Node(data); 
                        
        if (this.root === null) 
            this.root = newNode; 
        else
            this.insertNode(this.root, newNode); 
            
    }  

// вставка узла в дерево на свое место в зависимости от значения
    insertNode(node, newNode) 
    { 

        if(newNode.data < node.data) { 
            if(node.left === null) 
                node.left = newNode; 
            else

                this.insertNode(node.left, newNode); 
        } 

        else { 
            if(node.right === null) 
                node.right = newNode; 
            else

                this.insertNode(node.right,newNode); 
        } 
    } 

    // удаление узла
    remove(data) 
    { 
        this.root = this.removeNode(this.root, data); 
    } 
      
    removeNode(node, key)  
    { 
        if(node === null) 
            return null; 
    
        else if(key < node.data) 
        { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 
    
        else if(key > node.data) { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } 
    
        else { 
            if(node.left === null && node.right === null) { 
                node = null; 
                return node; 
            } 
    
            if(node.left === null) { 
                node = node.right; 
                return node; 
            } 
              
            else if(node.right === null) { 
                node = node.left; 
                return node; 
            } 
    
            let aux = this.findMinNode(node.right); 
            node.data = aux.data; 
      
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        } 
      }  
                    
    // Методы
    // поиск узла с минимальным значением

    findMinNode(node) 
    { 

        if(node.left === null) 
            return node; 
        else
            return this.findMinNode(node.left); 
    }

        // корневой узел
    getRootNode() 
    { 
        return this.root; 
    } 

    // обход дерева

    // inorder

    inorder(node) 
    { 
        if(node !== null) { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    } 
    
    // preorder
    
    preorder(node) 
    { 
        if(node != null) { 
            console.log(node.data); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    } 
    
    // postorder
    
    postorder(node) 
    { 
        if(node != null) { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.data); 
        } 
    } 

        // поиск узла с определенным значением
    search(node, data) 
    { 

        if(node === null) 
            return null; 
    
        else if(data < node.data) 
            return this.search(node.left, data); 
    
        else if(data > node.data) 
            return this.search(node.right, data); 
    
        else
            return node; 
    } 
} 

// реализация

let BST = new BinarySearchTree(); 

BST.insert(32); 
BST.insert(4); 
BST.insert(54); 
BST.insert(3); 
BST.insert(2); 

console.log(BST);

let root = BST.getRootNode(); 

BST.inorder(root); 

BST.remove(4); 
BST.inorder(root); 