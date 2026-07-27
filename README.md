# TEFA TJKT — LinkHub

Halaman personal ala Linktree untuk TEFA TJKT (Klinik Komputer SMK), dibangun dengan Vite + React. Tema biru tua & tosca bernuansa teknologi/jaringan.

## Menjalankan di komputer kamu

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Build versi produksi (siap di-deploy ke Vercel/Netlify/GitHub Pages/hosting statis apapun):

```bash
npm run build
```

Hasilnya ada di folder `dist/`.

## Cara menambah link baru

Buka **`src/config/links.js`**, copy salah satu blok object, tempel di array `links`, contoh:

```js
{
  title: 'Judul Link Baru',
  description: 'Deskripsi singkat (opsional)',
  url: 'https://alamat-tujuan.com',
  icon: 'globe', // lihat daftar ikon di src/config/icons.js
  highlight: true, // opsional, bikin kartu jadi menonjol
},
```

Simpan, halaman otomatis update.

## Cara ganti data profil / kontak

Edit **`src/config/profile.js`**: nama, tagline, foto/logo (URL), dan link Instagram, TikTok, WhatsApp, Email.

Sudah diisi dengan data yang kamu berikan:

- Instagram: `klinikkomp.smaknas`
- TikTok: `tefatjktnolzie`
- WhatsApp: `081324453131`
- Email: `klinikkompsmaknas@gmail.com`

## Cara ganti / menambah tema

Tema ada di **`src/config/themes.js`**. Sudah tersedia 3 tema, semua dalam palet biru tua & tosca:

- **Navy Tosca** (default) — biru tua pekat + tosca terang
- **Grid Malam** — versi lebih gelap dengan aksen cyan
- **Tosca Pagi** — versi terang untuk siang hari / kontras tinggi

Pilihan tema pengunjung tersimpan otomatis di browser mereka.

## Struktur folder

```
src/
  config/
    profile.js   -> data profil, sosial media, kontak
    links.js     -> daftar link (paling sering diedit)
    themes.js    -> daftar tema & warnanya
    icons.js     -> "kamus" ikon yang bisa dipakai
  components/
    Avatar.jsx
    SocialRow.jsx
    LinkButton.jsx
    ThemeSwitcher.jsx
  App.jsx
  index.css
```
