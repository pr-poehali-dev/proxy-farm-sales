import HeroSection from '@/components/sections/HeroSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PartnershipStepsSection from '@/components/sections/PartnershipStepsSection'
import ClientsSection from '@/components/sections/ClientsSection'
import PricingSection from '@/components/sections/PricingSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import ContactSection from '@/components/sections/ContactSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PartnershipStepsSection />
      <ClientsSection />
      <PricingSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  )
}

export default Index