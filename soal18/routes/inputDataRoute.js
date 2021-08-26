const router = require("express").Router();
const inputData = require("../controller/inputDataController");
const authMiddleware = require("../middleware/authorizationMiddleware");

router.post("/dataguru/new", authMiddleware.roleAdmin , inputData.insertDataGuru);
router.post("/datasiswa/new", authMiddleware.roleAdmin , inputData.insertDataSiwa);

module.exports = router;