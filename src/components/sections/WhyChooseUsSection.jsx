
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, TrendingUp, Zap, KeyRound as UsersRound } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'Maximum Value',
    description: 'Our market analysis ensures you receive top competitive offers for your software licenses.',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: 'Effortless Process',
    description: 'Experience a fast, simple, and completely hassle-free license selling journey with us.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Ironclad Security',
    description: 'We protect your data and transactions using robust, industry-leading security protocols.',
  },
  {
    icon: <UsersRound className="h-10 w-10 text-accent" />,
    title: 'Dedicated Support',
    description: 'Our expert team provides personalized assistance throughout every step of the selling process.',
  },
];

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-background dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Why Choose SoftSell?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          We are dedicated to offering an unparalleled experience and optimal value when you sell your software licenses.
        </motion.p>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 bg-card dark:bg-slate-800/60 border-border/70 hover:border-primary/50">
                <CardHeader className="items-center pt-8">
                  <div className="p-4 bg-accent/10 dark:bg-accent/20 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-5 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
  