import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Fungsi renderContent didefinisikan
function renderContent(selectedTab) {
  switch (selectedTab) {
    case "data-utama":
      return <DataUtama />;
    case "data-entitas":
      return <DataEntitas />;
    case "data-pungutan":
      return <DataPungutan />;
    default:
      return <div>Pilih tab untuk menampilkan konten.</div>;
  }
}

// Komponen DataPungutan
function DataPungutan() {
  const [nilai, setNilai] = useState(50000); // Nilai awal
  const [biayaTambahan, setBiayaTambahan] = useState(500); // Biaya tambahan
  const [biayaPengurang, setBiayaPengurang] = useState(1000); // Biaya pengurang
  const [voluntaryDeclaration, setVoluntaryDeclaration] = useState(0); // Voluntary declaration
  const [nilaiFOB, setNilaiFOB] = useState(54500); // Nilai FOB awal

  // Function untuk menghitung Nilai FOB
  const calculateNilaiFOB = () => {
    const fob = nilai + biayaTambahan - biayaPengurang + voluntaryDeclaration;
    setNilaiFOB(fob); // Set Nilai FOB terbaru
  };

  // Event handler untuk setiap input
  const handleInputChange = (e, setter) => {
    const value = parseFloat(e.target.value) || 0; // Pastikan nilai angka
    setter(value); // Set state
    calculateNilaiFOB(); // Hitung ulang Nilai FOB
  };

  return (
    <div>
      <h5>Data Pungutan</h5>
      <form className="mt-4">
        {/* Incoterms dan Valuta */}
        <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Incoterms</label>
                    <select className="form-select">
                      <option value="FOB">Free on Board</option>
                      <option value="CIF">Cost, Insurance, Freight</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Valuta</label>
                    <select className="form-select">
                      <option value="EUR">Euro</option>
                      <option value="USD">US Dollar</option>
                    </select>
                  </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label">Nilai</label>
            <input
              type="number"
              className="form-control"
              value={nilai}
              onChange={(e) => handleInputChange(e, setNilai)}
            />
          </div>
          <div className="col-md-1 text-center align-self-center">
            <span>+</span>
          </div>
          <div className="col-md-3">
            <label className="form-label">Biaya Tambahan</label>
            <input
              type="number"
              className="form-control"
              value={biayaTambahan}
              onChange={(e) => handleInputChange(e, setBiayaTambahan)}
            />
          </div>
          <div className="col-md-1 text-center align-self-center">
            <span>-</span>
          </div>
          <div className="col-md-3">
            <label className="form-label">Biaya Pengurang</label>
            <input
              type="number"
              className="form-control"
              value={biayaPengurang}
              onChange={(e) => handleInputChange(e, setBiayaPengurang)}
            />
          </div>
          <div className="col-md-1 text-center align-self-center">
            <span>+</span>
          </div>
          <div className="col-md-3">
            <label className="form-label">Voluntary Declaration</label>
            <input
              type="number"
              className="form-control"
              value={voluntaryDeclaration}
              onChange={(e) => handleInputChange(e, setVoluntaryDeclaration)}
            />
          </div>
          <div className="col-md-1 text-center align-self-center">
            <span>=</span>
          </div>
        </div>
        {/* Nilai FOB */}
        <div className="mb-3">
          <label className="form-label">Nilai FOB</label>
          <input type="number" className="form-control" value={nilaiFOB} disabled />
        </div>

        {/* Asuransi dan Freight */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Asuransi Bayar di</label>
            <select className="form-select">
              <option value="Luar Negeri">Luar Negeri</option>
              <option value="Dalam Negeri">Dalam Negeri</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Asuransi</label>
            <input type="text" className="form-control" defaultValue="5,000.00" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Freight</label>
            <input type="text" className="form-control" defaultValue="400.00" />
          </div>
        </div>

        {/* CIF dan Bruto */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label">CIF</label>
            <input type="text" className="form-control" defaultValue="59,900" disabled />
          </div>
          <div className="col-md-3">
            <label className="form-label">CIF Rp</label>
            <input type="text" className="form-control" defaultValue="1,056,580,892" disabled />
          </div>
          <div className="col-md-3">
            <label className="form-label">Bruto</label>
            <input type="text" className="form-control" defaultValue="900" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Netto</label>
            <input type="text" className="form-control" defaultValue="800" />
          </div>
        </div>

        {/* Flag Kontainer */}
        <div className="mb-3">
          <label className="form-label">Flag Kontainer</label>
          <select className="form-select">
            <option value="Kontainer">Kontainer</option>
            <option value="Non-Kontainer">Non-Kontainer</option>
          </select>
        </div>

        
      </form>
    </div>
  );
}

function DataUtama() {
  return (
    <form className="mt-4">
      <div className="row mb-3"> {/** row 1 */}
        {/* nomor pengajuan */}
        <div className="col-md-3">
          <label className="form-label">Nomor Pengajuan</label>
          <input
            type="text"
            className="form-control"
            defaultValue="201208388FAE20240402000001"
            disabled
          />
        </div>
          {/* tanggal pengajuan */}
        <div className="col-md-3">
          <label className="form-label">Tanggal Pengajuan</label>
          <input type="text"
                  className="form-control"
                  placeholder="Tanggal Pengajuan"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")} />
        </div>
        {/* Nomor Pendaftaran */}
        <div className="col-md-3">
          <label className="form-label">Nomor Pendaftaran</label>
          <input type="text"
            className="form-control"
            placeholder="Nomor Pendaftaran"
            disabled />
        </div>
        {/* tanggal Pendaftaran */}
        <div className="col-md-3">
          <label className="form-label">Tanggal Pendaftaran</label>
          <input type="text"
                  className="form-control"
                  placeholder="Tanggal Pendaftaran"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")} />
        </div>
      </div>
        
      <div className="row mb-3">{/** row 2 */}
        {/* Kantor Pabean */}
        <div className="col-md-4">
          <label className="form-label">Kantor Pabean</label>
          <select className="form-select">
            <option>KPU TANJUNG PRIOK</option>
            <option>KPU SURABAYA</option>
          </select>
        </div>
        {/* SKEP Fasilitas  */}
        <div className="col-md-4">
          <label className="form-label">SKEP Fasilita</label>
          <select className="form-select">
            <option></option>
            <option></option>
          </select>
        </div>
        {/* Jenis PIB  */}
        <div className="col-md-4">
          <label className="form-label">Jenis PIB *</label>
          <select className="form-select">
            <option></option>
            <option></option>
          </select>
        </div>
      </div>
      <div className="row"> {/** row 3 */}
        {/* Jenis Impor  */}
        <div className="col-md-6">
          <label className="form-label">Jenis Impor</label>
          <select className="form-select">
            <option>UNTUK DIPAKAI</option>
          </select>
        </div>
        {/* Cara Pembayaran  */}
        <div className="col-md-6">
          <label className="form-label">Cara Pembayaran</label>
          <select className="form-select">
            <option>BIASA/TUNAI</option>
          </select>
        </div>
        {/* Cara Transaksi  */}
        <div className="col-md-6">
          <label className="form-label">Cara Transaksi</label>
          <select className="form-select">
            <option>Transaksi Perdagangan Dengan Imbal Dagang</option>
          </select>
        </div>
      </div>
    </form>
  );
}

function DataEntitas() {
  return (
    <form className="mt-4">
     {/* Jenis Pemberitahuan  */}
      <div className="mb-3" style={{ width: "300px" }}>
        <label className="form-label">Jenis Pemberitahuan *</label>
        <select className="form-select" defaultValue="PENGUSAHA" disabled>
          <option value="PENGUSAHA">PENGUSAHA</option>
        </select>
      </div>
      <hr style={{ border: "1px solid #000" }} />
      {/* Pengusaha */}
      <h6 style={{ fontWeight: "bold",paddingBottom: "0px" }}>Pengusaha</h6>
      <hr className="mb-3" style={{ border: "3px solid blue", width: "30px", borderRadius: "5px" }} />
      
      <div className="row mb-3"> {/** row 1 */}
      {/* Identitas */}
        <div className="col-md-4">
          <label className="form-label">Jenis Identitas</label>
          <select className="form-select">
            <option>Pilih Jenis Identitas</option>
            <option>KTP</option>
            <option>Passport</option>
          </select>
        </div>
        {/* NIB */}
        <div className="col-md-4">
          <div className="form-check d-flex justify-content-between">
          <label className="form-label">NIB</label>
          <div>
            <input className="form-check-input" type="checkbox" id="tanpaNIB" />
            <label className="form-check-label" htmlFor="tanpaNIB">
              Tanpa NIB
            </label>
          </div>
          </div>
          <input type="text" className="form-control" defaultValue="8120310100981" />
        </div>
        {/* No Identitas */}
        <div className="col-md-4">
          <label className="form-label">No Identitas</label>
          <div className="input-group">
            <input type="text" className="form-control" defaultValue="012337556641000" />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3"> {/** row 2 */}
        {/* No Identitas */}
        <div className="col-md-4">
          <label className="form-label">No Identitas (16 digit)</label>
          <input type="text" className="form-control" defaultValue="012337556641000" />
        </div>
        <div className="col-md-8">
          <label className="form-label">Nama Perusahaan</label>
          <input
            type="text"
            className="form-control"
            defaultValue="UNICHEM CANDI INDONESIA"
          />
        </div>
      </div>
      <div className="row mb-3"> {/** row 3 */}
        {/* Provinsi */}
        <div className="col-md-3">
          <label className="form-label">Provinsi</label>
          <select className="form-select">
            <option>JAWA TIMUR</option>
            <option>JAWA BARAT</option>
          </select>
        </div>
        {/* Kota / Kabupaten */}
        <div className="col-md-3">
          <label className="form-label">Kota / Kabupaten</label>
          <select className="form-select">
            <option>KAB. SIDOARJO</option>
          </select>
        </div>
         {/* kecamatan */}
        <div className="col-md-2">
          <label className="form-label">Kecamatan</label>
          <input type="text" className="form-control" defaultValue="Candi" />
        </div>
        {/* Kode Pos */}
        <div className="col-md-2">
          <label className="form-label">Kode Pos</label>
          <input type="text" className="form-control" defaultValue="61271" />
        </div>
        {/* RT / RW */}
        <div className="col-md-2">
          <label className="form-label">RT / RW</label>
          <input type="text" className="form-control" defaultValue="/" />
        </div>
      </div>

      <div className="row mb-3">
        {/* Telephone */}
        <div className="col-md-4">
          <label className="form-label">Telephone</label>
          <input
            type="text"
            className="form-control"
            defaultValue="0138921342"
          />
        </div>
        {/* Email */}
        <div className="col-md-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            defaultValue="linggasetiawan@unichem.co.id"
          />
        </div>
        {/* Status */}
        <div className="col-md-4">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>AEO</option>
              <option>Non-AEO</option>
            </select>
        </div>
      </div>
    </form>
  );
}



function App() {
  const [selectedTab, setSelectedTab] = useState("data-utama");
  const handleNext = () => {
    if (selectedTab === "data-utama") setSelectedTab("data-entitas");
    else if (selectedTab === "data-entitas") setSelectedTab("data-pungutan");
  };

  const handlePrevious = () => {
    if (selectedTab === "data-pungutan") setSelectedTab("data-entitas");
    else if (selectedTab === "data-entitas") setSelectedTab("data-utama");
  };
  return (
    <div className="App">
            {/* Header */}
            <header className="bg-primary text-white p-3">
              <div className="container d-flex justify-content-between align-items-center">
                <h5 className="m-0">My App</h5>
                <span>Senin, 22 Juli 2024 - 15:17:27</span>
              </div>
            </header>
      
            {/* Main Content */}
            <main className="container my-4">
              <h5>Data Pemberitahuan</h5>
              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                          <button
                        className={`nav-link ${selectedTab === "data-utama" ? "active" : ""}`}
                        onClick={() => setSelectedTab("data-utama")}
                      >
                        Data Utama
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${selectedTab === "data-entitas" ? "active" : ""}`}
                        onClick={() => setSelectedTab("data-entitas")}
                      >
                        Data Entitas
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${selectedTab === "data-pungutan" ? "active" : ""}`}
                        onClick={() => setSelectedTab("data-pungutan")}
                      >
                        Data Pungutan
                      </button>
                    </li>
                  </ul>
                  {renderContent(selectedTab)}
                  {/* Tombol Navigasi */}
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      className="btn btn-secondary"
                      onClick={handlePrevious}
                      disabled={selectedTab === "data-utama"}
                    >
                      Sebelumnya
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={handleNext}
                      disabled={selectedTab === "data-pungutan"}
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              </div>
            </main>
      
            {/* Footer */}
            <footer className="bg-light text-center py-3">
              <small>Copyright © 2024. All Rights Reserved</small>
            </footer>
    </div>
  );
}

export default App;
