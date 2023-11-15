//Methods that we need in Linked List  are Push, pop, shift, unshift, insert, splice, length, print



class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}



class LinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}


	//print

	print(){
		let temp = this.head;

		while(temp != null){
			console.log(temp.data);
			temp = temp.next;
		}
	}

	//push
	push(val){
		let newNode = new Node(val);

		if(this.head === null){
			this.head = newNode
		}
		else{
			let temp = this.head;

			while(temp.next != null){
				temp = temp.next;
			}

			temp.next = newNode;
			
		}

		this.size++;

	}

	//pop
	pop(){

		if(this.head === null){
			return;
		}
		else{
			let temp = this.head;
			let prev = null;

			while(temp.next != null){
				prev = temp;
				temp = temp.next;
			}

			if(prev){
				prev.next = null;
			}
			else{
				this.head = null;
			}

		}

		this.size--;

	}

	//shift
	shift(val){
		
		let newNode = new Node(val);
		let temp = this.head;
		this.head = newNode;
		newNode.next = temp;

		this.size++;
	}

	//unshift
	unshift(){
		if(this.head === null){
			return;
		}
		this.head = this.head.next;

		this.size--;

	}

	//insert
	insert(val, index){
		if(index<0 || index > this.size){
			console.log('Out of bound')
			return;
		}
		else{
			let newNode = new Node(val);
			let temp = this.head;

			let i =0;

			while(i < index){
				temp = temp.next;
				i++;

			}
		}



		this.size++;
	}

	//remove
	remove(index){


		this.size--;

	}

	//length
	length(){
		console.log('Length is ',this.size);
		return this.size;
	}
}


let ll = new LinkedList();

ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.print();
ll.length()



ll.print();
ll.length();













class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
    } else {
      this.head = null;
    }

    return current.value;
  }

  insert(value, index) {
    if (index < 0) {
      throw new Error('Index cannot be negative');
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index && current) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === index) {
      previous.next = newNode;
      newNode.next = current;
    } else {
      throw new Error('Index out of bounds');
    }
  }

  remove(index) {
    if (index < 0) {
      throw new Error('Index cannot be negative');
    }

    if (index === 0) {
      if (!this.head) {
        throw new Error('List is empty');
      }
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode.value;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index && current) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === index && current) {
      previous.next = current.next;
      return current.value;
    } else {
      throw new Error('Index out of bounds');
    }
  }
}


// In this updated implementation, two new methods, `insert` and `remove`, are added to the `LinkedList` class.
// The `insert` method takes a `value` and an `index` as parameters. It creates a new node with the given value and inserts it at the specified index in the linked list. If the index is 0, the new node is inserted at the beginning of the list. If the index is out of bounds, an error is thrown.
// The `remove` method takes an `index` as a parameter and removes the node at the specified index from the linked list. If the index is 0, the first node in the list is removed. If the index is out of bounds or the list is empty, an error is thrown.
// Here's an example usage of the `insert` and `remove` methods:


const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

linkedList.insert(4, 1); // Insert 4 at index 1
console.log(linkedList.pop()); // Output: 3
console.log(linkedList.remove(1)); // Output: 4
console.log(linkedList.remove(0)); // Output: 1


// In this example, we create a linked list with three elements (1, 2, 3) using the `push` method. We then use the `insert` method to insert the value 4 at index 1, resulting in the list (1, 4, 2, 3). We then use the `pop` method to remove the last element from the list, which is 3. Finally, we use the `remove` method to remove the element at index 1, which is 4, and then remove the element at index 0, which is 1.





























// class Node{

// 	constructor(data){
// 		this.data = data;
// 		this.next = null;
// 	}

	
// }



// class LinkedList{

// 	constructor(){
// 		this.head = null;
// 		this.size = 0;
// 	}

// 	print(){
// 		let temp = this.head;


// 		while(temp !== null){
// 			console.log( temp.data);

// 			temp = temp.next;
// 		}
// 	}

// 	addVal(val){
// 		let newNode = new Node(val);

// 		if(this.head === null){
// 			this.head = newNode;
// 		}
// 		else{

// 			let temp = this.head;

// 			while(temp.next != null){
// 				temp = temp.next;
// 			}
// 			temp.next = newNode;


// 		}
// 		this.size++;

// 	}



// 	addAt(val, index){

// 		if(index > this.size || index < 0){
// 			return ;
// 		}
// 		if(index === 0){
// 			let newNode = new Node(val);

// 			newNode.next = this.head;
// 			this.head = newNode;
// 		}
// 		else{
// 			let temp = this.head;


// 			let i = 0;
// 			while(i < index-1){
// 				temp = temp.next;
// 				i++;
// 			}

// 			let old = temp.next;
// 			temp.next = new Node(val);
// 			temp.next.next = old;



// 		}

// 		this.size++;

// 	}

// 	length(){
// 		console.log(this.size)
// 		return this.size;
// 	}


// }

// let ll = new LinkedList();

// ll.addVal(30)
// ll.addVal(40)

// ll.addAt(10, 0)
// ll.addAt(20, 1)
// ll.addAt(50, 4)



// ll.print()
// ll.length()





// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     print() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

//     addVal(value) {
//         const newNode = new Node(value);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     addAt(index, value) {
//         const newNode = new Node(value);
//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             let count = 0;
//             let prev = null;
//             while (count < index) {
//                 prev = current;
//                 current = current.next;
//                 count++;
//                 if (current === null && count < index) {
//                     console.log("Index out of bounds");
//                     return;
//                 }
//             }
//             prev.next = newNode;
//             newNode.next = current;
//         }
//     }
// }

// // Example usage:
// const ll = new LinkedList();
// ll.addVal(1);
// ll.addVal(2);
// ll.addVal(3);
// console.log("Original LinkedList:");
// ll.print();

// ll.addAt(1, 5);
// ll.addAt(15, 15);
// console.log("LinkedList after adding 5 at index 1:");
// ll.print();
