import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaDownload, FaTimes, FaAward } from 'react-icons/fa';
import { CERTIFICATES } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const modalRef = useRef(null);

  const categories = ['All', 'Cloud', 'Database', 'Data', 'Security'];

  // Focus trap for modal
  useEffect(() => {
    if (selectedCert && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTab = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      firstElement?.focus();
      document.addEventListener('keydown', handleTab);

      return () => {
        document.removeEventListener('keydown', handleTab);
      };
    }
  }, [selectedCert]);

  const filteredCertificates = activeFilter === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter(cert => cert.category === activeFilter);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            My Credentials
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Certifi<span className="bg-grad bg-clip-text text-transparent">cations</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-8"></div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 mb-10 text-left">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`py-1.5 px-4 rounded-[20px] text-[12px] font-[600] border transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-accent border-accent text-white shadow-shadow'
                    : 'bg-glass2 border-borderCol2 text-textCol2 hover:text-textCol hover:border-textCol'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="h-full"
              >
                <GlassCard 
                  className="h-full border-borderCol hover:border-accent p-6 flex flex-col justify-between relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-grad before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  
                  {/* Top: Icon & Details */}
                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-12 h-12 min-w-[48px] rounded-[13px] bg-grad flex items-center justify-center text-[22px] text-white shadow-[0_4px_14px_rgba(108,99,255,0.3)]">
                      {cert.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[13.5px] font-bold text-textCol leading-snug">{cert.title}</h3>
                      <div className="text-[11.5px] text-accent font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tags & CTA */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-accent/10 border border-accent/25 text-accent rounded-[6px] py-0.5 px-2.5 text-[10px] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full text-center border border-borderCol2 bg-glass2 hover:bg-grad hover:text-white hover:border-transparent text-textCol py-2 px-1 rounded-[10px] text-[11.5px] font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FaEye size={12} /> Preview Certificate
                    </button>
                  </div>

                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div 
              className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                aria-hidden="true"
              />

              {/* Modal Card content */}
              <motion.div 
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="bg-bg2 border border-borderCol rounded-[24px] p-6 max-w-4xl w-full relative z-10 shadow-2xl flex flex-col justify-between max-h-[90vh] text-left transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 border-b border-borderCol pb-4 mb-4">
                  <div>
                    <h3 id="cert-modal-title" className="text-[15px] font-extrabold text-textCol flex items-center gap-2">
                      <FaAward className="text-accent" /> {selectedCert.title}
                    </h3>
                    <p className="text-[12px] text-textCol2 font-[500] mt-0.5">{selectedCert.issuer}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate preview"
                    className="p-1.5 rounded-full hover:bg-glass border border-transparent hover:border-borderCol text-textCol2 hover:text-textCol transition-all duration-200 cursor-pointer"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                {/* Display Frame */}
                <div className="flex-grow overflow-auto bg-bg rounded-lg border border-borderCol flex items-center justify-center p-2 mb-4 relative min-h-[300px]">
                  {selectedCert.file.endsWith('.pdf') ? (
                    <iframe
                      src={`${selectedCert.file}#toolbar=0&navpanes=0`}
                      title={selectedCert.title}
                      className="w-full h-[50vh] md:h-[60vh] rounded-lg"
                      frameBorder="0"
                    />
                  ) : (
                    <img
                      src={selectedCert.file}
                      alt={selectedCert.title}
                      className="max-w-full max-h-[50vh] md:max-h-[60vh] object-contain rounded-lg shadow-md"
                    />
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <a href={selectedCert.file} download target="_blank" rel="noopener noreferrer">
                    <Button className="text-xs">
                      <FaDownload size={12} /> Open / Download File
                    </Button>
                  </a>
                  <Button variant="outline" onClick={() => setSelectedCert(null)} className="text-xs">
                    Close
                  </Button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certificates;
