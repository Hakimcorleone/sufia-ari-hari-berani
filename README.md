# Ari dan Hari Berani

Digital storybook interaktif untuk kanak-kanak bertajuk **“Ari dan Hari Berani”**.

Projek ini menggunakan HTML, CSS dan JavaScript biasa. Sesuai untuk deploy sebagai static website di Vercel, Netlify, Cloudflare Pages atau GitHub Pages.

---

Cara Run Dekat Laptop

Cara paling mudah:

Buka folder projek.
Double click file index.html.
Website akan terus terbuka dalam browser.

Kalau guna VS Code:

Install extension Live Server.
Right click index.html.
Pilih Open with Live Server.
Cara Deploy ke Vercel
Upload semua file ke GitHub repo.
Pergi ke Vercel.
Click Add New Project.
Import repo GitHub tadi.
Framework pilih Other atau biarkan default.
Click Deploy.

Projek ini tidak perlukan npm install, npm run dev, React, Vite atau backend.

Cara Edit Tajuk Buku

Buka file:

index.html

Cari bahagian ini:

<span>Ari dan Hari Berani</span>

Tukar kepada tajuk baru.

Contoh:

<span>Ari dan Hari Hebat</span>
Cara Edit Nama Penulis

Buka file:

index.html

Cari bahagian ini:

<div class="author-tag">✍️ Sufia Aishah Shaisham</div>

Tukar nama penulis di situ.

Contoh:

<div class="author-tag">✍️ Nama Penulis Baru</div>
Cara Tukar Gambar Muka Surat

Semua gambar buku berada dalam folder:

assets/pages/

Nama gambar mesti ikut format ini:

page-01.jpg
page-02.jpg
page-03.jpg
...
page-13.jpg

Kalau nak tukar gambar muka surat 1, replace file:

assets/pages/page-01.jpg

Kalau nak tukar muka surat 5, replace file:

assets/pages/page-05.jpg

Pastikan nama file kekal sama supaya website tak rosak.

Cara Tambah Muka Surat Baru

Contoh nak tambah muka surat ke-14.

Pertama, masukkan gambar baru dalam folder:

assets/pages/page-14.jpg

Kemudian buka file:

script.js

Cari bahagian array pages.

Tambah line baru:

"assets/pages/page-14.jpg",

Contoh:

const pages = [
  "assets/pages/page-01.jpg",
  "assets/pages/page-02.jpg",
  "assets/pages/page-03.jpg",
  "assets/pages/page-04.jpg",
  "assets/pages/page-05.jpg",
  "assets/pages/page-06.jpg",
  "assets/pages/page-07.jpg",
  "assets/pages/page-08.jpg",
  "assets/pages/page-09.jpg",
  "assets/pages/page-10.jpg",
  "assets/pages/page-11.jpg",
  "assets/pages/page-12.jpg",
  "assets/pages/page-13.jpg",
  "assets/pages/page-14.jpg"
];

Page counter dan dots akan auto ikut jumlah gambar dalam array.

Cara Buang Muka Surat

Buka file:

script.js

Dalam array pages, buang line muka surat yang tidak diperlukan.

Contoh buang page 13:

"assets/pages/page-13.jpg",

Lepas tu boleh delete juga gambar tersebut dalam folder:

assets/pages/page-13.jpg
Cara Edit Warna Background

Buka file:

styles.css

Cari bahagian body:

body {
  font-family: 'Nunito', sans-serif;
  background: linear-gradient(135deg, #87CEEB 0%, #E0F4FF 40%, #C8F5C8 100%);
  min-height: 100vh;
  overflow: hidden;
}

Tukar kod warna pada bahagian background.

Contoh background pink lembut:

background: linear-gradient(135deg, #FFD6E8 0%, #FFF0F5 40%, #FFEFD5 100%);
Cara Edit Button Next dan Previous

Buka file:

styles.css

Button previous:

.nav-btn.prev {
  background: linear-gradient(135deg, #FF6B6B, #FF8E53);
  color: white;
}

Button next:

.nav-btn.next {
  background: linear-gradient(135deg, #4ECDC4, #44A8B3);
  color: white;
}

Tukar warna dekat bahagian background.

Cara Edit Saiz Buku

Buka file:

styles.css

Cari bahagian ini:

.page-card {
  background: var(--cream);
  border-radius: 24px;
  height: 100%;
  aspect-ratio: 0.707;
}

Bahagian penting:

aspect-ratio: 0.707;

Nilai ini sesuai untuk bentuk page macam A4 portrait.

Kalau nak buku nampak lebih lebar, boleh cuba:

aspect-ratio: 0.75;

Kalau nak lebih kurus:

aspect-ratio: 0.65;
Cara Edit Text Keyboard Hint

Buka file:

index.html

Cari bahagian ini:

<div class="keyboard-hint">← → untuk tukar muka surat &nbsp;|&nbsp; Space untuk seterusnya</div>

Tukar text ikut kesesuaian.

Fungsi Yang Ada

Website ini mempunyai fungsi berikut:

Button previous dan next
Page indicator dots
Page counter
Keyboard navigation menggunakan arrow kiri dan kanan
Spacebar untuk pergi ke muka surat seterusnya
Swipe support untuk mobile
Fullscreen button
Animated clouds dan stars sebagai decoration
Responsive layout untuk desktop dan mobile
Nota Penting

Jangan ubah nama file utama ini kecuali tahu apa yang sedang dibuat:

index.html
styles.css
script.js

Jangan ubah struktur folder gambar ini:

assets/pages/

Kalau gambar tak keluar, biasanya sebab:

Nama file gambar salah.
Path dalam script.js salah.
Gambar tidak dimasukkan dalam folder assets/pages.
Extension gambar berbeza, contoh .png tapi dalam code tulis .jpg.
Tech Stack

Projek ini dibina menggunakan:

HTML
CSS
JavaScript
Static image assets

Tiada backend diperlukan.
Tiada database diperlukan.
Tiada build step diperlukan.
