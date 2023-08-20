// // // //Comment synta

// // // /*
// // // multi line comment
// // // super
// // // long
// // // comment
// // // */

// // // // var person ="Rahul"; // 5 ,true,
// // // // person ="Hari"; // reassign

// // // // const person1 ="Johny"; // fixed value
// // // // let person2 = "Riya"; //changable value
// // // // person2="siya"

// // // // // Interactions
// // // // alert("JS class is in session");
// // // // person2 =prompt("What is your name ?");
// // // // const isLegal= confirm("Are u 18 yesrs or above?");

// // // // console.log({person,person1,person2,isLegal});

// // // // // OPERATORS

// // // // // interactions

// // // // //Statement

// if (a === 0) {
// } else if (a === 1) {
// } else if (a === 2) {
// } else if (a === 3) {
// } else if (a === 4) {
// } else if (a === 5) {
// } else {
//   alert("invalid Day");
// }

//Ternory Operator

// if (a===0) {
//     console.log("its 0");
// }   else {
//     console.log("its not 0");
// }

//const answer = a === 0 ? console.log("its 0") : console.log("its not 0");

// Switch Case

// switch (a===0){
//     case Value

//  }

// // // //Task 1
// // // // prompt user to enter a number
// // // // check if the number is which day of the week
// // // // Example 0=> Sunday , 1=>Monday , 2=>Tuesday,....

// // // // Task 2
// // // // prompt user to enter a first number
// // // // prompt user to enter a second number
// // // // prompt user to enter a operator
// // // // using switch case
// // // // perform the operation and display the result

// // // // Task 1
// // // // const num = Number(prompt("Enter the number you want to print the day of:"));
// // // // console.log({num});

// // // // switch(num){
// // // //     case 0: {
// // // //         console.log("It's Sunday");
// // // //         break;
// // // //     }
// // // //     case 1: {
// // // //         console.log("It's Monday");
// // // //         break;
// // // //     }
// // // //     case 2: {
// // // //         console.log("It's Tuesday");
// // // //         break;
// // // //     }
// // // //     default:
// // // //         console.log("Number not found")
// // // // }

// // // // Loops

// for Loop
// // // //  let i;
// // // //  for( i =0; i<10; i++){
// // // //     console.log("The value of i is;", i)

// // // //  }

// // // // let i = 0;
// // // // while (i < 10) {
// // // //   console.log("The value of i is;", i);
// // // //   i++;
// // // // }

// // // // let i = 0;
// // // // do {
// // // //   console.log("The value of i is;", i);
// // // //   i = i + 4;
// // // // } while (i < 16);

// // // // Function

// // // // function sayHiToMe(name) {
// // // //   //more logic
// // // //   console.log("Hi" + name);
// // // //   //more logic
// // // // }

// // // // sayHiToMe("Nabin");
// // // // sayHiToMe("Malla");

// // // // Write a explict function that checks username and password in javascript.

// // // // function check (username , password){
// // // //   const validusername = "ram"
// // // //   const validpass="hari"
// // // //   return valid? true:false;

// // // // }

// // // if (username == "nabin" && password == "malla") return "acess granted";

// // // const username = prompt("username");
// // // const password = prompt("password");
// // // const result = login(username, password);
// // // console.log({ result });

// // //Object
// // const person = {
// //   firstname: "Nabin",
// //   lastname: "Malla",
// //   age: 21,
// //   dob: 2000,
// //   createdata: new Date(),
// //   fullName: function () {
// //     //method
// //     return this.firstname + " " + this.lastname;
// //   },

// //   getAge: () => {
// //     return 2023 - person.dob;
// //   },
// // };

// // const aage = person.getAge();
// // console.log(aage);

// //******Hoisting

// sayHi();
// function sayHi() {
//   console.log("hi");
// }

// var hi = "";
// function sayHi() {}
// const hi = "";
// const sayHi = () => {
//   console.log("hi");
// };

// ******Objects

// Node js inbuilt
// custom node js module
//open source module

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// console.log(person.firstName + " " + person.lastName + "is" + person.age);

// *****Array

// const car = ["Saab","Volvo","BMW","Tesla"];
// console.log(car.length);

// car.push("tata","Nano");
// console.log(car);

//***DESTRUCTURE

// const { b, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others);
