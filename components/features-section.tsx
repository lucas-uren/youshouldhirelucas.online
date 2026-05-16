"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, GitBranch, Layers, Bot, Shield, Terminal } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "TypeScript & React Expertise",
    description: "Transform your codebase with a developer fluent in TypeScript, React.js, and Next.js. Lucas has built production client-facing applications and robust internal tools at multiple companies.",
    bullets: [
      "Production-grade React.js and Next.js applications",
      "Type-safe codebases with TypeScript (ES6+)",
      "Responsive UIs with modern CSS frameworks",
      "Component-driven architecture at scale",
    ],
  },
  {
    icon: Database,
    title: "PostgreSQL & Backend Systems",
    description: "Robust backend engineering with Node.js, Express, and PostgreSQL. Lucas designs normalized, multi-tenant database schemas with constraints and indexing for performance and security.",
    bullets: [
      "Normalized database schemas with proper indexing",
      "RESTful API design with layered middleware",
      "JWT authentication and secure session management",
      "Input validation, error handling, and SQL injection prevention",
    ],
  },
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    description: "Lucas led the design and implementation of a multi-tenant architecture enabling multiple organizations to securely operate within a unified system at Salyx Medical.",
    bullets: [
      "Tenant-aware authentication and authorization",
      "Complete data isolation between organizations",
      "Role-based access control (RBAC)",
      "PIPEDA-compliant data handling for healthcare",
    ],
  },
  {
    icon: Bot,
    title: "RAG & AI Integration",
    description: "At Lexiden, Lucas integrated a Retrieval-Augmented Generation chatbot with Pinecone, enabling users to query uploaded legal documents and receive accurate, reference-backed responses.",
    bullets: [
      "RAG chatbot with vector database integration",
      "AI-backed flashcard and quiz features",
      "Document parsing and intelligent retrieval",
      "Production AI pipelines for legal-tech SaaS",
    ],
  },
]

const secondaryFeatures = [
  {
    icon: Cloud,
    title: "AWS & Cloud Infrastructure",
    description: "Deploy and scale with confidence. Experience with AWS, Firebase, Heroku, and Vercel for production environments.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated deployment workflows with security best practices including password hashing and secure session management.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "PIPEDA-compliant systems for healthcare. SQL injection prevention, input sanitization, and secure credential storage.",
  },
  {
    icon: Terminal,
    title: "Full Stack Delivery",
    description: "From Python and Flask backends to React frontends — Lucas ships complete features, not just components.",
  },
]

