import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from './config/profile'
import { links } from './config/links'
import { themes, DEFAULT_THEME_ID } from './config/themes'
import Avatar from './components/Avatar'
import SocialRow from './components/SocialRow'
import LinkButton from './components/LinkButton'
import ThemeSwitcher from './components/ThemeSwitcher'

const STORAGE_KEY = 'tefa-tjkt-theme'

export default function App() {
  const [themeId, setThemeId] = useState(
    () => localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME_ID,
  )

  const activeTheme = useMemo(
    () => themes.find((t) => t.id === themeId) || themes[0],
    [themeId],
  )

  useEffect(() => {
    const root = document.documentElement
    Object.entries(activeTheme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    localStorage.setItem(STORAGE_KEY, activeTheme.id)
  }, [activeTheme])

  return (
    <div className="page">
      <div className="bg-decor" aria-hidden="true">
        <span className="bg-blob bg-blob--1" />
        <span className="bg-blob bg-blob--2" />
        <span className="bg-node bg-node--1" />
        <span className="bg-node bg-node--2" />
        <span className="bg-node bg-node--3" />
        <span className="bg-node bg-node--4" />
      </div>

      <ThemeSwitcher themes={themes} activeId={themeId} onChange={setThemeId} />

      <main className="card">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="profile"
        >
          <Avatar name={profile.name} src={profile.avatar} status={profile.status} />
          <h1 className="profile__name">{profile.name}</h1>
          <p className="profile__username">{profile.username}</p>
          <p className="profile__bio">{profile.bio}</p>
          <SocialRow socials={profile.socials} />
        </motion.div>

        <div className="links">
          {links.map((link, i) => (
            <LinkButton key={link.url + i} link={link} index={i} />
          ))}
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} TEFA TJKT — Klinik Komputer SMKNAS</span>
        </footer>
      </main>
    </div>
  )
}
