"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "5", label: "Production Deployments" },
  { value: "∞", label: "Cups of Coffee" },
  { value: "1", label: "Lucas Available" },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#0e2a25" }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          {"Drive new and recurring code with the most flexible Lucas on the market"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center leading-relaxed text-[#a3c4bc]"
        >
          {"Hired Lucases ship faster, debug smarter, are more loyal, and are more likely to make referrals to other talented developers, resulting in more features for less costs. Discover how Lucas can help you build a community of revenue-driving code."}
        </motion.p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: "#1a3c36" }}
            >
              <p className="text-3xl font-bold md:text-4xl" style={{ color: "#4cba6a" }}>{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#7fa89e]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
