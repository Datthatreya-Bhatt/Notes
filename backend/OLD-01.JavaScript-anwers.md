what is the difference between ++ and += 1 (post and pre increment)?

	In JavaScript, the **pre-increment** and **post-increment** operators are used to increase the value of a variable before or after using its value, respectively. When using the pre-increment, the increment operation is performed first, and the incremented value is used as the result. In contrast, with post-increment, the increment operation is performed after the variable is used. For example:
	- Pre-increment: `let x = 4; let y = ++x; // x = 5, y = 5`
	- Post-increment: `let x = 4; let y = x++; // x = 5, y = 4`



1.What is difference between let, const and var?
	1.let and const were introduced in es6 and var keyword was used from the beginning
	2.We can do hoisting with var keyword, but it happens differently with let and const variable.
	3.We can declare a variable with same name in same scope in case of var, but it is not possible with let and cost declarations.
	4.Var is function scoped whereas let and const are block scoped.
	5.We can declare var and let declaration without any value, but const declaration will give error.
	6.We can change value for let and var declaration, but same is not possible with const declaration. 



2.how can you print a first and b later with. You are not allowed to use any extra setTimeouts?
SetTimeout(()=>{
Console.log("a");
},2000)
Console.log("b") ;

	async function fun(){
	    await new Promise(resolve => 
	        setTimeout(()=>{
	        console.log("a");
	        resolve();
	        },2000)
	    )
	    
	    console.log("b") ;

	}
	fun()






3.What is the typeof an array in javascript?
	Object

4.how can you check if a variable is an array?
	we can use Array.isArray(arr); method.


5.What is output of this ?

setImmediate (()=>{
console.log("first")
})

setTimeout (()=>{
console.log("second")
})

console.log("third");

	third, second, first.




6.Difference between SetImmediate and Process.nexttick, Difference between settimeout, setinterval setimmediate?

	setTimeout: It takes 2 arguments, one is function to be executed and second is a timer in milliseconds to know when to execute. setTimeout dont gurantee that it will execute after given time, but it gurantees that it will take minimun time given as argument. When the time is over it goes to callback queue and later from there this function is executed.

	setInterval: It takes 2 arguments, one is function to be executed and second is a timer in milliseconds to call the given function at that interval.

	setImmediate: It takes only one argument that is a function to be executed, This function is executed after the completion of current event loop.

	process.nextTick() is a method of node js, it takes a function as callback and it execures this function in next iteration of node js event loop.

	setImmediate and process.nextTick() both are executed after the execution of current event loop iteration, but process.nextTick has high priority than setImmediate.



Explain these answers in details with examples

7.Difference between arr.foreach,  array.map and array.filter? Take example  input array and explain the output which you will get

	forEach(): 
	The forEach() method executes a provided function once for each array element. It does not create a new array and does not modify the original array. The return value of forEach() is always undefined.


	map()
	The map() method creates a new array with the results of calling a provided function on every element in the calling array. It does not modify the original array. The return value of map() is a new array with the same length as the original array and function applied on each element.


	filter()
	The filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array. The return value of filter() is a new array with only the elements that pass the test.

	ex:

		let arr = [1,2,3,4,5];

		let filter = arr.filter(element => element > 2);
		console.log(filter);

		let map = arr.map(element => element * 2);
		console.log(map);

		let each = arr.forEach(element => element * 2);
		console.log(each);



Difference between array.map and array.filter

		let arr = [{id: 1, val: 0},
		{id: 2, val: 0},
		{id: 3, val: 0},
		{id: 4, val: 0},];


		let temp = arr.filter((el)=>{
		    return el.id === 2 ? el :'';
		   
		    
		})

		console.log(temp)




8.What is the temporal dead zone? s
	let and const declarations are hoisted but they are differently hoisted than var declarations. These are hoisted in the temporal dead zone for the time being.
	Temporal dead zone is the time between since these let and const variables are hoisted and value assigned to them.


9.Const person=
	{
	Name:p1,
	Age:24
	}
	Can we change age to 25? YESS	 
	Can we do person.push(age:25); NOO


10. Write a function to generate random number between 10 and 99?
	
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min); 
	}
	console.log(getRandom(10,99));


11. Difference between null and undefined.

	Undefined: 
		undefined is a placeholder for all the variable for untill the real values are assigned to them.
		undefined means variable is declared but value is not assigned to it.
		Type of undefined is undefined.

	null: 
		null is a value in itself and null is a placeholder for no value. 
		null represents no value.
		Type of null is object.




12. Difference between undeclared and undefined.

	Before any js code is run there are 2 phases, which are memory allocation and code execution.
	In memory allocation phase variables are assigned a temporory value called undefined. In code execution phase real values are assigned to the variables.

	undefined means variable exist in memory and variable is declared but the value is not assigned at this moment

	undeclared means variable does not exist in memory and it is not declared.





13.Difference between ‘==’ and’ ===’ .

	.'==' is called abstract equality operator, It compares two values for equality after converting both values to a common type. If both values are common it gives true else it gives false.

	'===' is called strict equality operator, It compares two values for equality without converting their types. If both values are common it gives true else it gives false. 



