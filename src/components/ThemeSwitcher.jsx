export default function ThemeSwitcher({ themes, activeId, onChange }) {
  return (
    <div className="theme-switcher" role="radiogroup" aria-label="Pilih tema">
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          role="radio"
          aria-checked={t.id === activeId}
          title={t.label}
          className={`theme-swatch${t.id === activeId ? ' theme-swatch--active' : ''}`}
          style={{ '--swatch-color': t.swatch }}
          onClick={() => onChange(t.id)}
        >
          <span className="theme-swatch__dot" />
        </button>
      ))}
    </div>
  )
}
