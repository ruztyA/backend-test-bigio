const NilaiSiswa = require("../database/model/nilaiSiswa")
const dataSiswa = require("../database/model/dataSiswa");
const dataGuru = require("../database/model/dataGuru");

exports.create = async (payload, data_siswa, data_guru) => {
  const data = await new NilaiSiswa({
    noIndukSiswa: data_siswa.noIndukSiswa,
    namaSiswa: data_siswa.namaSiswa,
    namaPelajaran: data_guru.namaPelajaran,
    nilaiSiswa: payload.nilai
  });
  data.save(data);
  return data;
}

exports.findDataSiswa = async (payload) => {
  const data = await dataSiswa.findOne({ noIndukSiswa: payload.no_induk_siswa }).exec();
  console.log("🦄 ~ file: nilaiSiswaService.js ~ line 18 ~ exports.findDataSiswa= ~ data", data)
  return data;
}

exports.findDataGuru = async (payload) => {
  const data = await dataGuru.findOne({ mataPelajaran: payload.mata_pelajaran }).exec();
  console.log("🦄 ~ file: nilaiSiswaService.js ~ line 24 ~ exports.findDataGuru= ~ data", data)
  return data;
}

exports.getNilai = async (payload) => {
  const data = await NilaiSiswa.find({});
  return data;
}

exports.getNilaiBySiswa = async (payload) => {
  const data = await NilaiSiswa.find({ noIndukSiswa: payload.no_induk_siswa }).exec();
  return data;
}

exports.getNilaiByPelajaran = async (payload) => {
  const data = await NilaiSiswa.find({ mataPelajaran: payload.mata_pelajaran }).exec();
  return data;
}



