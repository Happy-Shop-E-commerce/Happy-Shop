const admins = require("../admin/adminSchema");
const jwt = require("jsonwebtoken");

var authMiddelware = async function (req, res, next) {
  // TODO: Implement your rate limiter here

  const {
    headers: { auth },
  } = req;

  if (!auth) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  const decodedToken = await jwt.decode(auth);

  if (!decodedToken) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  const admin = await admins.findById(decodedToken.id);

  if (!admin) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  req.admin = admin;

  next();
};

module.exports = authMiddelware;
