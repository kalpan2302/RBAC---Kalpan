const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).send({ message: "Forbidden" })
        }
        next();
    }

};

module.exports = authorizeRole;