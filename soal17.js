/*
1. Toko beroperasi 24*7 hari dengan pembagian shift kerja sebanyak 3 shift
2. Aplikasi menghandle lebih dari 1 toko
3. Aplikasi bisa mengeluarkan laporan penjualan keseluruhan toko berdasarkan periode tertentu
4. Aplikasi bisa mengeluarkan laporan untuk menampilkan detail transaksi yang dilakukan setiap akhir shift berakhir

Tabel:
- Toko (id, nama toko, alamat, no.telepon, pekerja_id)
- Laporan penjualan (transaksi_id, toko_id )
- Transaksi (no.transaksi, tgl, barang_id, pelanggan, qty, total harga, shift_id)
- Pelanggan (id, nama, no. telephone)
- Barang (id barang, harga satuan barang)
- Shift (id, shift("pagi", "sore", "malam"))
- Hari kerja (id, nama_hari)
- Pekerja (nama, hari_kerja_id, shift_id)

*/




