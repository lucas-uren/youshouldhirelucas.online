"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "#0e2a25" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3" aria-label="LucasUren Logo">
          <LucasLogo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="main navigation">
          <NavItem label="Skills" />
          <NavItem label="Experience" />
          <NavItem label="Education" />
          <a href="https://github.com/lucas-uren" target="_blank" rel="noopener noreferrer" className="text-sm text-[#c5d5d0] transition-colors hover:text-white">
            GitHub
          </a>
          <a
            href="mailto:urenlucas@gmail.com"
            className="rounded-md px-6 py-2.5 text-sm font-semibold transition-all hover:brightness-110"
            style={{ backgroundColor: "#4cba6a", color: "#0e2a25" }}
          >
            Hire Lucas
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
            style={{ backgroundColor: "#0a1f1b" }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <a href="#skills" className="text-sm text-[#c5d5d0]" onClick={() => setMobileOpen(false)}>Skills</a>
              <a href="#experience" className="text-sm text-[#c5d5d0]" onClick={() => setMobileOpen(false)}>Experience</a>
              <a href="#education" className="text-sm text-[#c5d5d0]" onClick={() => setMobileOpen(false)}>Education</a>
              <a href="https://github.com/lucas-uren" target="_blank" rel="noopener noreferrer" className="text-sm text-[#c5d5d0]">GitHub</a>
              <a
                href="mailto:urenlucas@gmail.com"
                className="inline-block rounded-md px-6 py-2.5 text-center text-sm font-semibold"
                style={{ backgroundColor: "#4cba6a", color: "#0e2a25" }}
              >
                Hire Lucas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({ label }: { label: string }) {
  return (
    <a href={`#${label.toLowerCase()}`} className="flex items-center gap-1 text-sm text-[#c5d5d0] transition-colors hover:text-white">
      {label}
    </a>
  )
}

function LucasLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="40" height="40" viewBox="0 0 204 215" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M101.733 0C99.0663 0 97.733 0.53335 91.0663 5.60002L81.1997 13.2L57.8663 30.9333C52.6663 34.9333 51.5997 42.2667 55.5997 47.4667C59.5997 52.6667 66.933 53.7333 72.133 49.7333L78.6663 44.6667C82.3997 41.7333 87.8663 42.5333 90.7997 46.2667C93.733 50 92.933 55.4667 89.1997 58.4L85.4663 61.2L74.3997 69.6L51.0663 87.6C45.8663 91.6 44.7997 98.9333 48.7997 104.133C52.7997 109.333 60.133 110.4 65.333 106.4L77.8663 96.9333C81.5997 94 87.0663 94.8 89.9997 98.5333C92.933 102.267 92.133 107.733 88.3997 110.667L80.3997 116.8L45.9997 142.933C40.7997 146.933 39.733 154.267 43.733 159.467C47.733 164.667 55.0663 165.733 60.2663 161.733L77.0663 148.933C80.7997 146 86.2663 146.8 89.1997 150.533C90.3997 152.133 90.933 153.867 90.933 155.733V200.667C50.2663 195.467 18.7997 160.667 18.7997 118.533C18.7997 94.9333 28.933 72.4 46.533 56.8L47.1997 56.1333L46.3997 55.2C46.133 54.9333 45.8663 54.6667 45.733 54.4C43.5997 51.7333 42.133 48.5333 41.4663 45.2L41.1997 43.6L39.9997 44.6667C17.9997 63.0667 5.33301 90 5.33301 118.667C5.33301 171.867 48.533 215.067 101.733 215.067V0Z" fill="#00956D"/>
        <path d="M163.467 44.6662L162.267 43.5995L162 45.1995C161.333 48.5328 159.867 51.7328 157.733 54.3995C157.467 54.6662 157.333 54.9328 157.067 55.1995L156.267 56.1328L156.933 56.7995C174.533 72.5328 184.667 95.0662 184.667 118.533C184.667 140.666 176 161.466 160.4 177.066C147.333 190.133 130.533 198.266 112.533 200.666V155.733C112.533 153.866 113.067 152.133 114.267 150.533C117.2 146.8 122.533 145.999 126.4 148.933L143.2 161.733C148.4 165.733 155.867 164.666 159.733 159.466C163.733 154.266 162.667 146.799 157.467 142.933L123.067 116.799L115.067 110.666C111.333 107.733 110.533 102.399 113.467 98.5328C116.4 94.7995 121.733 93.9995 125.6 96.9328L138.133 106.399C143.333 110.399 150.8 109.333 154.667 104.133C158.667 98.9328 157.6 91.4662 152.4 87.5995L118 61.4662L114.267 58.6662C110.533 55.7328 109.733 50.3995 112.667 46.5328C115.6 42.7995 120.933 41.9995 124.8 44.9328L131.333 49.9995C136.533 53.9995 144 52.9328 147.867 47.7328C151.867 42.5328 150.8 35.0662 145.6 31.1995L122.267 13.4662L112.4 5.73283C105.733 0.666162 104.4 0.132812 101.733 0.132812V215.066C154.933 215.066 198.133 171.866 198.133 118.666C198.133 89.9995 185.467 63.0662 163.467 44.6662Z" fill="#66BE61"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight tracking-tight text-white">lucasuren</span>
        <span className="text-[10px] leading-tight tracking-wider text-[#7fa89e]">hire me impact.com</span>
      </div>
    </div>
  )
}
