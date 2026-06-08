import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaGithub, FaEye } from 'react-icons/fa';
import { PROJECTS } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';

const Projects = () => {
  return (
    <section id="projects" className="alt-bg py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            What I've Built
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Featured <span className="bg-grad bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-12"></div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal 
              key={project.id} 
              delay={idx * 0.15}
            >
              <GlassCard 
                className="h-full border-borderCol hover:border-accent p-0 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* visual display box */}
                <div className={`h-[140px] flex items-center justify-center text-[52px] bg-gradient-to-br ${project.gradientClass}`}>
                  {project.emoji}
                </div>

                {/* Info Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <h3 className="text-[15px] font-bold text-textCol">{project.title}</h3>
                    <p className="text-textCol2 text-[12px] leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-accent/10 border border-accent/25 text-accent rounded-[6px] py-0.5 px-2 text-[10px] font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="grid grid-cols-2 gap-2 text-center text-[11.5px] font-bold">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="border border-borderCol2 bg-glass2 hover:bg-grad hover:text-white hover:border-transparent text-textCol py-2 px-1 rounded-[10px] transition-all duration-200 flex items-center justify-center gap-1.5"
                    >
                      <FaEye size={12} /> Details
                    </Link>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="border border-borderCol2 bg-glass2 hover:bg-grad hover:text-white hover:border-transparent text-textCol py-2 px-1 rounded-[10px] transition-all duration-200 flex items-center justify-center gap-1.5"
                    >
                      <FaGithub size={12} /> GitHub
                    </a>
                  </div>
                </div>

              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
