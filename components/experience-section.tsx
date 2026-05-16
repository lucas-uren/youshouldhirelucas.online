"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer (Part-Time)",
    company: "Salyx Medical Inc.",
    location: "Victoria, BC (Remote)",
    period: "Oct. 2024 - Present",
    highlights: [
      "Head developer for core web platform with role-based access control and JWT auth",
      "Led multi-tenant architecture design for secure multi-org operation",
      "PIPEDA-compliant data handling for healthcare",
      "Delivered all of this while carrying a full engineering course load",
    ],
  },
  {
    title: "Full Stack Software Developer (Co-op)",
    company: "Lexiden Inc.",
    location: "Toronto, ON (Remote)",
    period: "Jan. 2024 - Aug. 2024",
    highlights: [
      "Integrated RAG chatbot with Pinecone for legal document queries",
      "Built full-stack features for legal-tech SaaS with React, Next.js, Node.js",
      "Architected scalable backends with Python, Flask, PostgreSQL, and AWS",
    ],
  },
  {
    title: "Front End Software Developer (Part-Time)",
    company: "NoteNudge Ltd.",
    location: "Victoria, BC",
    period: "Dec. 2023 - May 2024",
    highlights: [
      "Designed responsive landing page and dashboard with React.js and Next.js",
      "Developed AI-backed flashcard and practice quiz features",
      "Built and integrated API routes using Firebase; deployed on Vercel",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24" style={{ backgroundColor: "#0e2a25" }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: "#1a3c36", color: "#4cba6a" }}>
            <Briefcase size={14} />
            Deployment History
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          {"Learn how Lucas acquired production experience at an unprecedented rate."}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center leading-relaxed text-[#a3c4bc]"
        >
          {"Find out how this software engineering student uses co-ops to ship real products while maintaining a full course load."}
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl p-6 md:p-8"
              style={{ backgroundColor: "#1a3c36" }}
            >
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <p className="text-sm font-medium" style={{ color: "#4cba6a" }}>{exp.company}</p>
                  <p className="text-xs text-[#7fa89e]">{exp.location}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#7fa89e]">
                  <Calendar size={12} />
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#a3c4bc]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#4cba6a" }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl p-6 text-center md:p-8"
          style={{ backgroundColor: "#1a3c36" }}
        >
          <GraduationCap size={32} className="mx-auto mb-3" style={{ color: "#4cba6a" }} />
          <h3 className="text-lg font-bold text-white">University of Victoria</h3>
          <p className="text-sm" style={{ color: "#4cba6a" }}>Bachelor of Software Engineering (5th Year)</p>
          <p className="text-xs text-[#7fa89e]">2021 - Present &bull; Victoria, BC</p>
        </motion.div>
      </div>
    </section>
  )
}
