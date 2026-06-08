import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { BIO } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fill out all required fields correctly', 'error');
      return;
    }

    setStatus('sending');

    // If EmailJS keys are configured, attempt real transmission
    if (
      EMAILJS_PUBLIC_KEY && 
      EMAILJS_PUBLIC_KEY !== 'your_public_key' && 
      EMAILJS_SERVICE_ID !== 'service_portfolio'
    ) {
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        
        setStatus('success');
        showToast('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error('EmailJS Error:', err);
        setStatus('error');
        showToast('Failed to send message via EmailJS. Falling back to local save.', 'error');
        saveToLocalStorageFallback();
      }
    } else {
      // Simulate API network call delay & fallback to local storage
      setTimeout(() => {
        saveToLocalStorageFallback();
      }, 1500);
    }
  };

  const saveToLocalStorageFallback = () => {
    try {
      const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
      contacts.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('portfolio_contacts', JSON.stringify(contacts));
      
      console.log('Contact form local fallback save successful:', formData);
      setStatus('success');
      showToast('Message saved successfully! (Simulated backend) 🚀');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      showToast('Something went wrong. Please try again.', 'error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Let's <span className="bg-grad bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left Side: Contact Information cards */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <ScrollReveal delay={0.1}>
              <p className="text-textCol2 text-[13.5px] leading-relaxed mb-6">
                I am always open to discussing new projects, placement opportunities, collaborations, or cloud architecture topics. Drop me a line!
              </p>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={0.15}>
              <a href={`mailto:${BIO.email}`} className="block">
                <GlassCard hover={true} className="p-4 border-borderCol hover:border-accent flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-grad flex items-center justify-center text-white text-[14px]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[10px] text-textCol2 font-bold uppercase tracking-wider">Email</div>
                    <div className="text-[13px] font-bold text-textCol">{BIO.email}</div>
                  </div>
                </GlassCard>
              </a>
            </ScrollReveal>

            {/* LinkedIn Card */}
            <ScrollReveal delay={0.2}>
              <a href={BIO.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                <GlassCard hover={true} className="p-4 border-borderCol hover:border-accent flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-grad flex items-center justify-center text-white text-[14px]">
                    <FaLinkedin />
                  </div>
                  <div>
                    <div className="text-[10px] text-textCol2 font-bold uppercase tracking-wider">LinkedIn</div>
                    <div className="text-[13px] font-bold text-textCol">linkedin.com/in/prateek-yadav</div>
                  </div>
                </GlassCard>
              </a>
            </ScrollReveal>

            {/* GitHub Card */}
            <ScrollReveal delay={0.25}>
              <a href={BIO.github} target="_blank" rel="noopener noreferrer" className="block">
                <GlassCard hover={true} className="p-4 border-borderCol hover:border-accent flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-grad flex items-center justify-center text-white text-[14px]">
                    <FaGithub />
                  </div>
                  <div>
                    <div className="text-[10px] text-textCol2 font-bold uppercase tracking-wider">GitHub</div>
                    <div className="text-[13px] font-bold text-textCol">github.com/prateekyadav2003</div>
                  </div>
                </GlassCard>
              </a>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal delay={0.3}>
              <GlassCard hover={false} className="p-4 border-borderCol flex items-center gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-grad flex items-center justify-center text-white text-[14px]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-[10px] text-textCol2 font-bold uppercase tracking-wider">Location</div>
                  <div className="text-[13px] font-bold text-textCol">{BIO.location}</div>
                </div>
              </GlassCard>
            </ScrollReveal>

          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-3 text-left">
            <ScrollReveal delay={0.2}>
              <form 
                ref={formRef} 
                onSubmit={handleSubmit}
                className="glass-effect border border-borderCol rounded-[20px] p-6 md:p-8 space-y-5 transition-colors duration-300"
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[11px] font-bold text-textCol2 uppercase tracking-wider">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full bg-inputBg border border-inputBorder rounded-[11px] py-3 px-4 text-[13px] text-textCol outline-none transition-all duration-200 focus:border-accent focus:bg-glass"
                  />
                  {errors.name && <p id="name-error" className="text-[11px] text-red-500 font-bold" role="alert">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[11px] font-bold text-textCol2 uppercase tracking-wider">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full bg-inputBg border border-inputBorder rounded-[11px] py-3 px-4 text-[13px] text-textCol outline-none transition-all duration-200 focus:border-accent focus:bg-glass"
                  />
                  {errors.email && <p id="email-error" className="text-[11px] text-red-500 font-bold" role="alert">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[11px] font-bold text-textCol2 uppercase tracking-wider">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    aria-required="true"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className="w-full bg-inputBg border border-inputBorder rounded-[11px] py-3 px-4 text-[13px] text-textCol outline-none transition-all duration-200 focus:border-accent focus:bg-glass"
                  />
                  {errors.subject && <p id="subject-error" className="text-[11px] text-red-500 font-bold" role="alert">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[11px] font-bold text-textCol2 uppercase tracking-wider">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full bg-inputBg border border-inputBorder rounded-[11px] py-3 px-4 text-[13px] text-textCol outline-none transition-all duration-200 resize-none focus:border-accent focus:bg-glass"
                  />
                  {errors.message && <p id="message-error" className="text-[11px] text-red-500 font-bold" role="alert">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full py-3.5" 
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <FaPaperPlane size={12} /> Send Message
                    </>
                  )}
                </Button>

              </form>
            </ScrollReveal>
          </div>

        </div>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-[2100] flex items-center gap-2.5 py-3 px-5 rounded-[12px] border shadow-2xl text-[12px] font-bold text-white ${
              toast.type === 'success' 
                ? 'bg-green-600 border-green-500' 
                : 'bg-red-600 border-red-500'
            }`}
          >
            {toast.type === 'success' ? (
              <FaCheckCircle size={15} />
            ) : (
              <FaExclamationCircle size={15} />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;
