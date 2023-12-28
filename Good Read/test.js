let a = 38;
let b = 43;

while(b != 0){
	let temp = b;
	b = a % b;
	a = temp;
}

console.log(a);


