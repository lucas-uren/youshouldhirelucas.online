import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoStrip } from "@/components/logo-strip"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { ExperienceSection } from "@/components/experience-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoStrip />
      <FeaturesSection />
      <TestimonialsSection />
      <StatsSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
