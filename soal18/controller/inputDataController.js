const inputDataService = require("../service/inputDataService");

exports.insertDataGuru = async (req, res) => {
  try {
    const findData = await inputDataService.findDataGuru(req.body.no_induk_guru); 
    if(findData) {
      res.status(400).json({
        statusText: "Bad Request",
        message: "Data already exists"
      });
    } else {
      const newData = await inputDataService.createDataGuru(req.body);
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

exports.getDataGuru = async (req, res) => {
  try {
    const data = await inputDataService.getDataGuru();
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

exports.updateDataGuru = async (req, res) => {
  try {
    const findData = await inputDataService.findDataGuru(req.body.no_induk_guru); 
    if(!findData) {
      res.status(400).json({
        statusText: "Bad Request",
        message: "Data not exists"
      });
    } else {
      const data = await inputDataService.updateDataGuru(req.body);
      res.status(200).json({
        statusText: "OK",
        message: "Update Data Success",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}

exports.insertDataSiwa = async (req, res) => {
  try {
    const findData = await inputDataService.findDataSiswa(req.body.no_induk_siswa); 
    if(findData) {
      res.status(400).json({
        statusText: "Bad Request",
        message: "Data already exists"
      });
    } else {
      const newData = await inputDataService.createDataSiswa(req.body);
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

exports.getDataSiswa = async (req, res) => {
  try {
    const data = await inputDataService.getDataSiswa();
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

exports.updateDataSiswa = async (req, res) => {
  try {
    const findData = await inputDataService.findDataSiswa(req.body.no_induk_siswa); 
    if(!findData) {
      res.status(400).json({
        statusText: "Bad Request",
        message: "Data not exists"
      });
    } else {
      const data = await inputDataService.updateDataSiswa(req.body);
      res.status(200).json({
        statusText: "OK",
        message: "Update Data Success",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: error.message
    });
  }
}