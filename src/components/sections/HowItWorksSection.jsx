
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, DollarSign, CheckCircle, ArrowRightCircle } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="h-12 w-12 text-primary mb-4" />,
    title: '1. Submit License Info',
    description: 'Securely provide your software license details through our intuitive online portal.',
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary mb-4" />,
    title: '2. Receive Valuation',
    description: 'Our advanced algorithms assess your licenses and deliver a fair market valuation promptly.',
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-primary mb-4" />,
    title: '3. Get Paid Fast',
    description: 'Once you accept the offer, receive your payment quickly and securely through trusted channels.',
  },
];

export function HowItWorksSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="how-it-works" className="py-20 bg-secondary dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Selling your software licenses is a breeze with SoftSell. Our straightforward three-step process makes it simple.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 items-stretch relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col z-10"
            >
              <Card className="flex-grow text-center p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-background dark:bg-card glassmorphism">
                <CardHeader className="items-center">
                  {step.icon}
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                 <motion.div 
                    className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                    style={{ left: `calc(${(index + 1) * 33.3333}% - 2rem)`, width: '4rem', zIndex: 0 }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                 >
                   <ArrowRightCircle className="h-10 w-10 text-primary/70 dark:text-primary/50" />
                 </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  