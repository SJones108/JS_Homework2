//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const displayFavoriteFoods = (person) => {
    for (let key in person) {
      if (Array.isArray(person[key])) {
        console.log(`${key}:`);
        for (let i = 0; i < person[key].length; i++) {
          console.log(`- ${person[key][i]}`);
        }
      } else if (typeof person[key] === "string") {
        console.log(`${key}: ${person[key]}`);
      } else if (typeof person[key] === "object") {
        console.log(`${key}:`);
        for (let subKey in person[key][0]) {
          console.log(`- ${person[key][0][subKey]} (${subKey})`);
        }
      }
    }
  }

console.log(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Use a regular function to create the printInfo method
Person.prototype.printInfo = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// // Use a regular function to create the addAge method by 1 year
// Person.prototype.addAge = function() {
//   this.age ++;
// };

// Use a regular function to create the addAge method
Person.prototype.addAge = function(years) {
  this.age += years;
};

// Create two people using the 'new' keyword, and print both of their infos
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.printInfo();
person2.printInfo();

// Increment person1's age by calling the addAge method
person1.addAge(3);
person2.addAge(3);

// Print person1's info again to confirm age increment worked
person1.printInfo();
person2.printInfo();



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const numLetters = (num) => {
  return new Promise( (resolve,reject) => {
      if(num.length > 10){
          resolve("Big Word")
      } else {
          reject("Small Word")
      }
  })
}

console.log(numLetters("I love Coding Temple Self-Paced Fullstack Software Engineer Bootcamp!"))

function slowCount(s) {
  return new Promise( (resolve) => {
      setTimeout( () => (s.length > 10 ? resolve(true) : resolve(false)), 2000);
  })
};

async function asyncnumLetters(s) {
  const result = await slowCount(s);
  if (result){
      console.log('Big Word');
  } else {
      console.log('Small Word');
  }
}

asyncnumLetters("I love Coding Temple Self-Paced Fullstack Software Engineer Bootcamp!");
asyncnumLetters('I love Cod');