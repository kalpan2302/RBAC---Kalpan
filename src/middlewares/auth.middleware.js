const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded;
            console.log("The decoded user is : ", req.user);
            next();
        } catch (error) {
            return res.status(400).json({ message: "Invalid token." });
        }
    } else {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
};

module.exports = VerifyToken;