export function FeaturesSection() {
  return (
    <>
      {/* Main features - alternating layout like SaaSquatch */}
      <section id="skills" className="py-16 md:py-24" style={{ backgroundColor: "#f0f5f3" }}>
        <div className="mx-auto max-w-7xl px-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col items-center gap-12 py-16 md:py-20 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${i > 0 ? "border-t border-[#d0ddd8]" : ""}`}
            >
              {/* Text side */}
              <div className="flex-1">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: "#dceee8" }}>
                  <feature.icon size={16} style={{ color: "#00956d" }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#00956d" }}>
                    {"Feature"}
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "#0e2a25" }}>
                  {feature.title}
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: "#3d5e56" }}>
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm" style={{ color: "#3d5e56" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#4cba6a" }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side - code-style card */}
              <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-xl" style={{ backgroundColor: "#1a2332" }}>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: "#151c28" }}>
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#27ca40" }} />
                    <span className="ml-2 text-xs text-[#6b7a8d]">lucas-{feature.title.toLowerCase().replace(/[^a-z]/g, "-")}.ts</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <CodeBlock index={i} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary features grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0e2a25" }}>
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-center text-2xl font-bold tracking-tight text-white md:text-3xl"
          >
            {"Create winning codebases, ship more features."}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center leading-relaxed text-[#a3c4bc]"
          >
            {"The Lucas Platform empowers teams to build customized and fully-automated engineering pipelines that deliver the right code, in the right place, at the right time."}
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {secondaryFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#1a3c36" }}
              >
                <div className="mb-4 inline-flex rounded-lg p-2.5" style={{ backgroundColor: "#0e2a25" }}>
                  <f.icon size={22} style={{ color: "#4cba6a" }} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#8ab0a6]">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function CodeBlock({ index }: { index: number }) {
  const blocks = [
    // TypeScript & React
    <>
      <div><span className="text-[#c678dd]">import</span><span className="text-[#abb2bf]"> {"{ "}</span><span className="text-[#e5c07b]">Lucas</span><span className="text-[#abb2bf]">{" }"}</span><span className="text-[#c678dd]"> from</span><span className="text-[#98c379]"> &apos;@impact/hire&apos;</span></div>
      <div className="mt-2"><span className="text-[#c678dd]">const</span><span className="text-[#61afef]"> engineer</span><span className="text-[#abb2bf]"> = </span><span className="text-[#c678dd]">new</span><span className="text-[#e5c07b]"> Lucas</span><span className="text-[#abb2bf]">({"{"}</span></div>
      <div><span className="text-[#abb2bf]">  skills: [</span><span className="text-[#98c379]">&apos;React&apos;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&apos;TypeScript&apos;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&apos;Next.js&apos;</span><span className="text-[#abb2bf]">],</span></div>
      <div><span className="text-[#abb2bf]">  experience: </span><span className="text-[#d19a66]">3</span><span className="text-[#abb2bf]">,</span></div>
      <div><span className="text-[#abb2bf]">  available: </span><span className="text-[#d19a66]">true</span></div>
      <div><span className="text-[#abb2bf]">{"}"})</span></div>
    </>,
    // PostgreSQL
    <>
      <div><span className="text-[#c678dd]">CREATE TABLE</span><span className="text-[#61afef]"> lucas_skills</span><span className="text-[#abb2bf]"> (</span></div>
      <div><span className="text-[#abb2bf]">  id </span><span className="text-[#e5c07b]">SERIAL PRIMARY KEY</span><span className="text-[#abb2bf]">,</span></div>
      <div><span className="text-[#abb2bf]">  skill </span><span className="text-[#e5c07b]">VARCHAR</span><span className="text-[#abb2bf]">(100),</span></div>
      <div><span className="text-[#abb2bf]">  level </span><span className="text-[#e5c07b]">VARCHAR</span><span className="text-[#abb2bf]">(20)</span></div>
      <div><span className="text-[#abb2bf]">    </span><span className="text-[#c678dd]">DEFAULT</span><span className="text-[#98c379]"> &apos;exceptional&apos;</span></div>
      <div><span className="text-[#abb2bf]">);</span></div>
    </>,
    // Multi-tenant
    <>
      <div><span className="text-[#c678dd]">class</span><span className="text-[#e5c07b]"> TenantMiddleware</span><span className="text-[#abb2bf]"> {"{"}</span></div>
      <div><span className="text-[#abb2bf]">  </span><span className="text-[#c678dd]">async</span><span className="text-[#61afef]"> resolve</span><span className="text-[#abb2bf]">(req) {"{"}</span></div>
      <div><span className="text-[#abb2bf]">    </span><span className="text-[#c678dd]">const</span><span className="text-[#abb2bf]"> tenant = </span><span className="text-[#c678dd]">await</span></div>
      <div><span className="text-[#abb2bf]">      lucas.</span><span className="text-[#61afef]">isolateData</span><span className="text-[#abb2bf]">(req)</span></div>
      <div><span className="text-[#abb2bf]">    </span><span className="text-[#c678dd]">return</span><span className="text-[#abb2bf]"> tenant.</span><span className="text-[#61afef]">secure</span><span className="text-[#abb2bf]">()</span></div>
      <div><span className="text-[#abb2bf]">  {"}"}</span></div>
      <div><span className="text-[#abb2bf]">{"}"}</span></div>
    </>,
    // RAG
    <>
      <div><span className="text-[#c678dd]">const</span><span className="text-[#61afef]"> ragBot</span><span className="text-[#abb2bf]"> = lucas.</span><span className="text-[#61afef]">createRAG</span><span className="text-[#abb2bf]">({"{"}</span></div>
      <div><span className="text-[#abb2bf]">  vectorDB: </span><span className="text-[#98c379]">&apos;pinecone&apos;</span><span className="text-[#abb2bf]">,</span></div>
      <div><span className="text-[#abb2bf]">  documents: legalDocs,</span></div>
      <div><span className="text-[#abb2bf]">  accuracy: </span><span className="text-[#98c379]">&apos;reference-backed&apos;</span></div>
      <div><span className="text-[#abb2bf]">{"}"})</span></div>
      <div className="mt-1"><span className="text-[#5c6370]">{"// => 100% accurate responses"}</span></div>
    </>,
  ]
  return blocks[index] || blocks[0]
}
