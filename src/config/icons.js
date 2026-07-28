import { CiFacebook } from "react-icons/ci";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaSpotify,
  FaWhatsapp,
  FaTelegram,
  FaThreads,
  FaDiscord,
  FaPinterest,
} from 'react-icons/fa6'

import {
  LuMail,
  LuGlobe,
  LuBriefcase,
  LuBookOpen,
  LuMusic,
  LuStore,
  LuGift,
  LuLink,
  LuCalendarDays,
  LuNewspaper,
  LuPlay,
  LuHeart,
  LuCamera,
  LuGraduationCap,
} from 'react-icons/lu'

export const ICONS = {
  // sosial media / brand
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  github: FaGithub,
  x: FaXTwitter,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
  spotify: FaSpotify,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  threads: FaThreads,
  discord: FaDiscord,
  pinterest: FaPinterest,

  // umum / generik
  email: LuMail,
  globe: LuGlobe,
  briefcase: LuBriefcase,
  book: LuBookOpen,
  music: LuMusic,
  shop: LuStore,
  gift: LuGift,
  calendar: LuCalendarDays,
  news: LuNewspaper,
  play: LuPlay,
  heart: LuHeart,
  camera: LuCamera,
  education: LuGraduationCap,
  link: LuLink, // dipakai sebagai fallback kalau key tidak ditemukan
  facebook: CiFacebook,
}

export function getIcon(key) {
  return ICONS[key] || ICONS.link
}
