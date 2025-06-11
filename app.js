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


/* INFO ON WHAT WE ARE DOING IN THIS EXERCISE SO THAT I'M CLEARER:
Your CRM (Customer Relationship Management) application is a simple program that lets you 
manage customer information through a text-based menu in the terminal. Imagine it like a digital notebook for 
keeping track of customers’ names and ages. You’ll use a tool called MongoDB to store this information safely, 
like a filing cabinet, and Node.js to run the program on your computer. The program will ask you what you want 
to do—add a new customer, look at all customers, change a customer’s details, delete a customer, or quit—and 
then guide you through each step with clear prompts.

Here’s how it works: When you start the program with node app.js, it connects to MongoDB and shows a 
welcome message with a menu of five options. For example, choosing “Create a customer” asks for a name and age, 
then saves it to the database. Selecting “View all customers” lists everyone with their IDs, names, and ages. 
To update or delete, you’ll see the customer list, copy an ID, and enter new details or confirm deletion. 
Choosing “Quit” safely closes the program and the database connection.

The code is split into files: 
one defines what a customer looks like (name and age), 
another runs the main program with the menu and actions, 
and a settings file keeps your database address private. 
You’ll type answers to prompts in the terminal, and the program handles the rest, 
making it easy to manage customers without needing to understand the complex coding details behind it.

*/

const dotenv = require('dotenv'); //allows access to the environment variable file and allows us to read stuff from that file
dotenv.config(); //adds env variable to the node environment
console.log(process.env.PORT);//This allows the application to access the env

const mongoose = require('mongoose'); //requiring mongoose cause it translates between node and mongoDB

const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}! Yay!`);

const Customer = require('./models/customer.js');
console.log(Customer);






/*
FIRST PART: ✅
DEFINE THE MODEL: 
1. Create a new model file and build the customer schema.//might need to tweak the customer.js schema and correct it
2. The customer model will have the following fields:
name: String
age: Number
*/

/*
SECOND PART:
MAKE THE DATABASE CONNECTION:
Initialize Mongoose and MongoDB Connection
1. Set up Mongoose in your application.
2. Ensure you have a .env file for your MongoDB URI and a .gitignore file 
to avoid pushing sensitive data to GitHub.
*/



/*
THIRD PART:

DEVELOPING THE USER INTERFACE:

1. Start by displaying a welcome message to the user
2. Implement a simple menu system that lets the user choose an action 
(Create, View, Update, Delete, Quit). Use prompt-sync to get the user’s choice & handle it accordingly.
3. When figuring out what the user wants to do, it’s probably easiest to prompt them to choose from 
various options in a numbered list. This way, the user just enters a number and the application knows 
what to do next.
4. When dealing with choosing a specific customer to update or delete, it’s probably easiest to list 
the customers in the database along with their ids. Then prompt the user to enter id of the user that 
needs to be updated/deleted.

*/



/*
4th - 10th parts:

FOURTH PART: Starting the application
FIFTH PART: Sample exchange - Starting the Application
SIXTH PART: Sample exchange - Updating a customer
SEVENTH PART: Sample exchange - Choosing next action
EIGHTH PART: Sample exchange - Viewing updated customers
NINTH PART: Sample exchange - Choosing next action
TENTH PART: Sample exchange - Exiting the application

*/


