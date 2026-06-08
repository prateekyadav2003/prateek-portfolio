import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCode, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';
import { PROJECTS } from '../config/constants';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import Orb from '../components/ui/Orb';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === projectId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-textCol flex flex-col justify-center items-center px-6">
        <SEO title="Project Not Found" description="The requested project was not found." />
        <Orb className="orb1" />
        <Orb className="orb2" />
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-extrabold mb-4 text-accent">404</h1>
          <p className="text-textCol2 mb-8">Project "{projectId}" not found.</p>
          <Button onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-textCol overflow-hidden flex flex-col justify-between font-sans">
      <SEO 
        title={project.title} 
        description={project.shortDesc} 
        keywords={project.techStack.join(', ')} 
      />
      <Navbar />

      {/* Orbs background decoration */}
      <Orb className="orb1" />
      <Orb className="orb2" />
      <Orb className="orb3" />

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-16 px-6 max-w-5xl mx-auto w-full relative z-10">
        
        {/* Back Link */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-[13px] font-bold text-accent hover:text-accent2 transition-colors duration-200 mb-8"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`glass-effect rounded-[28px] p-8 md:p-12 mb-8 bg-gradient-to-br ${project.gradientClass} relative overflow-hidden`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="text-5xl md:text-6xl mb-4">{project.emoji}</div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-3">{project.title}</h1>
              <p className="text-textCol2 text-sm md:text-base max-w-2xl leading-relaxed">{project.shortDesc}</p>
            </div>
            
            <div className="flex flex-row md:flex-col gap-3 min-w-[150px]">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-initial">
                <Button variant="outline" className="w-full text-xs">
                  <FaGithub size={14} /> GitHub
                </Button>
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-initial">
                <Button className="w-full text-xs">
                  <FaExternalLinkAlt size={12} /> Live Demo
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column (Left/Center) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <GlassCard hover={false}>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-borderCol pb-2">
                <FaCode className="text-accent" /> Project Overview
              </h2>
              <p className="text-textCol2 text-[13px] leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </GlassCard>

            {/* Challenges & Solutions */}
            <GlassCard hover={false}>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-borderCol pb-2">
                <FaExclamationTriangle className="text-accent2" /> Challenges & Solutions
              </h2>
              <div className="space-y-4 text-[13px] leading-relaxed">
                <div>
                  <h3 className="font-bold text-textCol mb-1">The Challenge:</h3>
                  <p className="text-textCol2">{project.challenges}</p>
                </div>
                <div>
                  <h3 className="font-bold text-accent3 mb-1">Our Solution:</h3>
                  <p className="text-textCol2">{project.solutions}</p>
                </div>
              </div>
            </GlassCard>

            {/* Future Improvements */}
            <GlassCard hover={false}>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-borderCol pb-2">
                <FaLightbulb className="text-accent3" /> Future Roadmap
              </h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[13px] text-textCol2">
                    <span className="text-accent3 mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

          </div>

          {/* Details Sidebar Column (Right) */}
          <div className="space-y-8">
            
            {/* Tech Stack */}
            <GlassCard hover={false}>
              <h2 className="text-md font-bold mb-4 border-b border-borderCol pb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-accent/10 border border-accent/30 text-accent rounded-lg px-2.5 py-1 text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Features */}
            <GlassCard hover={false}>
              <h2 className="text-md font-bold mb-4 border-b border-borderCol pb-2">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[13.5px] text-textCol2 leading-snug">
                    <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" size={13} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
