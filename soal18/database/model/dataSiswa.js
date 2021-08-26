const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSiswaSchema = new Schema(
  {
    namaSiswa: {
      type: String,
      required: true,
      unique: true
    },
    noIndukSiswa: {
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

const DataSiswa = mongoose.model("DataSiswa", dataSiswaSchema);
module.exports = DataSiswa;