14.Spread and rest operators
[a,...b,]=[1,2,3,4,5]
What are a and b values?

	This code snippet will result in an error because, infront of b there is a comma, and rest operator should be used at the last.if the comma is taken then a value will be 1, because it is in first element in spread operator, b value will be an array containing rest element [2,3,4,5]


	**Rest Operator (...) in JS:**
	The rest operator gathers the remaining elements of an array or object into a single variable.

	Example:
	```javascript
	const [first, second, ...rest] = [1, 2, 3, 4, 5];
	console.log(rest);  // Output: [3, 4, 5]

	**Spread Operator (...) in JS:**
	The spread operator spreads elements of an array or object into a new array or object.

	Example:
	```javascript
	const arr1 = [1, 2, 3];
	const arr2 = [...arr1, 4, 5];
	console.log(arr2);  // Output: [1, 2, 3, 4, 5]
```




	**Spread Operator (...) in JS:**
	The spread operator allows for the expansion of elements from an array or properties from an object, simplifying data manipulation and creation of new arrays or objects.

	Example:
	```javascript
	const arr1 = [1, 2, 3];
	const arr2 = [...arr1, 4, 5];
	console.log(arr2);  // Output: [1, 2, 3, 4, 5]
	```

	In this example, the spread operator is used to create a new array `arr2` by combining the elements of `arr1` with additional values.

15. const fun = () => arguments.length;
console.log(fun(1,2));
What is the output?
	In normal function there is an array called arguments, which contains all the element that is given as argument to that function.But in arrow function that feature is not availabel. However, arrow functions can still access the arguments object of the closest non-arrow parent function using closures.
	So this code snippet will print error, because arguments is not defined, and there is no any function near arrow function.


16. Let arr=[7,8,9,10]
Write a function to check if the given number "n" exists in the array.
If present remove the number from the array , return the remaining array excluding the number else print element not present.

	Use array.splice(index, numberOfElementsToBeRemoved)


17.When do we use async await ?
	async await is a newer version of promises. We use async await in asyncronous code. When we work with promise related code we use async await.It is used when we want to pause the execution of a function until a promise is resolved. This can make our code much easier to read and understand than using callbacks or promises directly.

18.What is the reason behind writing await inside async function only?
	In JavaScript, the await keyword is used to wait for a Promise to resolve or reject. It is used inside an async function only. The reason for using await inside an async function is that await can only be used inside a function that is tagged with the async keyword so JavaScript knows it is a asyncronus code.



19.What will the output of this be?
async fun fun1(){
console.log('a');
console.log('b');
await setTimeout(() => console.log('c'), 1000)
await setTimeout(() => console.log('d'), 0)
console.log('e');
}
fun1()
Explain the reason behind the answer?

	Output will be a,b,e,d,c because the await makes code untill promise is either resolves or rejects, but here no promise is used, so code wont wait.



20. can you solve thee above problem, so that we get proper outputs ? Hint await should works properly.

	async function fun1(){
	    console.log('a');
	    console.log('b');

	    await new Promise((resolve, reject)=>{
	      setTimeout(() => resolve(console.log('c')), 1000)  
	    })
	    await new Promise(resolve => {
	      setTimeout(() =>  resolve(console.log('d')), 0)
	      
	    })

	    console.log('e');
	}
	fun1()




21.What are callback? What is Callback hell? Can you give an example of callback hell?
	Callback is a function which is passed as argument to another function for later execution. When we use callback function in a way that functins become nested and hard to read this situvation is called as callback hell.

	ex:function a (callback){
		setTimeout(()=>{
			console.log('a');
			callback();
		},1000)
	}


	function b (callback){
		setTimeout(()=>{
			console.log('b');
			callback();
		},1000)
	}

	function c (){
		setTimeout(()=>{
			console.log('c');
		},1000)
	}

	a(()=>{
		b(()=>{
			c() // This is a callback hell
		})
	})




22.How are promises more superior than callbacks? How do promises solve the issue of callback hell?
	Promise are superior than callbacks because, promises gives gurantee that it is going to execute either resolve or reject at least once
	Promise makes error handling easy by .catch block
	Promise syntax makes code easier to maintaine
	Promise solve problem of callback hell by giving a proper way to call callback funtion with .then block


23.What are promises? 3 states of promises.
	Promise is an object which represents eventual complition of an async operation. 3 states of promise is pending, resolved, rejected.



24.Why do we use promises over callbacks and why use await and async?
	We use Promise over callback because promise gives the guarantee of execution, it solves callback hell problem which arises when we use callback function inside the callback function and code grows horizontally and creates callback hell. async await is the updated version of promises which makes code look cleaner and makes it easy to manage.



25.What is difference between promise and call back.
	Promise is an object which represents eventual complition of an async operation. 
	callback is a function which is passed as argument to other function for executing later.




26. What were the 10 new features that were introduced in ES6? Explain each one of them in detail? 

	1.Variable declaration
	2.Map and Set
	3.Arrow function
	4.for of and for in loops
	5.class
	6.Template litorals
	7.Spread and rest operators
	8.Object  and Array destructuring


26. when to use for of and when to use for in loops in js

	1. **`for...of` loop:**
	   - Use it to iterate over the values of an iterable object, such as an array, string, map, set, etc.
	   - It provides a simpler syntax for iterating over elements, and it automatically handles the iteration logic based on the iterable's structure.
	   - It's generally preferred when you are interested in the values rather than the indices.

	   Example with an array:
	   ```javascript
	   let arr = [1, 2, 3];

	   for (let value of arr) {
	     console.log(value);
	   }
	   // Output: 1, 2, 3
	   ```

	2. **`for...in` loop:**
	   - Use it to iterate over the enumerable properties of an object. It iterates over the keys (property names), including inherited properties from the object's prototype chain.
	   - It's not recommended for iterating over arrays or array-like objects, as it may lead to unexpected results due to iterating over non-numeric properties and prototype properties.

	   Example with an object:
	   ```javascript
	   let obj = { a: 1, b: 2, c: 3 };

	   for (let key in obj) {
	     console.log(key + ': ' + obj[key]);
	   }
	   // Output: a: 1, b: 2, c: 3
	   ```

	In summary:
	- Use `for...of` when you want to iterate over values of iterable objects like arrays.
	- Use `for...in` when you want to iterate over keys (property names) of objects, but be cautious when using it with arrays.


27. Call, Apply, Bind. When to use what ? Can you give an example?
	In JavaScript, call(), apply(), and bind() are methods that can be used to change the context of this keyword present inside the invoking function. They are used to set the value of this independently of how the function is called, and to pass arguments to a function in a specific way. 

	When to Use Call(), Apply(), and Bind() Methods

	We Use call() when we want to call a function with a specific value of this
	We Use apply() when we want to call a function with a specific value of this, and pass arguments as an array
	We Use bind() when we want to create a new function with a specific value of this, which can be called later.

	Example Usage of Call(), Apply(), and Bind()

	const person = {
	 name: 'John',
	 age: 30,
	};

	function sayHello(greeting) {
	 console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
	}

	// Using call()
	sayHello.call(person, 'Hello');

	// Using apply()
	sayHello.apply(person, ['Hello']);

	// Using bind()
	const sayHelloToPerson = sayHello.bind(person);
	sayHelloToPerson('Hello');





28. What are different ways to store data in browser? Explain each one of them and when should we use what?

	a.Local Storage
	b.Session Storage
	c.Cookies

	Cookies:
	Cookies are small text files that are stored in the user browser by websites. Cookies have several limitations, including a small size limit of 4KB, and the fact that they are sent to the server with every HTTP request.

	Local Storage
	Local storage is a key-value storage mechanism that allows websites to store data locally in the user browser. It has a much larger storage capacity than cookies (up to 5-10 MB), and the data stored in local storage is not sent to the server with every HTTP request.

	Session Storage
	Session storage is similar to local storage in that it is also a key-value storage mechanism. However, the data stored in session storage is only available for the duration of the current browser session. When the user closes the browser or navigates away from the website, the data is deleted.

	When we want to store small data such as user preference or token which need to be sent to server on every http request then we need to store data in cookies
	When we want to store larger data such as user configuration of website, which need not to be sent to browser on every request then we have to use local storage.
	When we want to store temporary data in user browser for only in our tab then we have to use session storage.




	how to use cookies and session storage in js



		### Cookies:

		**Setting a Cookie:**
		```javascript
		document.cookie = "key=value; expires=Thu, 01 Jan 2022 00:00:00 UTC; path=/";
		```

		**Getting a Cookie:**
		
		  const cookies = document.cookie.split('; ');

		```

		### Session Storage:

		**Setting a Session Storage Item:**
		```javascript
		sessionStorage.setItem('key', 'value');
		```

		**Getting a Session Storage Item:**
		```javascript
		const value = sessionStorage.getItem('key');
		console.log(value);
		```

		**Removing a Session Storage Item:**
		```javascript
		sessionStorage.removeItem('key');
		```

		### Note:
		- Cookies have more features, such as an expiration date, path, domain, and secure flag.
		- Session storage is generally simpler to use and is limited to the duration of a page session.
		- Be cautious with the data you store on the client side, especially in cookies, as it can be manipulated by the user.





