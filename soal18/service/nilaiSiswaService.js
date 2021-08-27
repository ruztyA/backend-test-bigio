const NilaiSiswa = require("../database/model/nilaiSiswa")
const DataSiswa = require("../database/model/dataSiswa");
const DataGuru = require("../database/model/dataGuru");

exports.create = async (nilai, data_siswa, data_guru) => {
  const data = await new NilaiSiswa({
    noIndukSiswa: data_siswa.noIndukSiswa,
    namaSiswa: data_siswa.namaSiswa,
    mataPelajaran: data_guru.mataPelajaran,
    nilaiSiswa: nilai
  });
  data.save(data);
  return data;
}

exports.findDataSiswa = async (payload) => {
  const data = await DataSiswa.findOne({ noIndukSiswa: payload }).exec();
  console.log("🦄 ~ file: nilaiSiswaService.js ~ line 18 ~ exports.findDataSiswa= ~ data", data)
  return data;
}

exports.findDataGuru = async (payload) => {
  const data = await DataGuru.findOne({ mataPelajaran: payload }).exec();
  console.log("🦄 ~ file: nilaiSiswaService.js ~ line 24 ~ exports.findDataGuru= ~ data", data)
  return data;
}

exports.getNilai = async (payload) => {
  const data = await NilaiSiswa.find({});
  return data;
}

exports.getNilaiBySiswa = async (payload) => {
  const data = await NilaiSiswa.find({ noIndukSiswa: payload }, "noIndukSiswa namaSiswa mataPelajaran nilaiSiswa").exec();
  return data;
}

exports.getNilaiByPelajaran = async (payload) => {
  const data = await NilaiSiswa.find({ mataPelajaran: payload.mata_pelajaran }).exec();
  return data;
}



