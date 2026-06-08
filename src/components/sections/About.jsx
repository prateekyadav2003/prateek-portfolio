import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useCounter } from '../../hooks/useCounter';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Counters triggered when the section is visible
  const projectsCount = useCounter(10, 1000, isInView);
  const skillsCount = useCounter(15, 1000, isInView);

  return (
    <section id="about" className="alt-bg py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            Who I Am
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            About <span className="bg-grad bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Biography */}
          <ScrollReveal delay={0.1} className="space-y-6 text-left">
            <p className="text-textCol2 text-[14px] leading-relaxed">
              I'm <strong className="text-textCol">Prateek Yadav</strong>, a passionate Full Stack Developer currently pursuing my MCA in Cloud Computing. I love crafting elegant digital experiences that solve real-world problems.
            </p>
            <p className="text-textCol2 text-[14px] leading-relaxed">
              My journey in tech started with a curiosity for how the web works, which evolved into a deep passion for building scalable, modern applications. I am particularly excited about cloud architectures and how they are reshaping developer workflows and deployment scaling.
            </p>
            <p className="text-textCol2 text-[14px] leading-relaxed">
              I believe in writing clean, structured, and maintainable code. I continuously upskill in frontend architectures, backend API planning, and cloud deployment paradigms.
            </p>
            
            {/* Info Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-glass2 border border-borderCol2 rounded-[10px] py-1.5 px-3.5 text-textCol text-[11.5px] font-[600]">
                <FaMapMarkerAlt className="text-accent" /> Noida, UP, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-glass2 border border-borderCol2 rounded-[10px] py-1.5 px-3.5 text-textCol text-[11.5px] font-[600]">
                <FaGraduationCap className="text-accent2" /> MCA Cloud Computing
              </span>
              <span className="inline-flex items-center gap-1.5 bg-glass2 border border-borderCol2 rounded-[10px] py-1.5 px-3.5 text-textCol text-[11.5px] font-[600]">
                <FaBriefcase className="text-accent3" /> Open to Work
              </span>
            </div>
          </ScrollReveal>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            
            <GlassCard delay={0.1} className="text-center flex flex-col items-center justify-center p-6">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-3xl font-[800] bg-grad bg-clip-text text-transparent">
                {projectsCount}+
              </div>
              <div className="text-[10px] text-textCol2 font-[500] uppercase tracking-wider mt-1">
                Projects Built
              </div>
            </GlassCard>

            <GlassCard delay={0.2} className="text-center flex flex-col items-center justify-center p-6">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-3xl font-[800] bg-grad bg-clip-text text-transparent">
                {skillsCount}+
              </div>
              <div className="text-[10px] text-textCol2 font-[500] uppercase tracking-wider mt-1">
                Technologies
              </div>
            </GlassCard>

            <GlassCard delay={0.3} className="text-center flex flex-col items-center justify-center p-6">
              <div className="text-3xl mb-2">☁️</div>
              <div className="text-2xl font-[800] bg-grad bg-clip-text text-transparent">
                MCA
              </div>
              <div className="text-[10px] text-textCol2 font-[500] uppercase tracking-wider mt-2">
                Cloud Computing
              </div>
            </GlassCard>

            <GlassCard delay={0.4} className="text-center flex flex-col items-center justify-center p-6">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-[800] bg-grad bg-clip-text text-transparent">
                BCA
              </div>
              <div className="text-[10px] text-textCol2 font-[500] uppercase tracking-wider mt-2">
                Completed 2025
              </div>
            </GlassCard>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
