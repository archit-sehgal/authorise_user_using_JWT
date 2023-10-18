"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mw_1 = require("../middleware/mw");
const db_1 = require("../db/db");
const router = express_1.default.Router();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { adminId, AdminPasw } = req.body;
    const existingAdmin = yield db_1.Admin.findOne({ adminId: adminId });
    if (!existingAdmin) {
        const newAdmin = new db_1.Admin({
            adminId: adminId,
            password: AdminPasw
        });
        yield newAdmin.save();
        const token = jsonwebtoken_1.default.sign({ adminId, AdminPasw }, mw_1.secretKey);
        res.json({ message: "Admin created successfully", token });
    }
    else {
        res.status(404).send("Admin already exist");
    }
}));
router.post("/login", mw_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { adminId, AdminPasw } = req.body;
    const existingAdmin = yield db_1.Admin.findOne({ adminId: adminId });
    if (existingAdmin) {
        const token = jsonwebtoken_1.default.sign({ adminId, AdminPasw }, mw_1.secretKey);
        res.json({ message: "Admin logged in", token: token });
    }
    else {
        res.json("Admin Doesn't exist");
    }
}));
exports.default = router;
