import React from 'react';
import { EXPERIENCE } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            My Journey
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Work &amp; <span className="bg-grad bg-clip-text text-transparent">Project Experience</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative pl-8 timeline-line text-left">
          {EXPERIENCE.map((exp, idx) => (
            <ScrollReveal 
              key={exp.role} 
              delay={idx * 0.15}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-grad border-2 border-bg shadow-[0_0_0_3px_rgba(108,99,255,0.28)]" />

              {/* Glass Card info */}
              <GlassCard className="border-borderCol hover:border-accent p-6">
                
                {/* Year tag */}
                <span className="inline-block bg-accent/15 border border-accent/30 text-accent rounded-[7px] py-1 px-3 text-[11px] font-bold mb-3">
                  {exp.period}
                </span>

                {/* Headers */}
                <h3 className="text-[15px] font-[700] text-textCol mb-1">{exp.role}</h3>
                <h4 className="text-[12.5px] font-[600] text-accent2 mb-4">{exp.company}</h4>

                {/* Details list */}
                <ul className="space-y-2.5 text-[12.5px] text-textCol2 leading-relaxed">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
