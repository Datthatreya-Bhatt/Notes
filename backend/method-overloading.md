Ah, I see now! You’re likely referring to **Method Overriding** and not "Method Overfitting." It seems like there was a bit of confusion with the terminology.

### Here's a quick breakdown of both:

### 1. **Method Overloading**:
- **What it is**: When multiple methods with the **same name** exist, but they **differ** in their **parameter types** or **number of parameters**.
- **Languages that support this**: Java, C#, etc.
- **JavaScript** doesn't support traditional method overloading directly, but you can mimic it by checking the number and type of arguments.

### Example (Java):
```java
class Example {
    public void display(int x) {
        System.out.println(x);
    }
    public void display(String x) {
        System.out.println(x);
    }
}
```

### 2. **Method Overriding**:
- **What it is**: When a **child class** provides its **own implementation** for a method that is already defined in its **parent class**.
- **Key concept**: Overriding occurs when the child class **changes the behavior** of a method inherited from the parent class.

### Example (JavaScript / ES6):
```javascript
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

const dog = new Dog();
dog.speak();  // Output: Dog barks (overrides the Animal's speak method)
```

---

### **In Summary:**

- **Method Overloading**: Same method name, but with **different parameter types or number of parameters**. (Not supported natively in JavaScript.)
- **Method Overriding**: A **child class** provides its **own version** of a method that was originally defined in the **parent class**.

You were likely thinking about **Method Overriding** as the other concept!