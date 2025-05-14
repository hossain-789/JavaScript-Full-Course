// const student = {
//   fullname: "hossain ahmed",
//   age: 24,
//   country: "Bangladesh",
//   cgpa: 3.24,
// };
// student["fullName"] = "Imtiaz Mahi";
// // student["age"] = student["age"] + 2;
// console.log(student["fullname"]);

// Create a simple object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   hobbies: ["reading", "gaming", "cycling"],
//   isStudent: true,

//   // Method inside object
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // Accessing object properties
// console.log("First Name:", person.firstName);
// console.log("Last Name:", person["lastName"]);
// console.log("Age:", person.age);
// console.log("Hobbies:", person.hobbies.join(", "));
// console.log("Is a student:", person.isStudent);

// // Using the method
// console.log("Full Name:", person.fullName());

//create a simple object okay let's start!!
// const studentsInfo = {
//     firstName: "Hossain",
//     lastName: "Ahmed",
//     age: 25,
//     hobbies: ["reading books, codding, computer game"],
//     isStudent: true,

//     //methods insite object
//    fullName: function (){
//         return this.firstName + " " + this.lastName;
//     },
// };

// // accessing object propartis
// console.log("First Name:", studentsInfo.firstName);
// console.log("Last Name:", studentsInfo["lastName"]);
// console.log("Age:", studentsInfo.age);
// console.log("Hobbies:", studentsInfo.hobbies.join(", "));
// console.log("Is a Student:", studentsInfo.isStudent);

// //using the method
// console.log("He Full Name:", studentsInfo.fullName());

//create a movie objec, okay! let's start
// const movies = {
//   title: "KGF",
//   directorFirstName: "Pranshanth",
//   directorlastName: "Pal",
//   actressName: ["Yeash, Srinidhi Shetty, Archana Jois"],
//   isHollywood: true,
//   movieType: "Action/Thriller",
//   relice: 2018,

//   // methods inside object
//   directorFullname: function () {
//     return this.directorlastName + " " + this.directorlastName;
//   },
// };

// // accessing obect proparties
// console.log("Movie Title:", movies.title);
// console.log("D-First Name:", movies.directorFirstName);
// console.log("D-Last Name:", movies["directorlastName"]);
// console.log("Actress Name:", movies.actressName.join(", "));
// console.log("This is Hollywood movie:", movies.isHollywood);
// console.log("MovieType:", movies.movieType);
// console.log("Relice:", movies.relice);

// //using the methods
// console.log("Director Full Name:", movies.directorFullname());


const cousin = {
  firstName: "Ikram",
  lastName:"Shawdaghar",
  age: 10,
  isStudent: false,
  hobbies: ["Allows fun, Mobile Game, Crying"],

  fullName: function() {
    return this.firstName +" "+ this.lastName;
  },
  
};

console.log("Fist Name:", cousin.firstName);
console.log("Last Name:", cousin.lastName);
console.log("age:", cousin.age);
console.log("Is Student:", cousin.isStudent);
console.log("Hobbies:", cousin.hobbies.join(", "));
console.log("Student Name Is:", cousin.fullName());