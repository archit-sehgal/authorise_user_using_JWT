import mongoose from "mongoose";

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
export const User = mongoose.model('User', userSchema);
export const Admin = mongoose.model('Admin', adminSchema);
export const Product = mongoose.model('Product', productSchema);

