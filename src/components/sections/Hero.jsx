import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaDownload, FaBriefcase, FaCloud, FaReact, FaNodeJs } from 'react-icons/fa';
import { BIO } from '../../config/constants';
import Orb from '../ui/Orb';
import Button from '../ui/Button';
import useLazyImage from '../../hooks/useLazyImage';

const TypingEffect = ({ roles, speed = 80, eraseSpeed = 50, delay = 2000 }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, eraseSpeed);
      }
    } else {
      if (displayText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      } else {
        timer = setTimeout(() => {
          setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed, eraseSpeed, delay]);

  return (
    <span className="border-r-2 border-accent dark:border-accent3 pr-1 animate-[pulse_1s_infinite] font-semibold text-accent3">
      {displayText}
    </span>
  );
};

const Hero = () => {
  const [imgRef, imageSrc, isLoading] = useLazyImage('/profile.png');

  const handleScrollTo = (id) => {
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
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration orbs */}
      <Orb className="orb1" />
      <Orb className="orb2" />
      <Orb className="orb3" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Greeting & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left"
        >
          {/* Opportunities Badge */}
          <div className="inline-flex items-center gap-2 bg-glass2 border-[1.5px] border-borderCol2 py-1.5 px-4 rounded-[20px] text-accent3 text-[11px] font-bold tracking-[0.02em]">
            <span className="w-2 h-2 rounded-full bg-accent3 animate-[blink_1.5s_infinite]" />
            <span>Available for Opportunities</span>
          </div>

          {/* Name Header */}
          <h1 className="text-4xl md:text-[54px] font-[800] leading-[1.1] tracking-[-0.5px]">
            Hi, I'm <br />
            <span className="bg-grad bg-clip-text text-transparent">{BIO.name}</span>
          </h1>

          {/* Typing Roles */}
          <div className="text-md md:text-lg text-textCol2 font-medium h-[1.8em] flex items-center">
            <TypingEffect roles={BIO.roles} />
          </div>

          {/* Description */}
          <p className="text-textCol2 text-[14px] leading-relaxed max-w-lg">
            {BIO.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={() => handleScrollTo('projects')} aria-label="View my projects">
              <FaBriefcase size={13} /> View Projects
            </Button>
            
            <a href={BIO.resumeUrl} download="PrateekYadav_Resume.pdf" aria-label="Download resume as PDF">
              <Button variant="outline">
                <FaDownload size={12} /> Resume
              </Button>
            </a>

            <Button variant="outline" onClick={() => handleScrollTo('contact')} aria-label="Go to contact section">
              <FaPaperPlane size={11} /> Contact
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Glassmorphic Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          {/* Card Wrap */}
          <div className="relative w-full max-w-[320px] md:max-w-[330px]">
            
            {/* Main Glass Card */}
            <div className="glass-effect rounded-[28px] p-6 md:p-8 text-center shadow-shadow transition-colors duration-300">
              
              {/* Profile Ring */}
              <div className="w-[150px] h-[150px] rounded-full bg-grad p-[3px] mx-auto mb-5 shadow-[0_0_30px_rgba(108,99,255,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-bg2">
                  <img 
                    ref={imgRef}
                    src={imageSrc}
                    alt={BIO.name}
                    loading="lazy"
                    className={`w-full h-full object-cover object-[center_15%] transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>
              </div>

              {/* Name Details */}
              <h2 className="text-[16px] font-[700] text-textCol mb-1">{BIO.name}</h2>
              <p className="text-[12px] text-textCol2 mb-4">{BIO.title}</p>

              {/* Badges */}
              <div className="flex justify-center gap-1.5 flex-wrap mb-5 text-[11px] font-bold">
                <span className="bg-accent/15 border border-accent/30 text-accent rounded-[7px] px-2.5 py-1">React.js</span>
                <span className="bg-accent3/10 border border-accent3/30 text-accent3 rounded-[7px] px-2.5 py-1">Cloud</span>
                <span className="bg-accent2/10 border border-accent2/30 text-accent2 rounded-[7px] px-2.5 py-1">Node.js</span>
              </div>

              {/* Mini Stats row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center bg-glass border border-borderCol rounded-[10px] py-2.5 px-1.5 transition-colors duration-300">
                  <div className="text-[18px] font-[800] bg-grad bg-clip-text text-transparent">10+</div>
                  <div className="text-[9px] text-textCol2 font-medium uppercase tracking-wider mt-0.5">Projects</div>
                </div>
                <div className="text-center bg-glass border border-borderCol rounded-[10px] py-2.5 px-1.5 transition-colors duration-300">
                  <div className="text-[18px] font-[800] bg-grad bg-clip-text text-transparent">3+</div>
                  <div className="text-[9px] text-textCol2 font-medium uppercase tracking-wider mt-0.5">Yrs Study</div>
                </div>
                <div className="text-center bg-glass border border-borderCol rounded-[10px] py-2.5 px-1.5 transition-colors duration-300">
                  <div className="text-[18px] font-[800] bg-grad bg-clip-text text-transparent">15+</div>
                  <div className="text-[9px] text-textCol2 font-medium uppercase tracking-wider mt-0.5">Skills</div>
                </div>
              </div>

            </div>

            {/* Floating Badges */}
            <div className="floating-badge absolute -top-2.5 -right-4 bg-glass2 border-[1.5px] border-borderCol2 rounded-[12px] py-1.5 px-3.5 text-[11px] font-bold flex items-center gap-1.5 text-accent3 backdrop-blur-md shadow-md">
              <FaCloud size={13} />
              <span>Cloud Computing</span>
            </div>

            <div className="floating-badge-delay-2 absolute bottom-3 -left-6 bg-glass2 border-[1.5px] border-borderCol2 rounded-[12px] py-1.5 px-3.5 text-[11px] font-bold flex items-center gap-1.5 text-accent2 backdrop-blur-md shadow-md">
              <FaReact size={13} />
              <span>React.js</span>
            </div>

            <div className="floating-badge-delay-1 absolute top-[45%] -right-8 bg-glass2 border-[1.5px] border-borderCol2 rounded-[12px] py-1.5 px-3.5 text-[11px] font-bold flex items-center gap-1.5 text-accent backdrop-blur-md shadow-md">
              <FaNodeJs size={13} />
              <span>Node.js</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
