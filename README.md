# Ari dan Hari Berani

Refactored static web book daripada satu fail HTML besar kepada struktur yang lebih mudah upload dan deploy.

## Struktur folder

```text
ari_hari_berani_refactored/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── pages/
        ├── page-01.jpg
        ├── page-02.jpg
        └── ...
```

## Cara deploy paling mudah

### Vercel
1. Upload semua fail/folder dalam folder ini ke GitHub repo.
2. Pergi ke Vercel.
3. Import repo tersebut.
4. Framework preset: `Other`.
5. Build command: kosongkan.
6. Output directory: kosongkan / root.
7. Deploy.

### Netlify / Cloudflare Pages
Upload folder ini sebagai static site. Tiada build step diperlukan.

## Cara edit

- Teks tajuk, nama author, button fullscreen dan elemen HTML: edit `index.html`.
- Warna, layout, saiz, responsive design dan animation: edit `styles.css`.
- Senarai muka surat, butang next/previous, keyboard arrow dan swipe: edit `script.js`.
- Gambar muka surat: ganti fail dalam `assets/pages/` dengan nama yang sama, contohnya `page-01.jpg`.

## Nota

Rupa dan fungsi asal dikekalkan. Perubahan utama cuma gambar base64 yang sangat panjang telah dikeluarkan daripada HTML dan disimpan sebagai fail gambar biasa.
