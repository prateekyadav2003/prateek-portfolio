import React from 'react';
import { SKILL_CATEGORIES } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            What I Know
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Tech <span className="bg-grad bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <ScrollReveal 
              key={category.title} 
              delay={idx * 0.1}
            >
              <GlassCard 
                className="h-full border-borderCol hover:border-accent group p-6 flex flex-col justify-start text-left"
              >
                {/* Category Title */}
                <h3 className="text-[13px] font-[700] tracking-wide text-accent3 mb-4 transition-colors duration-300 group-hover:text-accent">
                  {category.title}
                </h3>
                
                {/* Tags List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-glass2 border border-borderCol2 text-textCol rounded-[8px] py-1.5 px-3.5 text-[12px] font-[500] cursor-default transition-all duration-200 hover:bg-accent/15 hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
