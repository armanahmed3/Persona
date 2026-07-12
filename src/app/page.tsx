'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/titech/Navbar';
import Hero from '@/components/titech/Hero';
import ClientsMarquee from '@/components/titech/ClientsMarquee';
import StatsSection from '@/components/titech/StatsSection';
import ServicesSection from '@/components/titech/ServicesSection';
import WhyChooseUsSection from '@/components/titech/WhyChooseUsSection';
import PortfolioSection from '@/components/titech/PortfolioSection';
import TechStackSection from '@/components/titech/TechStackSection';
import ProcessSection from '@/components/titech/ProcessSection';
import TestimonialsSection from '@/components/titech/TestimonialsSection';
import PricingSection from '@/components/titech/PricingSection';
import TeamSection from '@/components/titech/TeamSection';
import AwardsSection from '@/components/titech/AwardsSection';
import AboutSection from '@/components/titech/AboutSection';
import BlogSection from '@/components/titech/BlogSection';
import FAQSection from '@/components/titech/FAQSection';
import CTASection from '@/components/titech/CTASection';
import Footer from '@/components/titech/Footer';
import CinematicOverlay from '@/components/titech/CinematicOverlay';
import BookingForm from '@/components/titech/BookingForm';

// Load AI agent widget only on client (avoids SSR issues)
const AIAgentWidget = dynamic(() => import('@/components/titech/AIAgentWidget'), {
  ssr: false,
});

export default function Home() {
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <CinematicOverlay />

      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1 relative z-10">
        {/* 1. Cinematic 3D hero */}
        <Hero onBookClick={scrollToBooking} />

        {/* 2. Trusted-by client marquee */}
        <ClientsMarquee />

        {/* 3. Animated stat counters */}
        <StatsSection />

        {/* 4. Trending + all services with modal details */}
        <ServicesSection />

        {/* 5. Why choose us — feature grid */}
        <WhyChooseUsSection />

        {/* 6. Portfolio showcase with filter + 3D tilt */}
        <PortfolioSection />

        {/* 7. Tech stack marquee */}
        <TechStackSection />

        {/* 8. 4-step process */}
        <ProcessSection />

        {/* 9. Testimonials carousel */}
        <TestimonialsSection />

        {/* 10. Pricing packages */}
        <PricingSection onBookClick={scrollToBooking} />

        {/* 11. Team flip cards */}
        <TeamSection />

        {/* 12. Awards ticker */}
        <AwardsSection />

        {/* 13. About — US/UK/UAE offices */}
        <AboutSection />

        {/* 14. Blog/insights preview */}
        <BlogSection />

        {/* 15. FAQ accordion */}
        <FAQSection onBookClick={scrollToBooking} />

        {/* 16. Cinematic CTA */}
        <CTASection onBookClick={scrollToBooking} />

        {/* 17. Booking form -> formsubmit.co */}
        <div ref={bookingRef}>
          <BookingForm />
        </div>
      </main>

      <Footer />

      <AIAgentWidget onBookClick={scrollToBooking} />
    </div>
  );
}
