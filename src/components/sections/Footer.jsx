
import React from 'react';
import { Logo } from '@/components/Logo';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-black/90 py-12 border-t-4 border-primary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-slate-400 leading-relaxed">
              SoftSell offers a streamlined, secure, and profitable platform for reselling your unused software licenses. Convert surplus digital assets into valuable capital with ease.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition-colors duration-200">How It Works</button></li>
              <li><button onClick={() => scrollToSection('why-choose-us')} className="hover:text-primary transition-colors duration-200">Why Choose Us</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors duration-200">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors duration-200">Get a Quote</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-primary transition-colors duration-200"><Twitter size={22}/></a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors duration-200"><Linkedin size={22}/></a>
              <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-primary transition-colors duration-200"><Github size={22}/></a>
            </div>
            <p className="text-sm text-slate-400">
              <a href="mailto:info@softsell.com" className="flex items-center hover:text-primary transition-colors duration-200">
                <Mail size={18} className="mr-2"/> info@softsell.com
              </a>
            </p>
            <p className="text-sm text-slate-400 mt-2">123 Software Lane, Tech City, USA</p>
          </div>
        </div>
        <Separator className="bg-slate-700/50 my-8" />
        <div className="text-center text-sm text-slate-500">
          <p>&copy; {currentYear} SoftSell Technologies. All rights reserved. (Fictional Company)</p>
          <p className="mt-1">Web Application by Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
}
  