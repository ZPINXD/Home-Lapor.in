document.getElementById("laporanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let judul = document.getElementById("judul").value;
    let isi = document.getElementById("isi").value;
    
    if (judul && isi) {
        alert("Laporan berhasil dikirim!");
        document.getElementById("laporanForm").reset();
    } else {
        alert("Harap isi semua kolom.");
    }
});
