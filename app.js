// Intro to Mongoose Lab Objective:
// A Customer Relationship Management (CRM) tool is an application that 
// allows a company to keep track of their customers. In this lab. you’re going  
// to create a terminal-based CRM application that will have full CRUD functionality 
// on a single model: Customer.

// Adding/Installing a dependency/package called prompt-sync
// Prompt-sync is a package that allows us to easily collect input from a user in the terminal. 
// This is how we will interact with our application. (npm i prompt-sync)

// To ensure prompt-sync is working, I added the code below. 
// But I also tested it using node by typing the following in the terminal:
// node app.js --The terminal then prompted me: "What is your name?" 
// --I responded: "Sylvia" 
// --The terminal responded: "Your name is Sylvia"
// Thus, WORKING! Yay.


const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);


/*
FIRST PART:

DEFINE THE MODEL:
1. Create a new model file and build the customer schema.
2. The customer model will have the following fields:
name: String
age: Number

*/