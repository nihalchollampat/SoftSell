
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-gradient-to-br from-background via-secondary to-background dark:from-background dark:via-slate-900 dark:to-background">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="70" height="70" patternTransform="scale(1) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,0)"/><path d="M35 0L70 35L35 70L0 35Z" fill="hsla(var(--primary), 0.5)"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"/></svg>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-heading">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Unlock Value</span> From Your Unused Software Licenses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-sans">
            SoftSell helps you easily convert your surplus software licenses into cash. Get fair valuations and a hassle-free selling experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105">
              Get a Quote Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-lg hover:shadow-xl transform hover:scale-105 border-2">
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img 
            class="mx-auto rounded-xl shadow-2xl w-full max-w-4xl aspect-[16/8] object-cover border-4 border-muted/30"
            alt="Modern dashboard interface showing license management and analytics"
           src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" />
        </motion.div>
      </div>
    </section>
  );
}
  