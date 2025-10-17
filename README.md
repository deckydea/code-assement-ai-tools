# 🧠 Code Assessment — AI Coding Tools Study

Selamat datang! 👋  
Repositori ini berisi **tugas coding singkat** untuk penelitian tentang **perbedaan cara berpikir developer** ketika menggunakan dua alat bantu AI yang berbeda:

- 🧩 **Cursor (AI Native IDE)**
- ⚙️ **GitHub Copilot (AI Assistant)**

Tujuan penelitian ini adalah memahami bagaimana kedua alat ini memengaruhi cara developer **merencanakan, menulis, dan memperbaiki kode**.

---

## 📍 Struktur Folder

```

.
├── Cursor_Assessment/
│   ├── README.md
│   ├── run_all_tests.js
│   ├── tasks/         # tempat kamu menulis kode jawaban
│   └── tests/         # berisi test otomatis untuk mengecek hasilmu
│
└── Copilot_Assessment/
├── README.md
├── run_all_tests.js
├── tasks/
└── tests/

````

Kamu perlu menggunakan tools **Cursor (AI Native IDE)** pada folder Cursor_Assessment.
Kamu perlu menggunakan tools **GitHub Copilot (AI Assistant)** pada folder Copilot_Assessment.

---

## 🧭 Tujuan Pengerjaan

1. Menyelesaikan beberapa soal coding yang sudah disiapkan.
2. Mengerjakan tanpa bantuan eksternal selain tool AI yang diminta (Cursor / Copilot).
3. Menunjukkan bagaimana kamu berpikir dan memecahkan masalah saat coding.

Tidak ada “nilai benar atau salah” — yang dinilai adalah **strategi dan proses berpikirmu**, bukan hanya hasil akhir.

---


## 🚀 Cara Menjalankan Test

Pastikan kamu sudah memiliki **Node.js versi 16 atau lebih baru**.

1. **Clone repositori ini** ke komputer kamu:
   ```bash
   git clone https://github.com/deckydea/code-assement-ai-tools.git
   cd code-assement-ai-tools
````

2. **Pilih folder sesuai tool yang kamu gunakan**, contoh:

   ```bash
   cd Cursor_Assessment
   ```

3. **Jalankan semua test**:

   ```bash
   node run_all_tests.js
   ```

4. Jika ingin mengetes satu soal saja:

   ```bash
   node tests/01_nama_test.js
   ```

Kamu akan melihat tanda seperti ini:

```
✅ cursor: compose_middleware
✅ cursor: toposort_modules
✅ cursor: bugfix_retry_backoff
Summary: 3 passed, 0 failed
```

Jika ada `❌`, berarti test belum lolos — silakan revisi kode kamu.

---

## ✍️ Aturan Pengerjaan

* Kamu **boleh menggunakan fitur AI di tool yang ditugaskan** (Cursor atau Copilot).
* Jangan menyalin kode dari luar (Google, StackOverflow, dsb).
* Jangan ubah isi folder `tests/` atau `run_all_tests.js`.
* Semua kode jawaban ditulis di folder `tasks/`.
* Gunakan gaya kode yang kamu anggap paling nyaman dan rapi.

---

## 💬 Setelah Selesai

1. Pastikan semua test sudah kamu jalankan.
2. Simpan hasil akhir pekerjaanmu (folder yang berisi `tasks/` dan `tests/`).
3. Peneliti akan menghubungimu untuk sesi wawancara singkat mengenai pengalamanmu.

---

## 🙏 Terima Kasih

Terima kasih sudah berpartisipasi dalam penelitian ini!
Dukunganmu sangat membantu untuk memahami bagaimana AI dapat meningkatkan pengalaman developer di masa depan 💡

---

### ⚠️ Catatan Etika

Semua data yang dikumpulkan (kode, waktu pengerjaan, hasil test, wawancara) akan disimpan **secara anonim** dan **hanya digunakan untuk keperluan penelitian akademik**.
Tidak ada data pribadi yang akan dipublikasikan atau dibagikan ke pihak lain.

---

**Peneliti:**
📧 [Decky Dea Rizkiyana dan Yolanda Rukmantara]
🎓 [Binus Online Learning]



---

