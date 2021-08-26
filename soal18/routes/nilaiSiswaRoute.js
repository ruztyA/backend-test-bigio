const router = require("express").Router();
const nilaiSiswa = require("../controller/nilaiSiswaController");
const authMiddleware = require("../middleware/authorizationMiddleware");

router.post("/nilai/new", authMiddleware.roleGuru , nilaiSiswa.createNilai);
router.get("/nilai/:no_induk_siswa", authMiddleware.roleSiswa , nilaiSiswa.getNilaiByIdSiswa);

module.exports = router;