"use strict";
/**
 * This is starter course in javascript to remind myself of the core concepts of javascript
 * Start with a to do list app, that tracks some of my daily entries to this app
 * It do make use of JavaScript as its front-end language, and it does not contain any backend code
 * We do make use of tailwind css framework as our CSS preprocessor language
 */
const taskInput = document.getElementById("task");
const taskTracker = document.getElementById("addTask");
const name = document.querySelector(".name");

taskInput.addEventListener("change", function () {
  console.log("New event detected");
});

taskTracker.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("New task submitted");
});
/**
 * In JavaScript, we can create objects using three different ways.
 * We can use Object literal to come up with an object
 * We can use instance of an object to come up with an object, and finally,
 * We can use constructor function to come up with an object
 */
//Using object literal to come up with an object
const person = {
  name: "Duncan",
  age: 23,
  hobbies: ["swimming", "watching", "coding"],
  greet: function () {
    console.log("Hello Coder");
  },
  score: {
    math: 200,
    science: 300,
  },
};
//Using object instantiation
const person1 = new Object({
  name: "Duncan",
  age: 23,
  hobbies: ["swimming", "watching", "coding"],
  greet: function () {
    console.log("Hello Coder");
  },
  score: {
    math: 200,
    science: 300,
  },
});

class Person {
  constructor() {
    (this.name = "John"),
      (this.age = 20),
      (this.hobbies = ["Swimming", "Watching", "Coding"]),
      (this.greet = function () {
        console.log("Hello Coder");
      }),
      (this.score = { math: 200, science: 300 });
  }
}
const person2 = new Person();
console.log(person2.name);
console.log(person2["age"]);
const personOne = {
  _name: "",
  //Now we make us getter and setters to access this private property
  get getName() {
    return this._name;
  },
  set setName(value) {
    if (typeof value === "string" && value.length > 0) {
      this._name = value;
    } else {
      console.log("Invalid value");
    }
  },
};

personOne.setName = "dickson";
console.log(personOne.getName); // Output: dickson
console.log(Object.getPrototypeOf(Math.max) === Function);
console.log(Object.getPrototypeOf([]) == Array.prototype);
/**
 * Using Object.defineProperty() to add setters and getters
 * It justs needs a function definition, then add this getters and setters
 */
const student = {
  firstName: "Monica",
};

Object.defineProperty(student, "getName", {
  get: function () {
    return this.firstName;
  },
});

Object.defineProperty(student, "changeName", {
  set: function (name) {
    this.firstName = name;
  },
});
console.log(student.firstName);
student.changeName = "Zenah";
console.log(student.firstName);
