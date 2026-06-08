import React from 'react';
import { FaDownload, FaPrint, FaBriefcase, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BIO } from '../../config/constants';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

const Resume = () => {
  const handlePrint = () => {
    // Print logic
    const printContent = document.getElementById('ats-resume-document').innerHTML;
    const originalContent = document.body.innerHTML;
    
    // Create temporary print frame style
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body { background: white !important; color: black !important; font-family: 'Poppins', sans-serif !important; padding: 20px !important; }
        .print-hide { display: none !important; }
        .resume-print-container { border: none !important; box-shadow: none !important; background: transparent !important; padding: 0 !important; color: black !important; }
        .text-textCol { color: black !important; }
        .text-textCol2 { color: #333 !important; }
        .text-accent { color: #6c63ff !important; border-bottom-color: #6c63ff !important; }
        a { text-decoration: none !important; color: black !important; }
      }
    `;
    document.head.appendChild(style);
    
    window.print();
    
    // Cleanup style
    document.head.removeChild(style);
  };

  return (
    <section id="resume" className="py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-[11px] font-[700] tracking-[0.14em] uppercase text-accent mb-2">
            My CV
          </div>
          <h2 className="text-3xl font-[800] text-textCol mb-2">
            Resume <span className="bg-grad bg-clip-text text-transparent">Preview</span>
          </h2>
          <div className="w-[52px] h-[3px] bg-grad rounded-[2px] mb-8"></div>
        </ScrollReveal>

        {/* Download / Print CTA row */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a href={BIO.resumeUrl} download="PrateekYadav_Resume.pdf">
              <Button>
                <FaDownload size={13} /> Download PDF Version
              </Button>
            </a>
            <Button variant="outline" onClick={handlePrint}>
              <FaPrint size={13} /> Print Resume
            </Button>
          </div>
        </ScrollReveal>

        {/* ATS-friendly text representation inside a GlassCard */}
        <ScrollReveal delay={0.2}>
          <GlassCard 
            hover={false} 
            className="border-borderCol max-w-4xl mx-auto p-8 md:p-12 text-left bg-bg3/40 shadow-2xl relative overflow-hidden"
          >
            {/* ATS Content block */}
            <div id="ats-resume-document" className="resume-print-container font-sans text-textCol2">
              
              {/* Header Title */}
              <div className="text-center border-b border-borderCol/50 pb-6 mb-6">
                <h3 className="text-2xl font-bold text-textCol tracking-wide uppercase">{BIO.name}</h3>
                
                {/* Contact Subhead */}
                <div className="flex flex-wrap justify-center gap-y-1.5 gap-x-4 text-[11px] text-textCol2 mt-3 font-medium">
                  <span className="flex items-center gap-1"><FaEnvelope className="text-accent" /> {BIO.email}</span>
                  <span className="flex items-center gap-1"><FaPhoneAlt className="text-accent" /> {BIO.phone}</span>
                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-accent" /> {BIO.location}</span>
                  <a href={BIO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-1">
                    <FaLinkedin /> linkedin.com/in/prateek-yadav
                  </a>
                  <a href={BIO.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-1">
                    <FaGithub /> github.com/prateekyadav2003
                  </a>
                </div>
              </div>

              {/* Career Objective */}
              <div className="mb-6">
                <h4 className="text-[12.5px] font-bold text-textCol uppercase tracking-wider border-b border-borderCol/40 pb-1.5 mb-2.5">
                  Career Objective
                </h4>
                <p className="text-[12px] leading-relaxed">
                  MCA student specializing in Cloud Computing with hands-on full-stack development experience. Proficient in HTML5, CSS3, Bootstrap, JavaScript, React.js, PHP, MySQL, Git, and GitHub. Eager to build scalable, user-focused web applications and contribute to collaborative development teams.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-6">
                <h4 className="text-[12.5px] font-bold text-textCol uppercase tracking-wider border-b border-borderCol/40 pb-1.5 mb-2.5">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[12px] leading-relaxed">
                  <div><strong className="text-textCol">Frontend:</strong> HTML5, CSS3, Bootstrap, JavaScript (ES6+), Responsive Design</div>
                  <div><strong className="text-textCol">JavaScript Library:</strong> React.js (Hooks, Functional Components, State)</div>
                  <div><strong className="text-textCol">Backend:</strong> PHP, RESTful API Design, Auth, Server Logic</div>
                  <div><strong className="text-textCol">Database:</strong> MySQL, SQL (Schema, CRUD, Query Optimization)</div>
                  <div><strong className="text-textCol">Version Control:</strong> Git, GitHub (Branching, Pull Requests, Reviews)</div>
                  <div><strong className="text-textCol">Tools &amp; Concepts:</strong> VS Code, Linux, Data Structures, OOP, Agile</div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h4 className="text-[12.5px] font-bold text-textCol uppercase tracking-wider border-b border-borderCol/40 pb-1.5 mb-2.5">
                  Projects
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline flex-wrap">
                      <h5 className="text-[12.5px] font-bold text-textCol">PG Finder – Full-Stack Accommodation Platform</h5>
                      <span className="text-[11px] text-textCol3 font-bold">Aug 2024 – Jun 2025</span>
                    </div>
                    <div className="text-[11px] text-accent font-semibold mb-1.5">Tech Stack: HTML5, CSS3, Bootstrap, JavaScript, React.js, PHP, MySQL</div>
                    <ul className="list-disc pl-4 space-y-1 text-[12px] leading-relaxed">
                      <li>Built a fully responsive accommodation discovery platform using HTML5, CSS3, and Bootstrap with a mobile-first approach.</li>
                      <li>Developed dynamic frontend interfaces using React.js functional components and hooks for property browsing and booking.</li>
                      <li>Implemented RESTful APIs in PHP for user authentication, session management, property listings, and booking workflows.</li>
                      <li>Designed and optimized MySQL database schema with efficient CRUD operations and SQL query optimization.</li>
                      <li>Applied form validation and secure input sanitization; managed codebase via Git/GitHub.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h4 className="text-[12.5px] font-bold text-textCol uppercase tracking-wider border-b border-borderCol/40 pb-1.5 mb-2.5">
                  Internship Experience
                </h4>
                <div>
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h5 className="text-[12.5px] font-bold text-textCol">Full-Stack Web Development Intern</h5>
                    <span className="text-[11px] text-textCol3 font-bold">Aug 2024 – Nov 2024</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-[12px] leading-relaxed mt-1.5">
                    <li>Built and maintained responsive frontend interfaces using HTML5, CSS3, Bootstrap, and JavaScript for production web applications.</li>
                    <li>Integrated RESTful APIs and implemented server-side logic in PHP with MySQL for dynamic, data-driven functionality.</li>
                    <li>Debugged production issues, identified performance bottlenecks, and optimized application speed and scalability.</li>
                    <li>Participated in agile code reviews, daily stand-ups, and contributed to technical documentation following best practices.</li>
                    <li>Managed version control using Git and GitHub for collaborative multi-developer workflows.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h4 className="text-[12.5px] font-bold text-textCol uppercase tracking-wider border-b border-borderCol/40 pb-1.5 mb-2.5">
                  Education
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline flex-wrap text-[12px]">
                    <div>
                      <strong className="text-textCol">Master of Computer Applications (MCA) — Cloud Computing</strong>
                      <span className="text-textCol2 block">Galgotias University</span>
                    </div>
                    <span className="text-[11px] text-textCol3 font-bold">Sep 2025 – Jul 2027</span>
                  </div>
                  <div className="flex justify-between items-baseline flex-wrap text-[12px]">
                    <div>
                      <strong className="text-textCol">Bachelor of Computer Applications (BCA) — Computer Science</strong>
                      <span className="text-textCol2 block">DDU Gorakhpur University</span>
                    </div>
                    <span className="text-[11px] text-textCol3 font-bold">Aug 2022 – Jun 2025</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-[12.5px] font-bold text-textCol uppercase tracking-wider border-b border-borderCol/40 pb-1.5 mb-2.5">
                  Certifications
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-[12px] leading-relaxed">
                  <li>Web Development – Internshala</li>
                  <li>Database Programming with SQL – Oracle</li>
                  <li>NPTEL Cloud Computing &amp; Distributed Systems – SWAYAM / IIT Kanpur</li>
                  <li>Cloud Computing 101</li>
                </ul>
              </div>

            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Resume;
