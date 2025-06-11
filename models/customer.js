const mongoose = require('mongoose');

// Creating the Schema
const customerSchema = new mongoose.Schema ({
    name: String,
    age: Number,
})

// Compiling the schema into a model
const Customer = mongoose.model('Customer', customerSchema);

// Export the model
module.exports = Customer;