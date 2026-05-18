"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-32 md:pt-24" style={{ backgroundColor: "#0e2a25" }}>
      {/* Tree decorations on the right */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden md:block">
        <div className="flex items-end gap-2">
          <TreeArrow color="#00956d" height={180} delay={0.2} />
          <TreeArrow color="#00956d" height={240} delay={0.4} />
          <TreeArrow color="#4cba6a" height={300} delay={0.6} />
          <TreeArrow color="#66be61" height={200} delay={0.3} />
          <TreeArrow color="#4cba6a" height={260} delay={0.5} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          style={{ lineHeight: 1.15 }}
        >
          {"The world's leading Lucas management platform, helping teams ship 5x more code."}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#a3c4bc] md:text-lg"
        >
          {"Automate your hiring process. Grow your engineering team. Ship better code , all with the most "}
          <strong className="text-white">{"flexible Lucas on the market."}</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="mailto:urenlucas@gmail.com"
            className="inline-block rounded-md px-8 py-3.5 text-sm font-semibold transition-all hover:brightness-110"
            style={{ backgroundColor: "#4cba6a", color: "#0e2a25" }}
          >
            Hire Lucas
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TreeArrow({ color, height, delay }: { color: string; height: number; delay: number }) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <svg width="80" height={height} viewBox={`0 0 80 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d={`M40 0 L70 ${height * 0.35} L55 ${height * 0.35} L55 ${height} L25 ${height} L25 ${height * 0.35} L10 ${height * 0.35} Z`}
          fill={color}
          opacity={0.85}
        />
        <path
          d={`M40 ${height * 0.15} L58 ${height * 0.4} L48 ${height * 0.4} L48 ${height * 0.7} L32 ${height * 0.7} L32 ${height * 0.4} L22 ${height * 0.4} Z`}
          fill={color}
          opacity={0.3}
        />
      </svg>
    </motion.div>
  )
}
