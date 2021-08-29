const router = require("express").Router();
const inputData = require("../controller/inputDataController");
const authMiddleware = require("../middleware/authorizationMiddleware");

router.post("/dataguru/new", authMiddleware.roleAdmin , inputData.insertDataGuru);
router.get("/dataguru/", authMiddleware.roleUser , inputData.getDataGuru);
router.put("/dataguru/update", authMiddleware.roleAdmin , inputData.updateDataGuru);

router.post("/datasiswa/new", authMiddleware.roleAdmin , inputData.insertDataSiwa);
router.get("/datasiswa/", authMiddleware.roleUser , inputData.getDataSiswa);
router.put("/datasiswa/update", authMiddleware.roleAdmin , inputData.updateDataSiswa);

module.exports = router;