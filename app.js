//INTRO TO MONGOOSE LAB

//Best to put dotenv at top per Tristan
// Requiring dotenv
const dotenv = require('dotenv'); //allows access to the environment variable file and allows us to read stuff from that file
dotenv.config(); //adds env variable to the node environment //loads variables from .env
console.log(process.env.PORT);//This allows the application to access the env

// Requiring mongoose
const mongoose = require('mongoose'); //requiring mongoose cause it translates between node and mongoDB

// Requiring prompt-sync
const prompt = require('prompt-sync')();
const username = prompt('What is your name? '); 
console.log(`Your name is ${username}! Yay!`); 

// Requiring customer.js file so can connect that to this app.js file
const Customer = require('./models/customer.js');
console.log(Customer); //making sure customer.js is connected correctly - output is Model { Customer }

// Requiring express
// const express = require('express'); //realized after-the-fact that this particular lab doesn't require express so didn't install dependencies


// Connect to Mongoose & mongoDB Database
const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to mongoDB');

    // Disconnect our app from MongoDB after our queries run. //I originally thought I needed this because I was taking this info from our lecture.
    // await mongoose.disconnect(); //I originally thought that you had to always write the code to connect and disconnect from Mongoose.
    // console.log('Disconnected from MongoDB');

    // Close our app, bringing us back to the command line. //I originally thought I needed this because I was taking this info from our lecture.
    // process.exit();
};

// Starting function with main - research shows me that in coding most coders name the starting function main by default (to mean "start here")
// Changed to mainMenu since makes more sense because we are creating a simple menu system for create, view, update, delete, quit.
const mainMenu = async () => {
  await connect();  // connecting first
  console.log("Welcome to your Customer Information App!");  // then showing the menu
  // Adding the menu code here in a sec

  let running = true;
  while (running) {
    console.log('\nWhat action would you like to take?');
    console.log('1. Create a customer');
    console.log('2. View all customers');
    console.log('3. Update a customer');
    console.log('4. Delete a customer');
    console.log('5. Quit\n');
    
    const choice = prompt('Choose an option (1-5): ');

    if (choice === '1') {
        const name = prompt('Enter customer name: ');
        const age = parseInt(prompt('Enter customer age: '));
        await Customer.create({ name, age });
        console.log('Your new customer is created!');
    } else if (choice === '2') {
        const customers = await Customer.find();
        customers.forEach(c => console.log(`ID: ${c._id} -- Name: ${c.name}, Age: ${c.age}`));
        console.log('This is a list of all your current customers above.');
    } else if (choice === '3') {
        const id = prompt('Enter customer ID to update: ');
        const name = prompt('Enter new name: ');
        const age = parseInt(prompt('Enter new age: '));
        await Customer.findByIdAndUpdate(id, { name, age });
        console.log('Your customer is updated!');
    } else if (choice === '4') {
        const id = prompt('Enter customer ID to delete: ');
        await Customer.findByIdAndDelete(id);
        console.log('Customer deleted. Bye bye, customer and all your info!');
    } else if (choice === '5') {
        console.log('Exiting as per your request.');
        mongoose.connection.close();
        break;
    } else {
        console.log('Invalid choice. Please, try again.');
    }
  }
};

mainMenu(); 


/*
FIRST PART: ✅
✅DEFINE THE MODEL: 
✅1. Create a new model file and build the customer schema.//might need to tweak the customer.js schema and correct it
✅2. The customer model will have the following fields:
✅name: String
✅age: Number
*/

/*
SECOND PART:
✅MAKE THE DATABASE CONNECTION:
✅Initialize Mongoose and MongoDB Connection
✅1. Set up Mongoose in your application.
✅2. Ensure you have a .env file for your MongoDB URI and a .gitignore file 
to avoid pushing sensitive data to GitHub.
*/

/*
THIRD PART:
✅DEVELOPING THE USER INTERFACE:
✅1. Start by displaying a welcome message to the user
✅2. Implement a simple menu system that lets the user choose an action 
(Create, View, Update, Delete, Quit). Use prompt-sync to get the user’s choice & handle it accordingly.
✅3. When figuring out what the user wants to do, it’s probably easiest to prompt them to choose from 
various options in a numbered list. This way, the user just enters a number and the application knows 
what to do next.
✅4. When dealing with choosing a specific customer to update or delete, it’s probably easiest to list 
the customers in the database along with their ids. Then prompt the user to enter id of the user that 
needs to be updated/deleted.
*/



/*
✅4th - 10th parts (FROM LAB EXERCISE PAGE):

Practicing in terminal and making sure it works...
FOURTH PART: Starting the application
FIFTH PART: Sample exchange - Starting the Application
SIXTH PART: Sample exchange - Updating a customer
SEVENTH PART: Sample exchange - Choosing next action
EIGHTH PART: Sample exchange - Viewing updated customers
NINTH PART: Sample exchange - Choosing next action
TENTH PART: Sample exchange - Exiting the application

✅ADDITIONALLY, WENT THROUGH EACH ACTION OF CREATE, VIEW, UPDATE, DELETE, AND QUIT
TO MAKE SURE WORKING... & IT WORKS!
*/


