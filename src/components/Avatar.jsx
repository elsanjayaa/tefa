function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

export default function Avatar({ name, src, status }) {
  return (
    <div className="avatar-wrap">
      <div className="avatar-ring" aria-hidden="true" />
      <div className="avatar">
        {src ? (
          <img src={src} alt={name} />
        ) : (
          <span className="avatar-initials">{getInitials(name)}</span>
        )}
      </div>
      {status === 'online' && <span className="avatar-status" title="Sedang aktif" />}
    </div>
  )
}
