
// JS-27, 29, 30, 35, 36, 38, 39, 54, 55, 56, 57, 59 onward

// SQL-

// let x =  'abc' && 5;


// console.log(x);


let s = "hi";


let n = s.length;
let out = '';
let word = '';

function reverse(str){
		let rev = '';
		for(let j=0; j<str.length; j++){
			rev =  str[j] + rev;
		}
		
		return rev;
}

let tag = true;
for(let i=0; i<n; i++){
	if(s[i] !== '.'){
		word+= s[i];
	}
	else if(s[i] === '.'){
		if(tag){
			out+=reverse(word);
			tag = false;
		}
		else{	
			word+='.';
			out+= reverse(word);	
		}
		word = '';
	}
	if(i+1 >= n){
		word+='.';
		out+= reverse(word);
	}
	else{
		out+= reverse(word);
	}
}

console.log(out)







































// 4.1 Accepting a new job under 5 Lakh
// 4.1.1 While Sharpener provides a job guarantee of at least 5 Lakh CTC, we understand that You might not wait too long and want to start working. However, in doing so, students compromise on their training, which ultimately affects their placements. Hence, on accepting a job of under 5 Lakh and willing to continue to study under Sharpener, You have to pay a refundable amount of Rs. 30,000 (Rupess Thirty Thousand only) within 30 days of accepting the offer

// 4.1.2 This will be refunded / adjusted with the job you get later on.

// 4.1.3 Missing payment deadline will result in Late Payment Fee as mentioned above



















































// const arr = [ 23,34,45,56,67,345,23,22345,2345,23454764,443,232,45,66,44]

// const subArr =  [67,23,22345,66,44 ]

// // console.log(arr.includes(67))


// //TODO: 
// const removeElements = ({ arr, subArr }) => {
  


  
//   return arr.filter((element) => !subArr.includes(element) ) 

// }

// console.log(removeElements({ arr, subArr}))















































// let a = 'A';
// let b = 'a';

// console.log(a<b);








//task - 6,7, 8, 9[call, apply, bind], 10[closures], 11[5C, ]

// Understand what is synchrous and asyncronous.

// Watch promise video and understand how queue and code execution happens.

// what is global object
// what is this keyword
// what is hoisting
// what is lexical scope
// what is temporal dead zone
// what is block scope
// what is closure
// what is shadowing
// What is anonymous function ?
// What are pure Functions ?
// What is Function Statement vs Function Exprssion vs Function declaration ?
// What are first class function or first class citizens ?
// What is call back function.
// Why do we need to remove event listeners  ?
// Interpreter vs compiler.
// V-18-higher order functions.


// What is garbage collectors???
// Garbage collecotrs are automated memory management system in programming language that automatically freeup memory that no longer in use.

// What is this keyword ??
// In js this keyword refers to the object that the function is method of , or global object if the function is not part of an object.

// What is the defference between normal function and fat arrow function ??
































//------------------------------------------------------------------------------

// : Zero Padding
// Problem Statement
// Padding is a process of adding layers of zeros to the input image. If we want to have p layers of padding then we have to add p layers of zeroes on borders.
// Given two integers N and p. How many zeroes are needed to be added to N X N image to give p layers of zero padding? Input
// First line contains N and p.
// Constraints
// 1 < N, p ≤ 10^8
// Output Return a single integer denoting the required number of zeroes.
// Example
// Input:
// 31
// Output:
// 16
// Explanation:
// 00000
// 01230
// 04560
// 07890
// 00000
// [9/8, 11:47] +91 6363 449 160: mit

// Problem Statement

// Given an array A of N integers, For each i (1 ≤ i ≤ N) your task is to find the value of x+y, where x is the largest number less than i such that A[x]>A[i] and (A[x] is the element present at position x.) y is the smallest number greater than i such that A[y]>A[i] If there is no x < i such that A[x] > A[i], then take x=-1. Similarly, if there is no y>i such that A[y]>A[i], then take y=-1.

// Input

// First line consists of a single integer denoting N

// Second line consists of N space separated integers denoting the array A.

// Constraints:

// 1 ≤ N ≤ 10^5

// 1 ≤ A[i]≤ 10^9

// Output

// Return a Array of integers, denoting x+y for each element i(1 ≤ i

// ≤N)

// Example

// Sample Input

// 5

// 54132

// Sample Output

// -20613

// Explanation:-

// For element 5:- x=-1(No element exist greater than 5 in left), y=-1 (No element exist greater than 5 in right)

// For element 4:- x=1, y=-1 For element 1:-x=2, y=4

// For element 3:- x=2, y=-1

// For element 2-x=4, y=-1


//------------------------------------------------------------------------------

// let n = 3;
// let b = 1;

// console.log((4*n)+4*b)
//------------------------------------------------------------------------------
// let arr = ['d', 'd', 'd', 'd'];
// let n = arr.length


// let min = arr[0].length;
// for(let i=0; i<n; i++){
//     if(arr[i].length < min){
//         min = arr[i].length;
//     }
// }


// let word = '';
// let tag = false;
// for(let i=0; i<min; i++){

//     let char = arr[0][i];
//     for(let j=0; j<n; j++){
//         let temp = arr[j][i];

//         if(char != temp){
//             tag = true;
//             break;
//         }

//     }
//     if(tag || i+1 >= min){
//     word+=char
        
//         break;
//     }
//     word+=char
// }

// console.log(word)


//------------------------------------------------------------------------------


// let arr1 = [10, 5, 3, 4, 3, 5, 6];
// let arr2 = [10, 5, 3, 4, 3, 5, 6];

// let n = arr1.length > arr2.length ? arr1.length : arr2.length;

// let out = [];
// let a = 0;
// let b = 0;

// for(let i=0; i<n; i++){

// }

//------------------------------------------------------------------------------


// let date = new Date(1672631100 * 1000);
// console.log(date)


//------------------------------------------------------------------------------



// async function fun(){
//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve( console.log('a'))
//         }, 2000)
//     })

//     console.log('b');
// }

// fun()



//------------------------------------------------------------------------------















