"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Admin = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define mongoose schemas
const adminSchema = new mongoose_1.default.Schema({
    adminId: { type: String, required: true },
    password: { type: String, required: true },
});
const userSchema = new mongoose_1.default.Schema({
    username: { type: String },
    password: String
});
const productSchema = new mongoose_1.default.Schema({
    id: Number,
    productName: String,
    desc: String,
    price: Number,
    imageLink: String
});
// Define mongoose models
exports.User = mongoose_1.default.model('User', userSchema);
exports.Admin = mongoose_1.default.model('Admin', adminSchema);
exports.Product = mongoose_1.default.model('Product', productSchema);
