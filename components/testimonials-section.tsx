"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "We replaced our entire engineering department with one Lucas and our deployment frequency went up 400%. HR was confused but the metrics don't lie.",
    author: "JENNIFER M.",
    role: "VP OF ENGINEERING, FORTUNE 500",
    stars: 5,
  },
  {
    quote: "Our company switched from an in-house developer to Lucas because he's extremely easy to work with. We (Management) don't need help from our Product team if we want to change our entire tech stack. Special S/O to Lucas for being awesome.",
    author: "TIEGEN K.",
    role: "RETENTION MARKETING MANAGER",
    stars: 5,
  },
  {
    quote: "I've never seen someone write a multi-tenant architecture while carrying a full engineering course load. My son is truly something else. Very proud. Hire him.",
    author: "LUCAS'S MOM",
    role: "CHIEF EMOTIONAL OFFICER",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#f0f5f3" }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`py-10 ${i > 0 ? "border-t border-[#d0ddd8]" : ""}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} fill="#4cba6a" stroke="#4cba6a" />
                ))}
              </div>
              <div className="flex items-start gap-2">
                <span className="text-5xl font-serif leading-none" style={{ color: "#4cba6a" }}>{"\u201C"}</span>
                <p className="text-lg leading-relaxed md:text-xl" style={{ color: "#1a3c36" }}>
                  {t.quote}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#00956d" }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0e2a25" }}>{t.author}</p>
                  <p className="text-xs" style={{ color: "#5a8a7e" }}>{t.role}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
