const mongoose = require("mongoose");

// Define mongoose schemas
const adminSchema = new mongoose.Schema({
    adminId: { type: String, required: true },
    password: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
    username: { type: String },
    password: String
});

const productSchema = new mongoose.Schema({
    id:Number,
    productName: String,
    desc: String,
    price: Number,
    imageLink:String
});
// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
    User,
    Admin,
    Product
}