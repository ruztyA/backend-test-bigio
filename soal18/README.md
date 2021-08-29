# How to run the project:
1. npm install
2. npm run dev 

# API List
| Routes | EndPoint                                 | Description                                                |
| ------ | -----------------------------------------|------------------------------------------------------------|
| POST   | localhost:8080/api/register              | Register User (Admin Only)                                 |
| POST   | localhost:8080/api/login                 | User Login                                                 |
| POST   | localhost:8080/api/dataguru/new          | Insert Data Guru (Admin Only)                              |
| GET    | localhost:8080/api/dataguru/             | Get List of Guru                                           |
| PUT    | localhost:8080/api/dataguru/update       | Update Data Guru (Admin Only)                              |
| POST   | localhost:8080/api/datasiswa/new         | Insert Data Siswa (Admin Only)                             |
| GET    | localhost:8080/api/datasiswa/            | Get List of Siswa                                          |
| PUT    | localhost:8080/api/datasiswa/update      | Update Data Guru (Admin Only)                              |
| POST   | localhost:8080/api/nilai/new             | Insert Nilai Siswa (Guru Only)                             |
| GET    | localhost:8080/api/nilai/:no_induk_siswa | Get Nilai Siswa by No Induk Siswa (Siswa Only)             |
| GET    | localhost:8080/api/nilai/                | Get All Nilai Siswa                                        |
| POST   | localhost:8080/api/nilai/mata-pelajaran  | Get Nilai Siswa by Mata Pelajaran                          |

# API Docs:
https://documenter.getpostman.com/view/16235311/TzzHnDGz

# DEVELOPER : Anggita Ruzty