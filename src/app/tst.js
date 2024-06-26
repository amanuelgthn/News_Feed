#!/usr/bin/env node
// This class takes a name string and greeting string in
// the constructor. Here are some examples of how this should work:
//
// g = new Greeter()
// g.greet() # => "Hello, Anonymous!"
//
// g = new Greeter("What's up", "Dog")
// g.greet() # => "What's up, Dog!"
//
// g = new Greeter("Hola")
// g.greet() # => "Hola, Anonymous!"
 
// Unfortunately, this code isn't quite working.
// Can you spot at least 2 bugs?
 
class Greeter {
    constructor(name, greeting) {
      this.name = name;
      this.greeting = greeting;
    }
      
    greet() {
      let name = this.name;
      let greeting = this.greeting;
      
      if (!name) {
        name = "Anonymous";
      }
      if (greeting === undefined) {
        greeting = "Hello";
      }
      
      console.log(`${greeting}, ${name}!`);
    }
  }
   
g = new Greeter()
g.greet()

g = new Greeter("What's up", "Dog")
g.greet()
g = new Greeter("Hola")
g.greet()  
