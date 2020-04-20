/*
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

let student = {
  first: "Elie",
  last: "Shopik",
};

function displayStudentInfo(student) {
  let { first, last } = student;
  return `Your full name is ${first} ${last}.`;
}

let div = document.querySelector(".div");
div.textContent = displayStudentInfo(student);

export { student };
