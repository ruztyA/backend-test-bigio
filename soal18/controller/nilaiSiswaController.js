const nilaiSiswaService = require("../service/nilaiSiswaService");

exports.createNilai = async (req, res) => {
  try {
    const findSiswa = await nilaiSiswaService.findDataSiswa(req.body.no_induk_siswa);
    console.log("🦄 ~ file: nilaiSiswaController.js ~ line 6 ~ exports.createNilai= ~ findSiswa", findSiswa)
    const findPelajaran = await nilaiSiswaService.findDataGuru(req.body.mata_pelajaran);
    console.log("🦄 ~ file: nilaiSiswaController.js ~ line 8 ~ exports.createNilai= ~ findPelajaran", findPelajaran)
    if(!findSiswa || !findPelajaran) {
      res.status(400).json({
        statusText: "Bad Request",
        message: "Data not found"        
      });  
    } else {
      const newData = await nilaiSiswaService.create(req.body.nilai, findSiswa, findPelajaran);
      res.status(201).json({
        statusText: "Created",
        message: "Input Data Success",
        data: newData
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

exports.getAllNilai = async (req, res) => {
  try {
    const data = await nilaiSiswaService.getNilai();
    res.status(200).json({
      statusText: "OK",
      message: "Get Data Success",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

exports.getNilaiByIdSiswa = async (req, res) => {
  try {
    const data = await nilaiSiswaService.getNilaiBySiswa(req.params.no_induk_siswa);
    res.status(200).json({
      statusText: "OK",
      message: "Get Data Success",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

exports.getNilaiByPelajaran = async (req, res) => {
  try {
    const data = await nilaiSiswaService.getNilaiByPelajaran(req.body.mata_pelajaran);
    res.status(200).json({
      statusText: "OK",
      message: "Get Data Success",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}