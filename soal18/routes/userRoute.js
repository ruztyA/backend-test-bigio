const router = require("express").Router();
const registration = require("../controller/userController");
const authMiddleware = require("../middleware/authorizationMiddleware");

router.post("/register", authMiddleware.roleAdmin ,registration.register);
router.post("/login", registration.login);

module.exports = router;