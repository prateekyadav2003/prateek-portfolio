import React from 'react';
import { EDUCATION } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const Education = () => {
  return (
    <section id="education" className="alt-bg py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Education <span className="bg-grad bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Timeline container */}
        <div className="relative pl-8 timeline-line text-left">
          {EDUCATION.map((edu, idx) => (
            <ScrollReveal 
              key={edu.degree} 
              delay={idx * 0.15}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-grad border-2 border-bg shadow-[0_0_0_3px_rgba(108,99,255,0.28)]" />

              {/* Glass Card info */}
              <GlassCard className="border-borderCol hover:border-accent p-6">
                
                {/* Period tag */}
                <span className="inline-block bg-accent/15 border border-accent/30 text-accent rounded-[7px] py-1 px-3 text-[11px] font-bold mb-3">
                  {edu.period}
                </span>

                {/* Headers */}
                <h3 className="text-[15px] font-[700] text-textCol mb-1">{edu.degree}</h3>
                <h4 className="text-[12.5px] font-[600] text-accent2 mb-3">{edu.school}</h4>

                {/* Details */}
                <p className="text-[12.5px] text-textCol2 leading-relaxed">
                  {edu.details}
                </p>

              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
