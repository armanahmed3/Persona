'use client';

import { useRef, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/titech/Navbar';
import Hero from '@/components/titech/Hero';
import StatsSection from '@/components/titech/StatsSection';
import ServicesSection from '@/components/titech/ServicesSection';
import TechStackSection from '@/components/titech/TechStackSection';
import ProcessSection from '@/components/titech/ProcessSection';
import AboutSection from '@/components/titech/AboutSection';
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
        <Hero onBookClick={scrollToBooking} />
        <StatsSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <AboutSection />
        <CTASection onBookClick={scrollToBooking} />
        <div ref={bookingRef}>
          <BookingForm />
        </div>
      </main>

      <Footer />

      <AIAgentWidget onBookClick={scrollToBooking} />
    </div>
  );
}
