const User = require("../database/model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (data) => {
  const newUser = await new User({
    username: data.username,
    password: bcrypt.hashSync(data.password, 10),
    role: data.role,
    nama: data.nama
  })
  newUser.save(newUser);

  return newUser;
}

exports.findUser = async (username) => {
  const user = await User.findOne({ username: username });
  return user;
}

exports.login = async (password, user) => {
  const checkPassword = await bcrypt.compare(password, user.password);
  if(checkPassword) {
    const generateToken = await jwt.sign({role: user.role}, process.env.SECRET_KEY);
    return generateToken;
  } else {
    return "Error";
  }
}
