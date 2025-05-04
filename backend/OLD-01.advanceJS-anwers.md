
----------------------------------------------------OUTPUT------------------------------------------------------------------------------------------

function arr(num){
	return new Promise((res,rej)=>{
		res(num);
	})
}


console.log(typeof arr(50));




var a = 50;

var obj = {
  a: 100,
	
  print: function () {
    console.log(this.a);
  },

  print1: function () {
    return function () {
      console.log(a);
    };
  },

  print2: () => {
    console.log(this.a);
  }
};

obj.print1(); // Output: 50







let newArr = [1,2,3,4,5,6].map((elem)=>{
	if(elem %2 === 0) return true;
})

console.log(newArr);




let arr = [10,20,30,40,50];


function fun(a,...b){
	return a;
}

console.log(fun(arr, 60))



