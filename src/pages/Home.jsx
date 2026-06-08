import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Certificates from '../components/sections/Certificates';
import Achievements from '../components/sections/Achievements';
import Services from '../components/sections/Services';
import GitHubStats from '../components/sections/GitHubStats';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg text-textCol relative overflow-hidden font-sans select-none md:select-text">
      {/* Skip Navigation Link for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <SEO 
        title="Full Stack Developer & Cloud Computing MCA" 
        description="Professional developer portfolio of Prateek Yadav. Discover projects, certifications, coding achievements, and services."
        canonical="https://prateekyadav.dev/"
        includeProjects={true}
      />
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Achievements />
        <Services />
        <GitHubStats />
        <Resume />
        <Contact />
      </main>

      {/* Footer Widgets */}
      <Footer />
    </div>
  );
};

export default Home;
