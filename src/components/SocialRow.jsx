import { getIcon } from '../config/icons'

export default function SocialRow({ socials }) {
  if (!socials?.length) return null

  return (
    <div className="social-row">
      {socials.map((s) => {
        const Icon = getIcon(s.icon)
        return (
          <a
            key={s.url + s.icon}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className="social-btn"
            aria-label={s.label || s.icon}
            title={s.label || s.icon}
          >
            <Icon size={18} />
          </a>
        )
      })}
    </div>
  )
}
