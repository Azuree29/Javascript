let studentFirstName = "Brandon";
let studentLastName = "Newman";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;


const grades = [grade1, grade2, grade3, grade4];

let total = 0;
for (let i = 0; i < grades.length; i++ ) {
    total += grades[i];
}

const average = total / grades.length;

document.getElementById("math").innerHTML = "The value of " + studentFirstName + " " + studentLastName + " is " + average;

console.log("The value of " + studentFirstName + " " + studentLastName + " is " + average);

