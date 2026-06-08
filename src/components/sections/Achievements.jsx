import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '../../config/constants';
import { useCounter } from '../../hooks/useCounter';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const AchievementCard = ({ achievement, trigger }) => {
  // Animate counters
  const animatedValue = useCounter(achievement.num, 1200, trigger);

  return (
    <GlassCard 
      className="border-borderCol hover:border-accent p-6 flex flex-col justify-between text-left h-full relative group overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Top row: Icon */}
        <div className="text-3xl">{achievement.icon}</div>

        {/* Counter */}
        <div>
          <div className="text-3xl font-[800] bg-grad bg-clip-text text-transparent flex items-baseline">
            <span>{animatedValue}</span>
            <span>{achievement.suffix}</span>
          </div>
          <div className="text-[12.5px] font-[700] text-textCol mt-1">{achievement.lbl}</div>
        </div>

        {/* Description */}
        <p className="text-[12px] text-textCol2 leading-relaxed">
          {achievement.desc}
        </p>
      </div>

    </GlassCard>
  );
};

const Achievements = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="alt-bg py-20 px-6 md:px-12" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            Coding Milestones
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Achievements &amp; <span className="bg-grad bg-clip-text text-transparent">Milestones</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <ScrollReveal 
              key={ach.id} 
              delay={idx * 0.1}
            >
              <AchievementCard 
                achievement={ach} 
                trigger={isInView} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
