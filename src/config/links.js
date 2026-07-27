// =============================================================
// DAFTAR LINK
// Untuk menambah link baru, tinggal copy salah satu object di
// bawah, paste, lalu ganti isinya. Urutan array = urutan tampil.
//
// Properti yang tersedia:
//   title       -> judul link (wajib)
//   url         -> alamat tujuan (wajib)
//   description -> teks kecil di bawah judul (opsional)
//   icon        -> key ikon dari src/config/icons.js (opsional)
//   highlight   -> true/false, kartu besar menonjol (opsional)
// =============================================================

export const links = [
  {
    title: 'Chat via WhatsApp',
    description: 'Order service, konsultasi, atau tanya-tanya',
    url: 'https://wa.me/6281324453131',
    icon: 'whatsapp',
    highlight: true,
  },
  {
    title: 'Instagram',
    description: '@klinikkomp.smaknas',
    url: 'https://www.instagram.com/klinikkomp.smknas/',
    icon: 'instagram',
  },
  {
    title: 'TikTok',
    description: '@tefatjktnolzie',
    url: 'https://tiktok.com/@tefatjktnolzie',
    icon: 'tiktok',
  },
  {
    title: 'Kirim Email',
    description: 'klinikkompsmaknas@gmail.com',
    url: 'mailto:klinikkompsmaknas@gmail.com',
    icon: 'email',
  },

  // 👇 Contoh menambah link baru, tinggal copy blok ini:
  // {
  //   title: 'Judul Link Baru',
  //   description: 'Deskripsi singkat (boleh dihapus baris ini)',
  //   url: 'https://alamat-tujuan.com',
  //   icon: 'globe',
  // },
]
