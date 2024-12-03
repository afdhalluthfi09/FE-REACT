#NOTE
project ini dibuat pada lingkupan sysetm OS LINUX,
##CLONE PROJECT BY RESOURCE REPOSITORY
##NPM INSTALL
##NPM RUN DEV

#soal 1
### Tabel: Pengajuan

| Kolom                | Tipe Data      | Deskripsi                                    | Nullable | Keterangan  |
|----------------------|----------------|----------------------------------------------|----------|-------------|
| nomorpenagjuan        | VARCHAR(255)   | Nomor pengajuan                              | Tidak    | Primary Key |
| tanggalpengajuan      | DATE           | Tanggal pengajuan                            | Tidak    |             |
| NOMORPENDAFTARAN      | VARCHAR(255)   | Nomor pendaftaran                            | Tidak    |             |
| TANGGAL PENDAFTARAN   | DATE           | Tanggal pendaftaran                          | Tidak    |             |
| KANTOR PABEAN         | VARCHAR(255)   | Kantor pabean tempat pengajuan dilakukan     | Tidak    |             |
| SKEP FASILITAS        | VARCHAR(255)   | Surat Keputusan fasilitas                    | Tidak    |             |
| JENIS PIB             | VARCHAR(255)   | Jenis PIB (Pemberitahuan Impor Barang)       | Tidak    |             |
| KANTOR PABEAN         | VARCHAR(255)   | Kantor pabean yang mengurus PIB              | Tidak    |             |
| JENIS IMPOR           | VARCHAR(255)   | Jenis impor (misalnya, impor barang, bahan)  | Tidak    |             |
| CARA PEMBAYARAN       | VARCHAR(255)   | Cara pembayaran (misalnya, tunai, kredit)    | Tidak    |             |
| TRANSAKSI             | VARCHAR(255)   | Jenis transaksi (misalnya, ekspor, impor)    | Tidak    |             |

### Tabel: Data Entitas

| Kolom                 | Tipe Data      | Deskripsi                                       | Nullable | Keterangan |
|-----------------------|----------------|-------------------------------------------------|----------|------------|
| JENIS PEMBERITAHUAN    | VARCHAR(255)   | Jenis pemberitahuan (misalnya, impor, ekspor)    | Tidak    |            |
| NIB                   | VARCHAR(255)   | Nomor Induk Berusaha (NIB) perusahaan           | Tidak    |            |
| NO IDENTITAS           | VARCHAR(255)   | Nomor identitas perusahaan                      | Tidak    |            |
| NAMA PERUSAHAAN        | VARCHAR(255)   | Nama perusahaan                                 | Tidak    |            |
| PROVINSI               | VARCHAR(255)   | Provinsi tempat perusahaan beroperasi           | Tidak    |            |
| KABUPATEN              | VARCHAR(255)   | Kabupaten tempat perusahaan beroperasi          | Tidak    |            |
| KECAMATAN              | VARCHAR(255)   | Kecamatan tempat perusahaan beroperasi          | Tidak    |            |
| KODE POS               | VARCHAR(10)    | Kode pos alamat perusahaan                      | Tidak    |            |
| RT RW                  | VARCHAR(10)    | RT/RW alamat perusahaan                         | Tidak    |            |
| TELEPHONE              | VARCHAR(15)    | Nomor telepon perusahaan                        | Tidak    |            |
| EMAIL                 | VARCHAR(255)   | Alamat email perusahaan                         | Tidak    |            |
| STATUS                 | VARCHAR(50)    | Status perusahaan (aktif, non-aktif, dll)       | Tidak    |            |

### Tabel: Data Pungutan

| Kolom                    | Tipe Data      | Deskripsi                                       | Nullable | Keterangan |
|--------------------------|----------------|-------------------------------------------------|----------|------------|
| INCONTREM                | DECIMAL(12,2)  | Nilai pungutan dalam valuta tertentu            | Tidak    |            |
| VALUTA                   | VARCHAR(50)    | Jenis valuta (IDR, USD, dll)                    | Tidak    |            |
| KURS                     | DECIMAL(10,4)  | Kurs valuta pada saat transaksi                 | Tidak    |            |
| NILAI                    | DECIMAL(12,2)  | Nilai barang yang dikenakan pungutan            | Tidak    |            |
| BIAYA TAMBAHAN           | DECIMAL(12,2)  | Biaya tambahan lainnya                          | Tidak    |            |
| BIAYA PENGURANGAN        | DECIMAL(12,2)  | Biaya yang dapat dikurangi dalam perhitungan    | Tidak    |            |
| VOLUNTARY DECLARATION    | VARCHAR(255)   | Keterangan deklarasi sukarela (jika ada)        | Tidak    |            |
| NILAI FOB                | DECIMAL(12,2)  | Nilai FOB (Free On Board)                       | Tidak    |            |
| ASURANSI BAYARAN         | DECIMAL(12,2)  | Nilai pembayaran asuransi                       | Tidak    |            |
| ASURANSI                 | DECIMAL(12,2)  | Nilai asuransi (untuk nilai barang)             | Tidak    |            |
| CIF                      | DECIMAL(12,2)  | Cost, Insurance, and Freight                    | Tidak    |            |
| CIFRP                    | DECIMAL(12,2)  | CIF plus biaya lainnya                          | Tidak    |            |
| BRUTO NETTO              | DECIMAL(12,2)  | Berat bruto dan netto barang                    | Tidak    |            |

### Relasi Antar Tabel

1. **Relasi antara Tabel Pengajuan dan Data Entitas**:
   - **Kolom `nomorpenagjuan`** di tabel `Pengajuan` berhubungan dengan **`NIB`** di tabel `Data Entitas`. Relasi ini menunjukkan bahwa setiap pengajuan terkait dengan perusahaan yang memiliki NIB tertentu.

2. **Relasi antara Tabel Pengajuan dan Data Pungutan**:
   - **Kolom `nomorpenagjuan`** di tabel `Pengajuan` berhubungan dengan **`INCONTREM`** di tabel `Data Pungutan`. Relasi ini menghubungkan setiap pengajuan dengan pungutan yang terkait, berdasarkan nomor pengajuan.

### Penjelasan Relasi

- **Pengajuan ke Data Entitas**: Setiap pengajuan terkait dengan entitas (perusahaan) yang memiliki `NIB`, `NO IDENTITAS`, dan informasi lain yang terkait dengan entitas tersebut.
- **Pengajuan ke Data Pungutan**: Setiap pengajuan dapat memiliki data terkait pungutan yang dikenakan pada transaksi tersebut, seperti nilai, biaya tambahan, dan nilai CIF.

#soal 2
maaf tidak sempat buat, karna masih nyambi
