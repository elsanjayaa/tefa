// =============================================================
// PROFIL TEFA TJKT
// Ganti nilai di bawah ini sesuai kebutuhan.
// avatar bisa diisi URL gambar (misal logo sekolah), atau
// dikosongkan ("") supaya otomatis tampil sebagai inisial.
// =============================================================

export const profile = {
  name: 'TEFA TJKT',
  username: 'Klinik Komputer SMK',
  bio: 'Teaching Factory Teknik Jaringan Komputer & Telekomunikasi Melayani service, instalasi jaringan, & konsultasi IT',
  avatar: '/tjkt.png', // contoh: 'https://example.com/logo-tefa.png'
  status: 'online',

  // Ikon sosial media di bawah bio. "icon" merujuk ke key di src/config/icons.js
  socials: [
    { icon: 'instagram', url: 'https://instagram.com/klinikkomp.smaknas', label: 'Instagram' },
    { icon: 'tiktok', url: 'https://tiktok.com/@tefatjktnolzie', label: 'TikTok' },
    { icon: 'whatsapp', url: 'https://wa.me/6281324453131', label: 'WhatsApp' },
    { icon: 'email', url: 'mailto:klinikkompsmaknas@gmail.com', label: 'Email' },
  ],
}
