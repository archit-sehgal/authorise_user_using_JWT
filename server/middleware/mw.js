const jwt = require("jsonwebtoken");
const secretKey = "superS3cr3t1";

const authenticateJwt = (req, res, next) => {
    const authHead = req.headers.authorization;
    if (authHead) {
        const token = authHead.split(" ")[1];
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        res.status(403).json({ message: "Forbidden" });
    }
};

module.exports = {
    authenticateJwt,
    secretKey
}