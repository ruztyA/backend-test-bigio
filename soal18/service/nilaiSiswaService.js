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
  return data;
}

exports.findDataGuru = async (payload) => {
  const data = await DataGuru.findOne({ mataPelajaran: payload }).exec();
  return data;
}

exports.getNilai = async () => {
  const data = await NilaiSiswa.find({}, "noIndukSiswa namaSiswa mataPelajaran nilaiSiswa");
  return data;
}

exports.getNilaiBySiswa = async (payload) => {
  const data = await NilaiSiswa.find({ noIndukSiswa: payload }, "noIndukSiswa namaSiswa mataPelajaran nilaiSiswa").exec();
  return data;
}

exports.getNilaiByPelajaran = async (payload) => {
  const data = await NilaiSiswa.find({ mataPelajaran: payload }, "noIndukSiswa namaSiswa mataPelajaran nilaiSiswa").exec();
  return data;
}



