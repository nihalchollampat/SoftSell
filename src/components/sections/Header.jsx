
import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-8 md:px-16 glassmorphism"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" onClick={() => scrollToSection('how-it-works')}>How It Works</Button>
          <Button variant="ghost" onClick={() => scrollToSection('why-choose-us')}>Why Us</Button>
          <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>Testimonials</Button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
  