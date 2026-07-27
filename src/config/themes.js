// =============================================================
// DAFTAR TEMA
// Tema utama memakai palet biru tua & tosca (identitas TEFA
// TJKT). Ada juga varian terang untuk yang suka tampilan cerah.
// Mau bikin tema sendiri? Copy salah satu object, ganti `id`,
// `label`, `swatch`, dan isi `vars`-nya.
// =============================================================

export const themes = [
  {
    id: 'navy-tosca',
    label: 'Navy Tosca',
    swatch: '#2DD4BF',
    vars: {
      '--bg': '#071026',
      '--bg-alt': '#0B1B3A',
      '--surface': '#0F2347',
      '--surface-hover': '#15305F',
      '--text': '#EAF2FF',
      '--text-muted': '#7C93B8',
      '--accent': '#2DD4BF',
      '--accent-2': '#38BDF8',
      '--accent-contrast': '#04211D',
      '--border': 'rgba(45,212,191,0.18)',
      '--shadow': '0 18px 40px rgba(2,10,30,0.55)',
      '--font-display': "'Space Grotesk', sans-serif",
      '--font-body': "'Inter', sans-serif",
      '--font-mono': "'IBM Plex Mono', monospace",
      '--radius': '18px',
      '--radius-sm': '11px',
    },
  },
  {
    id: 'grid-malam',
    label: 'Grid Malam',
    swatch: '#22D3EE',
    vars: {
      '--bg': '#040711',
      '--bg-alt': '#08122A',
      '--surface': '#0A1730',
      '--surface-hover': '#102142',
      '--text': '#E7F6FF',
      '--text-muted': '#6C87AE',
      '--accent': '#22D3EE',
      '--accent-2': '#2DD4BF',
      '--accent-contrast': '#031616',
      '--border': 'rgba(34,211,238,0.2)',
      '--shadow': '0 0 34px rgba(34,211,238,0.1)',
      '--font-display': "'Space Grotesk', sans-serif",
      '--font-body': "'Inter', sans-serif",
      '--font-mono': "'IBM Plex Mono', monospace",
      '--radius': '14px',
      '--radius-sm': '8px',
    },
  },
  {
    id: 'tosca-pagi',
    label: 'Tosca Pagi',
    swatch: '#0F766E',
    vars: {
      '--bg': '#F0FBFA',
      '--bg-alt': '#E3F7F4',
      '--surface': '#FFFFFF',
      '--surface-hover': '#EAFBF9',
      '--text': '#062A29',
      '--text-muted': '#4C7573',
      '--accent': '#0F766E',
      '--accent-2': '#0369A1',
      '--accent-contrast': '#F0FBFA',
      '--border': 'rgba(6,42,41,0.1)',
      '--shadow': '0 18px 40px rgba(15,118,110,0.16)',
      '--font-display': "'Space Grotesk', sans-serif",
      '--font-body': "'Inter', sans-serif",
      '--font-mono': "'IBM Plex Mono', monospace",
      '--radius': '18px',
      '--radius-sm': '11px',
    },
  },
]

export const DEFAULT_THEME_ID = 'navy-tosca'
