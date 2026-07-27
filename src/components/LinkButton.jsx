import { motion } from 'framer-motion'
import { getIcon } from '../config/icons'
import { LuArrowUpRight } from 'react-icons/lu'

export default function LinkButton({ link, index }) {
  const Icon = getIcon(link.icon)

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      className={`link-btn${link.highlight ? ' link-btn--highlight' : ''}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
    >
      <span className="link-btn__icon">
        <Icon size={20} />
      </span>
      <span className="link-btn__text">
        <span className="link-btn__title">{link.title}</span>
        {link.description && (
          <span className="link-btn__desc">{link.description}</span>
        )}
      </span>
      <span className="link-btn__arrow">
        <LuArrowUpRight size={18} />
      </span>
    </motion.a>
  )
}
