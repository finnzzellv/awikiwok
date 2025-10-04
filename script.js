// Menampilkan tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Fungsi tombol
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Kamu bisa hubungi saya di: brukatak");
  });