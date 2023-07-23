const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/keys");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Auth Failed" });
  }
};
