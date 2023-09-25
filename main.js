"use strict";
console.log('Hello World!');
// Create an array of objects representing each person
const people = [
    { name: "Hurley Midgley", dateOfBirth: "8/27/1977", children: 1, country: "Russia", knowsProgramming: false },
    { name: "Mirabelle Bevans", dateOfBirth: "5/17/1994", children: 4, country: "China", knowsProgramming: true },
    { name: "Clim Wealleans", dateOfBirth: "2/12/1994", children: 0, country: "Nicaragua", knowsProgramming: true },
    { name: "Austin Allebone", dateOfBirth: "7/4/1986", children: 0, country: "Poland", knowsProgramming: true },
    { name: "Kassi Patel", dateOfBirth: "4/13/1981", children: 4, country: "Greece", knowsProgramming: false } // 4
];
// Question 1: Is the first person older than the last person?
if (new Date(people[0].dateOfBirth) < new Date(people[4].dateOfBirth)) {
    console.log("The first person is older than the last person.");
}
else {
    console.log("The first person is not older than the last person.");
}
// Question 2: Does the 2nd person have the same amount of kids as the 3rd?
if (people[1].children === people[2].children) {
    console.log("The 2nd person has the same number of kids as the 3rd person.");
}
else {
    console.log("The 2nd person does not have the same number of kids as the 3rd person.");
}
// Question 3: Check if the 1st person and the 4th person both know how to program
if (people[0].knowsProgramming && people[3].knowsProgramming) {
    console.log("Yay!");
}
else {
    console.log("LMGTFY");
}
// Question 4: Check the nationality of the 2nd person and output a greeting
if (people[1].country === "Iceland") {
    console.log("Hæ");
}
else if (people[1].country === "Spain") {
    console.log("Hola");
}
else if (people[1].country === "Korea") {
    console.log("여보세요");
}
else {
    console.log("Hello");
}
// Question 5: Use a ternary operator to output if the 2nd person’s name is longer than 5 characters
console.log(people[1].name.length > 6 ? "The 2nd person's name is longer than 5 characters." : "The 2nd person's name is not longer than 5 characters.");
