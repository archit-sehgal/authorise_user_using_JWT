"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require("cors");
const admins_1 = __importDefault(require("./routes/admins"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const mongoURL = process.env.mongourl;
app.use(express_1.default.json());
app.use(cors());
app.use("/admin", admins_1.default);
app.get("/", (req, res) => {
    res.send("OK");
});
if (!mongoURL) {
    console.error("MongoDB URL not defined in .env file.");
    process.exit(1);
}
// Connect to MongoDB
mongoose_1.default
    .connect(mongoURL)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