29.What are generator function in javascript ? How are they different from normal function?

	A generator function in JavaScript is a special type of function that can be paused and resumed during its execution. When a generator function is called, it returns a generator object that can be used to control the execution of the function.

	Generator functions have a similar syntax to regular functions . The only difference is that the generator function is denoted by an asterisk (*) after the function keyword .

	They are different from normal function in several ways
		1.Generator functions use the yield keyword to pause and resume execution, while normal functions use the return keyword to terminate execution.
		2.Generator functions can be paused and resumed during execution, while normal functions run to completion in a single execution.
		3.Generator functions return a generator object, which can be used to control the execution of the function, while normal functions return a value or undefined.


	what is the use of generator function 

	**Generator Function:**
	A generator function in JavaScript produces an iterator with the ability to pause and resume execution using `yield` statements.

	Example:
	```javascript
	function* generateNumbers() {
	  yield 1;
	  yield 2;
	  yield 3;
	}

	const iterator = generateNumbers();
	console.log(iterator.next().value);  // Output: 1
	```

	**Uses:**
	Generator functions are used for asynchronous programming, lazy evaluation, and efficient iteration over large datasets. They offer a more readable and flexible approach compared to traditional callbacks or Promises.



30.What is the use of arr.reduce? Explain with an example.
	
	The arr.reduce() method in JavaScript is used to reduce an array to a single value by executing a provided function for each element of the array. arr.reduce takes 2 arguements, one is function which should be called on every element, and an initial Value.

	In a first iteration reduce function takes given initial values in second arguement and first element of the array and performs the given function and the result will be initial value for second iteration.
	
	ex:
	const numbers = [1, 2, 3, 4, 5];
	const sum = numbers.reduce((initialValue, currentValue) => console.log(initialValue, currentValue), 0);
	console.log(sum); // Output: 15



