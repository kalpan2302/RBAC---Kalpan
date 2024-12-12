const express = require("express");
const VerifyToken = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/role.middleware");

const router = express.Router();


//only admin can access this router
router.get("/admin", VerifyToken, authorizeRole("admin"), (req, res) => {
    res.json({ message: "welcome admin" })
});


// Both admin and manager can access this router
router.get("/manager", VerifyToken, authorizeRole("admin", "manager"), (req, res) => {
    res.json({ message: "welcome manager" });
});

//ALl can access this router
router.get("/user", VerifyToken, authorizeRole("admin", "manager", "user"), (req, res) => {
    res.json({ message: "welcome user" });
});

module.exports = router;