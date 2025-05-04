var student = function(name){

  this.name = name;

  function printName() {

    console.log(this.name)

  }

   printName()

}

var yash = new student("yash")