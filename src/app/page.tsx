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
import Parallax4DSection from '@/components/titech/Parallax4DSection';
import SkillsSection from '@/components/titech/SkillsSection';
import ProcessSection from '@/components/titech/ProcessSection';
import TestimonialsSection from '@/components/titech/TestimonialsSection';
import ComparisonSection from '@/components/titech/ComparisonSection';
import PricingSection from '@/components/titech/PricingSection';
import TeamSection from '@/components/titech/TeamSection';
import AwardsSection from '@/components/titech/AwardsSection';
import AboutSection from '@/components/titech/AboutSection';
import BlogSection from '@/components/titech/BlogSection';
import FAQSection from '@/components/titech/FAQSection';
import CTASection from '@/components/titech/CTASection';
import Footer from '@/components/titech/Footer';
import CinematicOverlay from '@/components/titech/CinematicOverlay';
import ScrollProgress from '@/components/titech/ScrollProgress';
import LoadingScreen from '@/components/titech/LoadingScreen';
import CustomCursor from '@/components/titech/CustomCursor';
import BookingForm from '@/components/titech/BookingForm';
import TimelineSection from '@/components/titech/TimelineSection';
import MetricsBanner from '@/components/titech/MetricsBanner';
import NewsletterSection from '@/components/titech/NewsletterSection';

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
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
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

        {/* 8. Parallax 4D cinematic section */}
        <Parallax4DSection />

        {/* 9. Skills cloud with capability rings */}
        <SkillsSection />

        {/* 10. 4-step process */}
        <ProcessSection />

        {/* 11. Testimonials carousel */}
        <TestimonialsSection />

        {/* 12. Comparison: Titech vs others */}
        <ComparisonSection />

        {/* 13. Interactive metrics banner */}
        <MetricsBanner />

        {/* 14. Pricing packages */}
        <PricingSection onBookClick={scrollToBooking} />

        {/* 15. Team flip cards */}
        <TeamSection />

        {/* 16. Awards ticker */}
        <AwardsSection />

        {/* 17. Timeline — our journey */}
        <TimelineSection />

        {/* 18. About — US/UK/UAE offices */}
        <AboutSection />

        {/* 19. Blog/insights preview */}
        <BlogSection />

        {/* 20. FAQ accordion */}
        <FAQSection onBookClick={scrollToBooking} />

        {/* 21. Cinematic CTA */}
        <CTASection onBookClick={scrollToBooking} />

        {/* 22. Booking form -> formsubmit.co */}
        <div ref={bookingRef}>
          <BookingForm />
        </div>

        {/* 23. Newsletter -> formsubmit.co */}
        <NewsletterSection />
      </main>

      <Footer />

      <AIAgentWidget onBookClick={scrollToBooking} />
    </div>
  );
}
