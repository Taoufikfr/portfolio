import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaFileDownload } from 'react-icons/fa'; 
import { projects } from './data/projects'; // This is the import causing the error

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10 font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Taoufik Frihat</h1>
        <p className="text-xl text-slate-300 mb-6">Full Stack Developer</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <div className="mb-8">
    <a 
      href="/cv.pdf" 
      download="Taoufik_CV.pdf" // This is the name the file will have when downloaded
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/20"
    >
      <FaFileDownload /> 
      <span>Download Resume</span>
    </a>
  </div>
          <a 
            href="https://www.linkedin.com/in/taoufik-frihat-ba8278214/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a 
            href="https://github.com/Taoufikfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </section>


      {/* --- PROJECTS GRID --- */}
      {/* This section uses the 'projects' variable, which fixes your error */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all shadow-lg">
            
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-slate-400 mb-4">{project.description}</p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-blue-200">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
              >
                <FaGithub /> <span>Code</span>
              </a>

              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition"
              >
                <FaExternalLinkAlt /> <span>Live Demo</span>
              </a>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
}