
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';

const licenseTypes = [
  'Productivity Suite (e.g., Microsoft Office)',
  'Design Software (e.g., Adobe Creative Cloud)',
  'Development Tools (e.g., IDEs, Compilers)',
  'Operating System (e.g., Windows Server)',
  'CRM/ERP Software',
  'Security Software',
  'Virtualization Software',
  'Database Software',
  'Other Business Applications',
];

export function ContactFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, licenseType: value }));
     if (errors.licenseType) {
      setErrors((prev) => ({ ...prev, licenseType: null }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.company.trim()) tempErrors.company = 'Company name is required.';
    if (!formData.licenseType) tempErrors.licenseType = 'Please select a license type.';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters long.';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data Submitted:', formData);
      toast({
        title: 'Quote Request Submitted!',
        description: "Thank you! We've received your request and our team will contact you shortly with a valuation.",
        variant: 'default',
        className: 'bg-primary text-primary-foreground'
      });
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
    } else {
      toast({
        title: 'Oops! Something is missing.',
        description: 'Please review the form and fill in all required fields correctly.',
        variant: 'destructive',
      });
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-background dark:bg-slate-950"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-2xl bg-card dark:bg-slate-800/60 border-border/70">
          <CardHeader className="text-center pt-8 pb-6">
            <CardTitle className="text-4xl font-bold">Request a Free Quote</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Ready to sell your licenses? Fill out the form below, and our experts will provide a no-obligation valuation.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Alex Johnson" className={errors.name ? 'border-destructive focus-visible:ring-destructive' : ''} />
                  {errors.name && <p className="text-xs text-destructive pt-1">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="e.g., alex@company.com" className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''} />
                  {errors.email && <p className="text-xs text-destructive pt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="e.g., Your Company LLC" className={errors.company ? 'border-destructive focus-visible:ring-destructive' : ''} />
                {errors.company && <p className="text-xs text-destructive pt-1">{errors.company}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="licenseType">Primary License Type</Label>
                <Select name="licenseType" value={formData.licenseType} onValueChange={handleSelectChange}>
                  <SelectTrigger id="licenseType" className={errors.licenseType ? 'border-destructive focus-visible:ring-destructive' : ''}>
                    <SelectValue placeholder="Select the main type of license" />
                  </SelectTrigger>
                  <SelectContent>
                    {licenseTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.licenseType && <p className="text-xs text-destructive pt-1">{errors.licenseType}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">License Details & Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please list the software, versions, quantities, and any other relevant details about the licenses you wish to sell..." rows={5} className={errors.message ? 'border-destructive focus-visible:ring-destructive' : ''} />
                {errors.message && <p className="text-xs text-destructive pt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-base">
                Send Request <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
  