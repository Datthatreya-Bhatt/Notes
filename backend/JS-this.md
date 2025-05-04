 ## this in global space

 this keyword in global space represents global object

 ```js
    console.log(this); //prints window in browser
 ```

 Different js runtime environment have different global object, inside browser it is window and in node it is global    

---


## this inside function
this keyword works differently with strict and non strict mode


```js
    function x(){
        console.log(this) // window
    }
    x()
```

```js
    "use strict";

    function x(){
        console.log(this) // undefined
    }
    x()
```

According to `this substitution` when value of this keyword is undefined or null this keyword will be replaced with global object.

What is this substitution and when it happens?
    this substitution happens in un strict mode, this substitution means whenever value for this keyword is undefined or null it will be replaced with global object. 

---

# ON WORD ALL THE EXAMPLE USES STRICT MODE


## how the this keyword is called

Value of this keyword defends on how the function is being called

```js
    "use strict";

    function x(){
        console.log(this) // undefined
    }
    x()
    window.x() // window
```

---


## this keyword inside a object method

Inside the method this keyword refers to the object itself

```js
    let obj = {
        a: 10,
        b: function(){
            console.log(this.a)
        }
    }

    obj.b() // prints 10


```
---


## this keyword with call, apply and bind 


```js
    let obj = {
        a: 10,
        b: function(){
            console.log(this.a)
        }
    }

    obj.b() // prints 10

    let obj2 = {
        a: 20
    }

    obj.b.call(obj2) // prints 20


```

---

## this keyword inside class

This keyword inside the class refers to the properties and methods of the class

```js

class Human{
    constructor(){
        this.name = 'a';
        this.age = 20;
    }

    greet(){
        console.log(`Hi ${this.name}`)
    }
}
    
```

---


## this keyword inside arrow functions

Arrow functions don't have their own this keyword binding, it retains the this value of the `enclosing lexical context`

```js

let obj = {
    a: 10,
    b: ()=> {
        console.log(this)
    }
}

obj.b() // prints global object
 
```


```js

let obj = {
    a: 10,
    b: function (){
        const y = ()=> {
            console.log(this)
        }
        y();
    }
}

obj.b() // prints obj
 
```

---


## this keyword inside DOM

We can use this keyword inside DOM elements also

```html

<button onClick = "alert(this)"> Click me </button> 

```
Here this reference to the  button element


---