31.what will the output (true or false) of the following be?Explain why?
console.log(null === undefined)
console.log(null == undefined)

	console.log(null === undefined)
	Output is false because in JavaScript, the === operator (strict equality) checks for both value and type equality. Here, null and undefined are of different types. null is an object type, while undefined is an undefined type. Therefore, they are not strictly equal, and the === comparison returns false.

	console.log(null == undefined)
	Output is true because the == operator (loose equality) performs type conversion if the operands are of different types. In this case, null and undefined are both are different type so it is false values, and when using loose equality, they are treated as equal. JavaScript type conversion rule converts null and undefined to the same value for comparison, resulting in the == comparison returning true




32.What is event bubbling and event capturing (Event Propagation)? what is the difference between them? Can you give a code  example to explain how you can use event bubbling ?
	
	Event bubbling means innermost elements event is handled first and then the outer elements event is handled.
	In Event capturing outermost elements event handled first and then the inner.

	addEventListener function takes 3 arguments one is event on which the function should be invoked and second is the function to be invoked and third is by default is false meaning event bubbling Propagation is handled, we can change it to true to make it event capture Propagation.



33.How to find the length of an object.
	We can use Object.keys() method which returns an array containing all the keys of the object, then we can use .length method on that array to find the length of the object.


34.Explain the different ways of creating object in javascript? Explain all the 3 ways.

	A.Object Literal Notation
	  The most common way to create an object in JavaScript is by using object literal notation. In this approach, we define the object properties and methods directly within curly braces {}

	  // Creating an object using object literal notation
	  const person = {
	   name: "Amar",
	   age: 30,
	   greet: function() {
	    console.log(`Hello, my name is ${this.firstName} and I'm ${this.age} years old.`);
	   }
	  };


	B.Constructor Functions
	  Constructor functions are used to create multiple objects with the same structure. They serve as a blueprint for creating objects, and we use the new keyword to instantiate new instances of the object.
	  // Constructor function
	  function Person(name, age) {
	   this.name = name;
	   this.age = age;
	   this.greet = function() {
	    console.log(`Hello, my name is ${this.firstName} and I'm ${this.age} years old.`);
	   }
	  }

	  // Creating objects using the constructor function
	  const person1 = new Person("Amar", 30);
	  const person2 = new Person("Amith", 25);

	C.ES6 Classes:
	  ES6 introduced a more easy way to create objects using classes. Classes makes object-oriented programming concepts more familiar to developers coming from other languages.

	  // ES6 Class
	  class Person {
	   constructor(name, age) {
	    this.name= name;
	    this.age = age;
	   }

	   greet() {
	    console.log(`Hello, my name is ${this.firstName} and I'm ${this.age} years old.`);
	   }
	  }

	  // Creating objects using ES6 classes
	  const person1 = new Person("Amar", 30);
	  const person2 = new Person("Amith", 25);





35.What are Object Prototype Methods
	
	In JavaScript, every object is linked to a prototype object from which it can inherit properties and methods. Object prototype methods are functions that are defined on the prototype object and are available for use by all instances of that object type.

	Some commonly used prototype methods are as follows:
		Object.keys(obj): Returns objects all keys as an array
		Object.values(obj): Returns objects all values as an array
		Object.entries(obj): Returns an array of arrays, where each inner array contains a key-value pair from the object
		Object.freeze(obj): Freezes an object, preventing any further changes to its properties
		Object.seal(obj): Seals an object, preventing the addition or deletion of properties, though the values of existing properties can still be changed
		Object.is(value1, value2): Compares two values to determine if they are the same value (similar to strict equality ===)


36.How to iterate inside and object and print all the values inside it without the keys? Give a code example? ***
	we can use Object.values method to get all the values as an array and later we can run a loop on the array to print all the values


37.What is object chaining in javascript? Can you create functions to explain object chaining better?
	
	Object chaining, also known as method chaining, is a technique in JavaScript where multiple methods are called on an object one after another, using dot notation. Each method call returns the modified object, allowing us to chain another method call immediately

	let calculator = {
	 value: 0,

	 add(num) {
	  this.value += num;
	  return this;
	 },

	 subtract(num) {
	  this.value -= num;
	  return this;
	 },

	 getValue() {
	  return this.value;
	 }
	};

	const result = calculator.add(10).subtract(5).add(7).getValue();// here we making object chaining by calling one method after another
	console.log(result); // it prints 12


38.What is the main difference between fat arrow function and normal function?

	There are 3 main difference between normal function and fat arrow functions

	A. Syntax:
	Normal functions are defined using function keyword and optional name.
	arrow funtions are defined using Fat arrow symbol

	B.Arguments:
	Normal functions have array like object called Arguments, which has all the arguments passed to this functions as elements.
	Arrow functions dont have their own arguments object, but they can get arguments object from nearby functions.

	C.this keyword:
	Normal functions have their own this context, which can vary based on how the function is called. The value of this is determined by the functions invocation.
	Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing lexical scope






39.Can you give an example to explain how "this" works differenetly with fat arrow function and normal function and Explain “this” keyword ?

	const person = {
	 name: 'Amar',

	 // Using a fat arrow function
	 greetArrow: () => {
	  console.log(`Hello, Im ${this.name}`);
	 },


	 // Using a normal function
	 greetNormal: function() {
	  console.log(`Hello, Im ${this.name}`);
	 }
	};

	person.greetArrow();  //Hello, Im undefined
	person.greetNormal(); // Hello, Im Amar


	With the fat arrow function (greetArrow), the this keyword refers to the context in which the function was created. In this case, the fat arrow function was created within the context of the global scope (or wherever our code is running), so this.name inside greetArrow will be undefined.

	With the normal function (greetNormal), the this keyword refers to the object that the method is being called on. In this case, when we call person.greetNormal(), this refers to the person object, so this.name correctly retrieves the name property of the person object.




