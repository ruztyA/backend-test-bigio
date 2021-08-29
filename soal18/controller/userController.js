const userService = require("../service/userService");

exports.register = async (req, res) => {
  try {
    const findUser = await userService.findUser(req.body.username);
    if(findUser) {
      res.status(400).json({
        statusText: "Bad Request",
        message: "User already Registered"
      });
    } else {
      const user = await userService.register(req.body);

      res.status(201).json({
        statusText: "Created",
        message: "Register Success",
        data: user
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

exports.login = async (req, res) => {
  try {
    const findUser = await userService.findUser(req.body.username);
    if(!findUser) {
      res.status(401).json({
        statusText: "Unauthorized",
        message: "Incorrect Username or Password"
      });
    } else {
      const token = await userService.login(req.body.password, findUser);
      if(token == "Error"){
        res.status(400).json({
          statusText: "Bad Request",
          message: "Incorrect Username or Password"
        });  
      } else {
        res.status(200).json({
          statusText: "OK",
          message: "Login Success",
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

