const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {

    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const Newuser = new User({ username, password: hashedPassword, role });
        Newuser.save();
        return res.status(201).json({ message: `User Registered with username : ${username}` })
    } catch (error) {
        res.status(500).json({ message: `Something went wrong : ${error}` });
    }

};
const login = async (req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) return res.status(404).json({ message: "User not found" });
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ message: "Invalid Password" });

            const payload = {
                id: user._id,
                role: user.role
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
            return res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { register, login };