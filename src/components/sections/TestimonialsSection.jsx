
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'IT Director',
    company: 'AlphaTech Solutions',
    review: "SoftSell transformed how we manage surplus licenses. The platform is intuitive, valuations are fair, and the entire process was remarkably efficient. A game-changer for us!",
    avatarText: 'SC',
  },
  {
    name: 'Michael B.',
    role: 'Finance Manager',
    company: 'Innovate Global',
    review: "Initially, we were cautious, but SoftSell's professionalism and transparent process won us over. We recovered significant value from licenses we thought were sunk costs. Highly recommended!",
    avatarText: 'MB',
  },
];

export function TestimonialsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Trusted by Businesses
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Discover why companies choose SoftSell to monetize their unused software assets effectively and securely.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full flex flex-col bg-background dark:bg-card glassmorphism shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center text-xl font-semibold mr-4 shadow-md">
                      {testimonial.avatarText}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role} at {testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative pt-2">
                  <Quote className="absolute top-2 left-0 h-8 w-8 text-primary/20 dark:text-primary/30 transform -translate-x-2 -translate-y-2" />
                  <p className="text-foreground/80 dark:text-foreground/70 italic text-base leading-relaxed pl-5">
                    {testimonial.review}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  