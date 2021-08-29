const jwt = require("jsonwebtoken");
const User = require("../database/model/user");

exports.roleAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(decoded.role !== "admin") {
      return res.status(403).json({
        statusText: "Forbidden",
        message: "Sorry, you do not have access, ADMIN only!",
      });
    }
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message
    });
  }
}

exports.roleGuru = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(decoded.role !== "guru") {
      return res.status(403).json({
        statusText: "Forbidden",
        message: "Sorry, you do not have access, GURU only!",
      });
    }
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message
    });
  }
}

exports.roleSiswa = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(decoded.role !== "siswa") {
      return res.status(403).json({
        statusText: "Forbidden",
        message: "Sorry, you do not have access, SISWA only!",
      });
    }
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message
    });
  }
}

exports.roleUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(!decoded.role) {
      return res.status(403).json({
        statusText: "Forbidden",
        message: "Sorry, you do not have access, user only!",
      });
    }
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message
    });
  }
}