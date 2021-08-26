const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataGuruSchema = new Schema(
  {
    namaGuru: {
      type: String,
      required: true,
    },
    noIndukGuru: {
      type: String,
      required: true,
    },
    mataPelajaran: {
      type: String,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    }
  }, 
  { timestamps: true }
);

const DataGuru = mongoose.model("DataGuru", dataGuruSchema);
module.exports = DataGuru;