const mongoose = require('mongoose');

// Creating a new model file with a schema that includes name (String) and age (Number).
// Creating the Schema (aka defining the schema. This is the first step before creating the model.)
const customerSchema = new mongoose.Schema ({
    name: String,
    age: Number,
})

// Compiling the schema into a model (2nd step after creating schema)
const Customer = mongoose.model('Customer', customerSchema);

// Exporting the model
module.exports = Customer;