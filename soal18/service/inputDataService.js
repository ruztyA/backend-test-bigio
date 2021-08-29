const DataGuru = require("../database/model/dataGuru");
const DataSiswa = require("../database/model/dataSiswa");

exports.createDataGuru = async (payload) => {
  const newData = await new DataGuru({
    namaGuru: payload.nama_guru,
    noIndukGuru: payload.no_induk_guru,
    mataPelajaran: payload.mata_pelajaran,
    kelas: payload.kelas
  });
  newData.save(newData);

  return newData;
}

exports.getDataGuru = async () => {
  const data = await DataGuru.find({}, "namaGuru noIndukGuru mataPelajaran");
  return data;
}

exports.updateDataGuru = async (payload) => {
  const updatedData = await DataGuru.findOneAndUpdate(
    { noIndukGuru: payload.no_induk_guru},
    {
      namaGuru: payload.nama_guru,
      noIndukGuru: payload.no_induk_guru,
      mataPelajaran: payload.mata_pelajaran,
      kelas: payload.kelas
    }
  );
  return updatedData;
}

exports.deleteDataGuru = async (payload) => {
  const data = await DataGuru.findOneAndDelete({
    noIndukGuru: payload.no_induk_guru
  });
  return data;
}

exports.getDataSiswa = async () => {
  const data = await DataSiswa.find({}, "namaSiswa noIndukSiswa kelas");
  return data;
}

exports.createDataSiswa = async (payload) => {
  const newData = await new DataSiswa({
    namaSiswa: payload.nama_siswa,
    noIndukSiswa: payload.no_induk_siswa,
    kelas: payload.kelas
  });
  newData.save(newData);

  return newData;
}

exports.updateDataSiswa = async (payload) => {
  const updatedData = await DataSiswa.findOneAndUpdate(
    { noIndukSiswa: payload.no_induk_siswa},
    {
      namaSiswa: payload.nama_siswa,
      noIndukSiswa: payload.no_induk_siswa,
      kelas: payload.kelas
    }
  );
  return updatedData;
}

exports.deleteDataSiswa = async (payload) => {
  const data = await DataSiswa.findOneAndDelete({
    noIndukSiswa: payload.no_induk_siswa
  });
  return data;
}

exports.findDataGuru = async (no_induk_guru) => {
  const data = await DataGuru.findOne({ noIndukGuru: no_induk_guru });
  return data;
}

exports.findDataSiswa = async (no_induk_siswa) => {
  const data = await DataSiswa.findOne({ noIndukSiswa: no_induk_siswa });
  return data;
}