40.What are the advantages of Axios vs other competitors( like fetch, http, got etc)? Why is axios so widely used?

	Axios is a popular JavaScript library used for making HTTP requests in browsers and Node.js

		Promise-Based API: Axios uses promises, which allows for cleaner and more easy asynchronous code. It simplifies error handling and chaining of multiple requests.

		Browser and Node.js Support: Axios is designed to work both in web browsers and Node.js environments.

		Request Cancellation: Axios provides built-in support for request cancellation, which is helpful in scenarios where we want to cancel ongoing requests when they are no longer needed, preventing unnecessary network traffic and freeing up resources.

		Client and Server-Side Support: Axios can be used on both the client and server sides.

		Interceptors: Axios allows you to define request and response interceptors, which can modify requests or responses globally. This is useful for scenarios such as adding headers, handling errors, and modifying data.

		Community and Documentation: Axios has a strong community and well-maintained documentation. This makes it easy for developers to find help and resources when working with the library.





41.What is the output of this console.log(0.1 + 0.2). Why is it not 0.3?[Famous Interview question]

	The output of console.log(0.1 + 0.2) in JavaScript will be 0.30000000000000004.
	This behavior is due to the way floating-point arithmetic works in computers. In JavaScript, as in many programming languages, floating-point numbers are represented in binary.

	However, not all decimal numbers can be represented exactly in binary floating-point representation.

	In this case, 0.1 and 0.2 cannot be represented precisely in binary floating-point format, so when they are added together, we get a small rounding error. The result is very close to 0.3, but not exactly equal to it due to the limitations of the binary representation.


42.What will be the output of this console.log((0.2 + 0.3) === 0.5)
	Output of the given code is true, it adds 0.2 to 0.3 and answer will be 0.5 which is true.



43.What is NaN property in JavaScript?

	In JavaScript, NaN stands for Not-a-Number, It is a special value that represents the result of a mathematical operation that cannot be expressed as a valid number. When a mathematical operation or function is performed that doesnt produce a meaningful number result, JavaScript returns NaN to indicate that the result is not a valid number.

	ex:
	console.log('string' / 2); // output is NaN because we cannot divide number with string




44.Explain pass by value and pass by reference? Give code example of how you would pass by reference in javascript?

	Pass by Value:
	In pass by value, a copy of the actual value of a variable is passed to the function. Any modifications made to the parameter inside the function do not affect the original variable outside the function.



	function modifyValue(x) {
	  x = x * 2;
	}



	let num = 5;
	modifyValue(num);
	console.log(num); // Output is 5,

	In this example, the modifyValue function takes a copy of the value stored in the num variable. Even though x is modified inside the function, it doesnt affect the original num variable.



	Pass by Reference:

	In pass by reference, a reference (memory address) to the variable is passed to the function. This means any changes made to the parameter inside the function also affect the original variable outside the function.

	function modifyArray(arr) {
	  arr.push(4);
	}



	let myArray = [1, 2, 3];
	modifyArray(myArray);
	console.log(myArray); // Output is [1, 2, 3, 4]

	In this example, the modifyArray function takes a reference to the myArray variable. When we push a value onto the arr parameter inside the function, it also affects the original myArray variable.





45.What is memoization in javascript? Can you give a code example implementing the same?

	Memoization is a programming technique used to optimize the execution of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. Its a way to avoid expensive computations and improve the overall performance of our code.


	In JavaScript, we can implement memoization using various approaches, such as using objects, arrays, or even external libraries. Here is a simple example of memoization using an object to cache the results of a Prime number calculation:



	let memo = {};

	function isPrime(n, memo) {

	 console.log(memo);

	 if (n in memo) {
	  return memo[n]; // Return cached result if available
	 }



	 if (n <= 1) {
	  return false;
	 }



	 for (let i = 2; i < n; i++) {
	  if (n % i === 0) {
	   memo[n] = false;
	   return false;
	  }
	 }

	 memo[n] = true;
	 console.log(memo);
	 return true;
	}



	console.log(isPrime(3,memo)); // Output is true
	console.log(isPrime(10,memo)); // Output is false
	console.log(isPrime(3,memo)); // Output is true (cached)



	In this example, the isPrime function finds Prime numbers using memoization. It takes two arguments: n (the Prime number to find) and memo (an object used to cache results).

	The first thing the function does is check if the result for the given n is already in the memo cache. If it is, it returns the cached result. Otherwise, it finds Prime number as usual and stores the result in the memo object before returning it.

	This way, subsequent calls to isPrime with the same n will not result in expensive calculations. Instead, the cached result will be returned directly from the memo object, improving the efficiency of the function.





46.What is the data type of variables in JavaScript?

	In JavaScript, variables are dynamically typed, which means that their data type can change during runtime based on the value assigned to them. JavaScript has several primitive data types:

	Undefined: This represents a variable that has been declared but hasnot been assigned a value yet.
	Null: Represents the intentional absence of any value.
	Boolean: Represents a true or false value.
	Number: Represents both integer and floating-point numbers.
	String: Represents a sequence of characters, enclosed in single or double quotes.
	Object: Represents complex data structures and includes arrays, functions, and custom objects.




