import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // detect active section
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    
    // Check if we are on a separate route page (like project detail)
    const isHome = window.location.pathname === '/';
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 64; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      el.setAttribute('tabindex', '-1');
      el.focus();
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-16 px-6 md:px-12 flex items-center justify-between z-[1000] transition-all duration-300 ${
        scrolled
          ? 'glass-nav bg-bg2/80 dark:bg-bg/80 border-b border-borderCol'
          : 'bg-transparent border-b border-transparent'
      }`}>
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="logo text-[22px] font-[800] tracking-[-0.5px] bg-grad bg-clip-text text-transparent cursor-pointer font-sans"
        >
          PY
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-[13px] font-[500] tracking-[0.02em] hover:text-accent transition-colors duration-200 cursor-pointer ${
                activeSection === link.id ? 'text-accent' : 'text-textCol2'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-1.5 bg-glass2 border-[1.5px] border-borderCol2 text-textCol hover:bg-accent hover:text-white hover:border-accent py-1.5 px-3.5 rounded-[20px] text-[12px] font-bold transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <>
                <FaSun className="text-[12px]" />
                <span>Light</span>
              </>
            ) : (
              <>
                <FaMoon className="text-[12px]" />
                <span>Dark</span>
              </>
            )}
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-textCol hover:text-accent transition-colors duration-200 cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <div className={`fixed top-16 left-0 right-0 border-b border-borderCol p-6 z-[999] flex flex-col gap-3 glass-nav transition-all duration-300 ${
        theme === 'dark' ? 'bg-bg/95' : 'bg-bg2/95'
      } ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="w-full text-left text-[14px] font-[500] py-2 border-b border-borderCol hover:text-accent text-textCol2 transition-colors duration-200 cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
