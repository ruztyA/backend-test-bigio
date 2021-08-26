const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nilaiSchema = new Schema(
  {
    siswaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DataSiswa"
    },
    namaPelajaran: {
      type: mongoose.Schema.Types.ObjectId,
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