
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { Footer } from '@/components/sections/Footer';
import ChatWidget from '@/components/ChatWidget';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="softsell-theme">
      <AnimatePresence>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow pt-[68px]"> {/* Adjusted for new header height */}
            <HeroSection />
            <HowItWorksSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <ContactFormSection />
          </main>
          <Footer />
          <Toaster />
          <ChatWidget />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
  