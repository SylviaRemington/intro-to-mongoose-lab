# Intro to Mongoose Lab

<br>

## About

### In this lab, you will create a terminal-based Customer Relationship Management (CRM) application using Mongoose. This application will manage customer data with full Create, Read, Update, and Delete (CRUD) functionality.
<br>

## Intro to Mongoose Lab Exercise

### Terminal CRM

Objective: A Customer Relationship Management (CRM) tool is an application that allows a company to keep track of their customers. In this lab. you’re going to create a terminal-based CRM application that will have full CRUD functionality on a single model: Customer.

<br>


## Notes from JS Section (so I understand the lab better)
### Intro to Mongoose Lab Objective:
A Customer Relationship Management (CRM) tool is an application that allows a company to keep track of their customers. In this lab. you’re going to create a terminal-based CRM application that will have full CRUD functionality on a single model: Customer.


### Adding/Installing a dependency/package called prompt-sync
Prompt-sync is a package that allows us to easily collect input from a user in the terminal. This is how we will interact with our application. (npm i prompt-sync)


// To ensure prompt-sync is working, I added the code within the app.js file. 
// But I also tested it using node by typing the following in the terminal:
// node app.js --The terminal then prompted me: "What is your name?" 
// --I responded: "Sylvia" 
// --The terminal responded: "Your name is Sylvia! Yay!"
// Thus, WORKING! Yay.

<br>

## INFO ON WHAT WE ARE DOING IN THIS EXERCISE SO THAT I'M CLEARER:

🟢 GOAL:
You want your app to:
Connect to the database
Show the menu
Let the user pick an action

Also here is further information for me:
✅ What the Files Are Doing
File	        What it Does
app.js	        Main program: shows menu, takes input, runs actions
customer.js	    Defines what a customer is (name, age)
.env	        Stores your MongoDB connection info

Your CRM (Customer Relationship Management) application is a simple program that lets you 
manage customer information through a text-based menu in the terminal. Imagine it like a digital notebook for keeping track of customers’ names and ages. You’ll use a tool called MongoDB to store this information safely, like a filing cabinet, and Node.js to run the program on your computer. The program will ask you what you want to do—add a new customer, look at all customers, change a customer’s details, delete a customer, or quit—and 
then guide you through each step with clear prompts.

Here’s how it works: When you start the program with node app.js, it connects to MongoDB and shows a welcome message with a menu of five options. For example, choosing “Create a customer” asks for a name and age, then saves it to the database. Selecting “View all customers” lists everyone with their IDs, names, and ages. To update or delete, you’ll see the customer list, copy an ID, and enter new details or confirm deletion. Choosing “Quit” safely closes the program and the database connection.

The code is split into files: 
one defines what a customer looks like (name and age), 
another runs the main program with the menu and actions, 
and a settings file keeps your database address private. 
You’ll type answers to prompts in the terminal, and the program handles the rest, 
making it easy to manage customers without needing to understand the complex coding details behind it.

