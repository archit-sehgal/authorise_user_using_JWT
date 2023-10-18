"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = exports.secretKey = void 0;
const jwt = require("jsonwebtoken");
exports.secretKey = "superS3cr3t1";
const authenticateJwt = (req, res, next) => {
    const authHead = req.headers.authorization;
    if (authHead) {
        const token = authHead.split(" ")[1];
        jwt.verify(token, exports.secretKey, (err, user) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            else {
                req.user = user;
                next();
            }
        });
    }
    else {
        res.status(403).json({ message: "Forbidden" });
    }
};
exports.authenticateJwt = authenticateJwt;
exports.default = {
    authenticateJwt: exports.authenticateJwt,
    secretKey: exports.secretKey
};
