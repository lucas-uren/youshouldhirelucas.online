"use client"

import { motion } from "framer-motion"

const logos = [
  "Salyx Medical",
  "Lexiden",
  "University of Victoria",
  "My Mom",
]

export function LogoStrip() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0a1f1b" }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#7fa89e]"
      >
        {"Lucas has helped power the world's fastest growing organizations"}
      </motion.p>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 md:gap-14">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <span className="text-lg font-bold tracking-tight text-[#5a8a7e] md:text-xl">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
