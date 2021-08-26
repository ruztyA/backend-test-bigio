const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nilaiSchema = new Schema(
  {
    noIndukSiswa: {
      type: String,
      ref: "DataSiswa",
    },
    namaSiswa: {
      type: String,
      ref: "DataSiswa"
    },
    mataPelajaran: {
      type: String,
      ref: "DataGuru"
    },
    nilaiSiswa: {
      type: String,
      required: true,
    }
  }, 
  { timestamps: true }
);

const Nilai = mongoose.model("Nilai", nilaiSchema);
module.exports = Nilai;