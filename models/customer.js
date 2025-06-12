const mongoose = require('mongoose');

// Creating a new model file with a schema that includes name (String) and age (Number).
// Creating the Schema (aka defining the schema. This is the first step before creating the model.)
// Schema is the structure that we create for the non relational database.
const customerSchema = new mongoose.Schema ({
    name: String,
    age: Number,
})

// Compiling the schema into a model (2nd step after creating schema) // A model talks to the database.
const Customer = mongoose.model('Customer', customerSchema);

// Exporting the model so that the app.js and customer.js are connected
module.exports = Customer;