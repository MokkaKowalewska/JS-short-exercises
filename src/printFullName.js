/*
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function.

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

import { student } from "./displayStudents.js";

function printFullName(student) {
  let { first, last } = student;
  return "Your full name is" + first + last;
}

console.log(printFullName());