47.What are escape characters? Why are they used? Give code example.

	Escape characters in JavaScript are special characters that are used to represent characters that cannot be typed directly into a string or have a special meaning in JavaScript syntax. These characters are preceded by a backslash (\) to indicate that they should be treated as literal characters rather than having their usual interpretation. Escape characters are used to handle various situations, such as including special characters in strings, creating multi-line strings, and representing characters that are not easily typed on a keyboard.

	Here are some common escape characters in JavaScript:

	 '\"': Double quote (`"`)
	 '\'': Single quote (`'`)
	 `\\`: Backslash (`\`)
	 `\n`: Newline (line break)
	 `\t`: Tab
	 `\r`: Carriage return
	 `\b`: Backspace
	 `\f`: Form feed
	 `\uffff`: Unicode character with the specified hexadecimal code point (ffff represents the hexadecimal value)




48.What is break and continue statements? How are they different?


	In JavaScript, break and continue are control flow statements used within loops (such as for, while, and do...while) to alter the normal flow of execution.

	Break Statement:
	The break statement is used to immediately terminate the execution of a loop, be it a for, while, or do...while loop. When the break statement is encountered inside a loop, the loop is exited, and the program continues executing the next statement after the loop.


	Continue Statement:
	The continue statement is used to skip the rest of the current iteration of a loop and immediately move to the next iteration. It effectively skips the remaining code within the loop body for the current iteration and jumps to the next iteration.

	Key Differences:
		Behavior:
		breakmterminates the entire loop immediately when encountered.
		continue skips the current iterations remaining code and moves to the next iteration.


		Usage:
		break is typically used when we want to exit a loop prematurely based on a certain condition.
		continue is used when we want to skip the remaining code within a loops body for a specific iteration based on a condition.





49.What's the difference between event.preventDefault() and event.stopPropagation() methods in JavaScript?


	In JavaScript, both event.preventDefault() and event.stopPropagation() are methods used to manipulate event behavior, but they serve different purposes in the event propagation process.

	event.preventDefault():

	This method is used to prevent the default behavior of an event from occurring. In other words, when an event is triggered (e.g., a form submission, a link click, a keypress), browsers often have default actions associated with that event. Calling event.preventDefault() stops the browser from executing its default action.

	event.stopPropagation():

	This method is used to stop the further propagation of an event through the DOM hierarchy. When an event occurs on an element, it can trigger the same event on its parent elements, bubbling up the DOM tree. Calling event.stopPropagation() prevents this bubbling phase from continuing.


	In short, event.preventDefault() is used to prevent the default behavior of an event (e.g., form submission, link navigation), while event.stopPropagation() is used to prevent an event from triggering event listeners on parent elements (event bubbling).










50.What is function definition ?
	Function definition is also known as function declaration and function statement. In function declaration we define function with function keyword and we dont assign it to any variable, we can do hoisting in function declaration. 


51.Explain Hoisting 
	Hoisting is a behavior in js in which we can access variable and functions even before intialising them with value without getting any error.It happens because even before code start executing a single line memory is allocated to each variable and functions


52.What are higher order function ? Explain with code example.
	A function which takes one or more functions as arguments or returns a function as output is a higher order function.



53.first class function ?
	First class functions are functions that can be treated like any other value , like it can be assigned to variable , passed as argument to another function , returned as output from other function.



54.What are anonymous functions in js? Give an example? what is its use ?
	A function without a name is anonymous function.
	(()=>{
	 console.log('Im anonymous');
	})()






55.What are closures? Explain with an example?
	closures are functions that have access to variable in their outer lexical scope, even after the outer function is returned.




56.What is function currying? Can you create a curried function and explain?***, what is the use of curring ?

	

	function first(a){
		return function second(b){
			return a + b
		}
	}
	console.log(first(2)(2))



57.What is an IIFE (Immediately Invoked function expression)? Can you give an example? What is its use ?

	When a function is executed immediatly after its declaration is known as immediatly invoked function expression.

	ex:
	(function immediatlyInvoke(){
		console.log('immediatly invoked');

	})()

58.What is lexical scope ?
	Lexical scope refers to the visibility and accessibility of variable in a program based on their location within nested blocks of code, variable declared in an outer scope are accessible to inner scope , but reverse is not possible.






60. Is js supports multilevel inheritence or multiple innheritence ? And Why ?
	JavaScript supports multilevel inheritance but not multiple inheritance. Multilevel inheritance involves creating a chain of classes where a subclass inherits from a superclass, and another subclass inherits from the first subclass. Multiple inheritance, inheriting from multiple classes, isn't directly supported to avoid complexities and conflicts in the language design.

What is function overloading and function overwriting ?


61. What are the four pillars of OOPS ? 

	**Four Pillars of OOPS in JS:**
	1. **Encapsulation:** Bundling data and methods that operate on the data within a single unit, often a class or object.
	2. **Abstraction:** Hiding complex implementation details and exposing only essential features.
	3. **Inheritance:** Sharing properties and methods between classes.
	4. **Polymorphism:** Objects can take on multiple forms, using the same method name for different behaviors.


62. What is the uses of super keyword ?

	The `super` keyword in JavaScript is used to call methods from the parent class in a subclass. It helps access and extend functionalities from the superclass. Example:

	```javascript
	class Animal {
	  speak() {
	    return "Animal sound";
	  }
	}

	class Dog extends Animal {
	  speak() {
	    return super.speak() + ", Bark!";
	  }
	}

	const myDog = new Dog();
	console.log(myDog.speak());  // Output: "Animal sound, Bark!"
	```

	In JavaScript, the `super` keyword is often used inside the constructor of a subclass to call the constructor of its parent class. This is necessary to properly initialize the object created by the subclass.

	When a subclass has its own constructor, it needs to call the constructor of the parent class using `super()` to ensure that the initialization logic in the parent class is executed. This helps in setting up the inherited properties and performing any additional setup required by the parent class.

	Here's an example:

	```javascript
	class Animal {
	  constructor(name) {
	    this.name = name;
	  }
	}

	class Dog extends Animal {
	  constructor(name, breed) {
	    super(name); // Calling the constructor of the parent class
	    this.breed = breed;
	  }

	  getDescription() {
	    return `${this.name} is a ${this.breed} dog.`;
	  }
	}

	const myDog = new Dog('Buddy', 'Labrador');
	console.log(myDog.getDescription());  // Output: "Buddy is a Labrador dog."
	```

	In this example, `super(name)` ensures that the `name` property is properly initialized by calling the constructor of the `Animal` class. This way, the `Dog` class can extend the functionality of the `Animal` class while properly initializing its own properties.



63. What is shadowing and illegal shadowing ?

	**Shadowing in JS:**
	Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, temporarily hiding the outer variable within that scope.

	**Illegal Shadowing:**
	Illegal shadowing happens when a variable is unintentionally shadowed, leading to unexpected behavior and potential bugs in the code.


64. simply explain with example what is curring and what is infinite curring, and use of curring


	**Currying:**
	Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

	Example:
	```javascript
	function curryAdd(a) {
	  return function(b) {
	    return a + b;
	  };
	}
	const add5 = curryAdd(5);
	console.log(add5(3));  // Output: 8
	```

	**Infinite Currying:**
	Infinite currying refers to extending currying to handle an arbitrary number of arguments.

	Example:
	```javascript
	function infiniteCurry(initial) {
	  const curry = (next) => infiniteCurry(initial + next);
	  curry.toString = () => initial;
	  return curry;
	}

	const result = infiniteCurry(1)(2)(3)(4); 
	console.log(result.toString());  // Output: 10

	```
	**Function Currying Use:**
	Currying allows functions to be partially applied, creating new functions with predefined arguments. It enhances code reusability, readability, and supports building more specialized functions by fixing some parameters while leaving others flexible.

	Example:
	```javascript
	function curryAdd(a) {
	  return function(b) {
	    return a + b;
	  };
	}
	const add5 = curryAdd(5);
	console.log(add5(3));  // Output: 8
	```



65. What are polifills ?
	
	Polyfills in JavaScript: Polyfills are code snippets or scripts that provide modern functionality to older browsers that lack support for certain features or methods. They fill the gaps by emulating or adding missing functionalities, enabling web developers to write code that works consistently across different browsers.

66. What is pure and impure function ?
	Pure Function: A pure function in JavaScript always produces the same output for the same input, without modifying external state or causing side effects. It's predictable, making code more reliable and easier to test.

	Impure Function: An impure function may have side effects, modifying external state or relying on mutable data. It can produce different outputs for the same input, making code less predictable and harder to reason about.


	**Pure Function in JS:**
	A pure function consistently produces the same output for the same input, has no side effects, and doesn't rely on external state.

	Example:
	```javascript
	function add(a, b) {
	  return a + b;
	}
	```

	**Impure Function in JS:**
	An impure function may have side effects or rely on external state, leading to unpredictable behavior.

	Example:
	```javascript
	let total = 0;
	function impureAdd(value) {
	  total += value;
	  return total;
	}
	```

67. in browser setTimeout goes to the web api untill it takes given time, but where does it go in case of nodejs, simply explain in 50 words

	In Node.js, `setTimeout` doesn't go to a Web API as in the browser. Instead, it utilizes the event loop and the timer functions provided by the underlying environment. The timer is managed by the libuv library in Node.js, allowing for asynchronous execution while waiting for the specified time to elapse.


68. What is the use of Array.filter method in js

	The `array.filter` method in JavaScript is used to create a new array with elements that pass a specific test provided by a function. It helps filter out elements based on a given condition, creating a more refined subset of the original array.

	Example:
	```javascript
	const numbers = [1, 2, 3, 4, 5];

	const evenNumbers = numbers.filter(function(num) {
	  return num % 2 === 0;
	});

	console.log(evenNumbers);  // Output: [2, 4]
	```

	In this example, `array.filter` is used to create a new array (`evenNumbers`) containing only the even numbers from the original array (`numbers`).







=====================================================================================================================================================

What the hell are pure or static functions?When do we use it?
	No, static functions and pure functions are different concepts in JavaScript.

	- **Static Function:**
	  - A static function is associated with a class rather than an instance of the class.
	  - It can be called on the class itself, not on an instance.
	  - It may or may not be pure; the concept of being static or non-static is independent of whether the function is pure.

	Example of a static function:
	```javascript
	class MathOperations {
	  static add(a, b) {
	    return a + b;
	  }
	}

	const result = MathOperations.add(2, 3); // Calling the static function
	```

	- **Pure Function:**
	  - A pure function consistently produces the same output for the same input, has no side effects, and doesn't rely on external state.
	  - Pure functions are not necessarily static; they can be instance methods or regular functions.

	Example of a pure function:
	```javascript
	function add(a, b) {
	  return a + b;
	}
	```

	In summary, static functions refer to functions associated with a class, while pure functions refer to functions with specific characteristics regarding predictability, lack of side effects, and independence from external state. They are distinct concepts and may or may not overlap in a given codebase.


what is destructuring?
	Destructuring is a feature in JavaScript that allows us to extract data from arrays and objects.Instead of accessing each element of an array or each property of an object individually, we can use destructuring to extract the values we need and assign them to variables in a single statement. 


what is pure functions?
	A pure function is a function that always produces the same output for the same input and has no side effects. Here are the key characteristics of a pure function:

	1. Deterministic: Given the same input, a pure function will always produce the same output. It does not depend on any external state that may change over time.

	2. No Side Effects: A pure function does not modify or interact with external state or variables outside of its scope. It does not mutate input parameters or modify any global variables. The only result of calling a pure function is the computed return value.

	3. Referential Transparency: A pure function can be replaced with its return value without affecting the correctness of the program. This property allows for easy reasoning, testing, and composition of functions.





//question 4

spread operator is used to copy the object and array to another variable. It creates new object and array and assign them to the new variable.



//question 5

rest operator syntax is same as spread operator and it is used to gather multiple arguments into an array.



What is the difference between Js import snd require syntax

	#### Differences between JavaScript Import and Require Syntax

	JavaScript `import` and `require` are both used to load external modules, but they have some key differences in their syntax and behavior. Here are some of the main differences:

	**1. Syntax:** The syntax for `import` is different from that of `require`. `require` is a function that takes a single argument (the path to the module) and returns the exported values of that module. `import`, on the other hand, is a statement that is used to declare the dependencies of a module and import them into the local scope.

	Here is an example of the syntax for `require`:

	```javascript
	const myModule = require('./my-module');
	```

	And here is an example of the syntax for `import`:

	```javascript
	import myModule from './my-module';
	```

	**2. Execution:** Another key difference between `import` and `require` is when they are executed. `require` is executed synchronously, meaning that it blocks the execution of the code until the module is loaded. `import`, on the other hand, is executed asynchronously, meaning that it does not block the execution of the code.

	**3. Scoping:** `require` is scoped to the module in which it is called, whereas `import` is scoped to the block in which it is declared. This means that `require` can be called from anywhere within a module, while `import` can only be called from within the block in which it is declared.

	**4. Dynamic vs Static:** `require` is dynamic, which means that it can be used conditionally or dynamically at runtime. `import`, on the other hand, is static, which means that it can only be used statically at compile time.

	Overall, `import` and `require` are both important tools for loading external modules in JavaScript, but they have some key differences in their syntax and behavior.




simply explain in 50 words with example what is parsing and give one example in js


	**Parsing in JS:**
	Parsing is the process of converting data from one format to another, often from a string to a different data type.

	Example in JavaScript:
	```javascript
	const numericString = "42";
	const numericValue = parseInt(numericString);
	console.log(numericValue);  // Output: 42
	```
	In this example, `parseInt` parses the string "42" into the numeric value 42.












16.What are classes in javascript?

In javascript, classes are a way to define blueprints for creating objects with shared properties and methods. A class serves as a template for creating objects, and the objects created from a class are often referred to as instances. 



17.What are constructors? what does super() do in js?

	In javascript, a constructor is a special method that gets called when an instance of a class is created. It is used to initialize the properties and set up the initial state of the object. Constructors are defined within the class and are named constructor.

	The super() keyword is used inside a constructor when we are working with classes that inherit from another class. Inheritance allows a Childclass to inherit properties and methods from a parent class. When we call super() within a Childclass constructor, it calls the constructor of the parent class and allows us to initialize properties or perform setup specific to the parent class.

	The super() call is necessary when extending a class to ensure that the parent classs constructor is executed properly before initializing the Childclasss properties. It is a way to establish a relationship between the parent and child classes in terms of initialization and inheritance.



18.What are destructors? when are they called?

	JavaScript does not have a concept of "destructors" that are automatically called when an object goes out of scope or is no longer needed. Instead, js uses a garbage collector to manage memory and automatically reclaim memory from objects that are no longer reachable. When an object is no longer referenced by any variables or functions, it becomes eligible for garbage collection, and its memory will be freed up at some point by the js engine.



19.Explain garbage collection in js.? When is a variable garbage collected?

	Garbage collection is a process in javascript that automatically manages memory by identifying and cleaning up objects that are no longer reachable or needed by the program. This helps prevent memory leaks and ensures efficient memory usage in javascript applications. 

	the garbage collection process generally works in javascript as below:

	Mark and Sweep Algorithm: 
	The most common garbage collection algorithm used in javascript is the "mark and sweep" algorithm.

	Mark: The garbage collector starts by marking all the variables and objects that are still reachable from the root scope. This generally includes global variables and any variables that are currently in scope, such as local variables within executing functions.

	Sweep: After marking, the garbage collector then sweeps through the memory, looking for objects that were not marked during the first phase. These unmarked objects are considered unreachable and are candidates for removal from memory.



21.What is abstraction and encapsulation.

	Abstraction focuses on simplifying complex reality by representing essential features and ignoring unimportant details.

	Encapsulation involves bundling data and methods together, providing controlled access to the internal state of an object while hiding implementation details.




