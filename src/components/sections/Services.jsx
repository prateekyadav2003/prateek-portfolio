import React from 'react';
import { SERVICES } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            What I Offer
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            My <span className="bg-grad bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {SERVICES.map((svc, idx) => (
            <ScrollReveal 
              key={svc.title} 
              delay={idx * 0.1}
            >
              <GlassCard 
                className="h-full border-borderCol hover:border-accent p-6 flex flex-col justify-start items-center"
              >
                {/* Service Icon Wrapper */}
                <div className="w-12 h-12 rounded-[14px] bg-grad flex items-center justify-center text-[20px] text-white mb-5 shadow-md">
                  {svc.icon}
                </div>

                {/* Service Text details */}
                <h3 className="text-[13.5px] font-[700] text-textCol mb-3">{svc.title}</h3>
                <p className="text-textCol2 text-[12px] leading-relaxed">
                  {svc.description}
                </p>

              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
