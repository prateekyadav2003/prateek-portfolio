import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { BIO } from '../../config/constants';

const Footer = () => {
  const [showBtt, setShowBtt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtt(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    const isHome = window.location.pathname === '/';
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    
    if (id === 'home') {
      handleScrollTop();
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <footer className="bg-footerBg border-t border-borderCol py-8 px-6 md:px-12 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-textCol2">
          
          {/* Copyright */}
          <div>
            © 2026 {BIO.name} &mdash; Built with 💜
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 justify-center">
            <button onClick={() => handleNavClick('home')} className="hover:text-accent transition-colors duration-200 cursor-pointer">Home</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-accent transition-colors duration-200 cursor-pointer">About</button>
            <button onClick={() => handleNavClick('projects')} className="hover:text-accent transition-colors duration-200 cursor-pointer">Projects</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-accent transition-colors duration-200 cursor-pointer">Contact</button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href={BIO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-[9px] bg-glass2 border border-borderCol2 text-textCol2 hover:bg-grad hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a 
              href={BIO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-[9px] bg-glass2 border border-borderCol2 text-textCol2 hover:bg-grad hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>
            <a 
              href={`mailto:${BIO.email}`}
              className="w-9 h-9 rounded-[9px] bg-glass2 border border-borderCol2 text-textCol2 hover:bg-grad hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={14} />
            </a>
          </div>

        </div>
      </footer>

      {/* Fixed Back to top Button */}
      {showBtt && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-7 right-7 w-[42px] h-[42px] rounded-[12px] bg-grad text-white border-none flex items-center justify-center shadow-shadow text-[16px] cursor-pointer hover:-translate-y-1 transition-transform duration-200 z-[100]"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
