import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools, FaCode, FaLightbulb, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Retail Analytics Dashboard",
      summary: "Interactive sales performance visualisation tool for retail business",
      tech: ["Power BI", "SQL", "Python", "DAX"],
      objective: "Develop a comprehensive analytics solution to track KPIs, sales trends, and inventory management for a retail chain with 50+ locations",
      details: "Created a multi-page interactive dashboard with drill-down capabilities, automated data refresh, and custom visualisations. Implemented DAX measures for complex calculations and used Python for data preprocessing.",
      github: "https://github.com/yourusername/retail-analytics",
      impact: "Reduced reporting time by 80% and helped identify $300K in inventory optimisation opportunities"
    },
    {
      id: 2,
      title: "Process Automation Suite",
      summary: "End-to-end automation solution for financial reporting",
      tech: ["Python", "Excel VBA", "SQL", "Power Automate"],
      objective: "Automate manual financial reporting processes to reduce errors and free up analyst time for value-added activities",
      details: "Developed a suite of tools to extract data from multiple sources, transform and validate it, and generate standardised reports. Implemented error handling and notification systems.",
      github: "https://github.com/yourusername/process-automation",
      impact: "Saved 25+ hours per week and eliminated 95% of manual data entry errors"
    },
    {
      id: 3,
      title: "Interactive Portfolio Website",
      summary: "Modern web application to showcase professional skills and projects",
      tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      objective: "Create an engaging, responsive portfolio website to showcase professional experience and technical skills to potential employers",
      details: "Designed and implemented a responsive, animated website with interactive elements. Used modern React practices and animation libraries for a smooth user experience.",
      github: "https://github.com/yourusername/portfolio-website",
      impact: "Increased recruiter engagement and improved personal brand visibility online"
    },
    {
      id: 4,
      title: "UQ Capstone Course - Information Analysis & System Design",
      summary: "Mobile application prototype design for university capstone project",
      tech: ["Adobe XD", "Miro Board", "User Story Mapping", "Wireframing"],
      objective: "Design and prototype a mobile application based on user needs and functional requirements for the BISM3222 Information Analysis and System Design course",
      details: "Developed comprehensive user stories and wireframes aligned to user needs. Created interactive mobile prototypes using Adobe XD and used Miro Board for collaborative brainstorming and agile planning methodology.",
      github: null,
      demo: null,
      externalLinks: [
        {
          title: "Adobe XD Prototype",
          url: "https://xd.adobe.com/view/0b4d83fd-ecb9-4c52-83ac-07ee383c93df-5e1e/"
        },
        {
          title: "Miro Board",
          url: "https://miro.com/app/board/uXjVPjM58D8=/"
        }
      ],
      period: "Feb 2023 - Jul 2023",
      impact: "Delivered a high-fidelity prototype that received excellent feedback from stakeholders and course instructors"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🧪 Projects
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="post-it bg-white border-t-4 border-secondary"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.summary}</p>
              
              <div className="flex flex-wrap mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => toggleProject(project.id)}
                className="text-secondary font-medium hover:underline focus:outline-none"
              >
                {expandedProjects[project.id] ? 'Show Less' : 'Show More'}
              </button>
              
              {expandedProjects[project.id] && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <div className="flex items-start mb-2">
                        <FaLightbulb className="text-secondary mr-2 mt-1" />
                        <div>
                          <span className="font-medium text-gray-700">Objective:</span>
                          <p className="text-gray-700">{project.objective}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-start mb-2">
                        <FaCode className="text-secondary mr-2 mt-1" />
                        <div>
                          <span className="font-medium text-gray-700">Details:</span>
                          <p className="text-gray-700">{project.details}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-start mb-2">
                        <FaChartLine className="text-secondary mr-2 mt-1" />
                        <div>
                          <span className="font-medium text-gray-700">Impact:</span>
                          <p className="text-gray-700">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center mr-4 text-primary hover:text-secondary transition-colors duration-300"
                      >
                        <FaGithub className="mr-1" />
                        <span>GitHub Repo</span>
                      </a>
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:text-secondary transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="mr-1" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      
                      {project.externalLinks && project.externalLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:text-secondary transition-colors duration-300 ml-4"
                        >
                          <FaExternalLinkAlt className="mr-1" />
                          <span>{link.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
