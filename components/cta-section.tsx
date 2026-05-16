"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#f0f5f3" }}>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#0e2a25" }}
        >
          {"Ready to grow? Get in touch with Lucas today!"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-8 max-w-xl leading-relaxed"
          style={{ color: "#3d5e56" }}
        >
          {"Available for Fall 2026 co-op. 4 or 8 months (8 preferred). Located in Victoria, BC. Open to hybrid/remote. $30/hr. Ships to production."}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="mailto:urenlucas@gmail.com"
            className="inline-block rounded-md px-10 py-4 text-sm font-semibold transition-all hover:brightness-110"
            style={{ backgroundColor: "#4cba6a", color: "#0e2a25" }}
          >
            Hire Lucas
          </a>
          <a
            href="https://linkedin.com/in/lucasuren"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border-2 px-10 py-4 text-sm font-semibold transition-colors hover:bg-[#0e2a25] hover:text-white"
            style={{ borderColor: "#0e2a25", color: "#0e2a25" }}
          >
            View LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
