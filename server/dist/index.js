"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require("cors");
const admins_1 = __importDefault(require("./routes/admins"));
require('dotenv').config();
const url = process.env.mongourl;
app.use(express_1.default.json());
app.use(cors());
app.use("/admin", admins_1.default);
app.get("/", (req, res) => {
    res.send("ok");
});
// Connect to MongoDB
mongoose_1.default.connect(url)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
const Port = 3000;
app.listen(Port, () => {
    console.log("Server started on port " + Port);
});
