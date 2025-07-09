import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools, FaCode, FaLightbulb, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Retail Analytics Dashboard",
      summary: "Interactive sales performance visualization tool for retail business",
      tech: ["Power BI", "SQL", "Python", "DAX"],
      objective: "Develop a comprehensive analytics solution to track KPIs, sales trends, and inventory management for a retail chain with 50+ locations",
      details: "Created a multi-page interactive dashboard with drill-down capabilities, automated data refresh, and custom visualizations. Implemented DAX measures for complex calculations and used Python for data preprocessing.",
      github: "https://github.com/yourusername/retail-analytics",
      impact: "Reduced reporting time by 80% and helped identify $300K in inventory optimization opportunities"
    },
    {
      id: 2,
      title: "Customer Segmentation Model",
      summary: "Machine learning solution for targeted marketing campaigns",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      objective: "Develop a customer segmentation model to improve marketing campaign effectiveness and personalization",
      details: "Applied K-means clustering and RFM analysis to segment customers based on purchase behavior. Built interactive visualization tools to communicate findings to stakeholders and marketing teams.",
      github: "https://github.com/yourusername/customer-segmentation",
      impact: "Improved campaign conversion rates by 32% and reduced customer acquisition costs by 18%"
    },
    {
      id: 3,
      title: "Process Automation Suite",
      summary: "End-to-end automation solution for financial reporting",
      tech: ["Python", "Excel VBA", "SQL", "Power Automate"],
      objective: "Automate manual financial reporting processes to reduce errors and free up analyst time for value-added activities",
      details: "Developed a suite of tools to extract data from multiple sources, transform and validate it, and generate standardized reports. Implemented error handling and notification systems.",
      github: "https://github.com/yourusername/process-automation",
      impact: "Saved 25+ hours per week and eliminated 95% of manual data entry errors"
    },
    {
      id: 4,
      title: "Interactive Portfolio Website",
      summary: "Modern web application to showcase professional skills and projects",
      tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      objective: "Create an engaging, responsive portfolio website to showcase professional experience and technical skills to potential employers",
      details: "Designed and implemented a responsive, animated website with interactive elements. Used modern React practices and animation libraries for a smooth user experience.",
      github: "https://github.com/yourusername/portfolio-website",
      impact: "Increased recruiter engagement and improved personal brand visibility online"
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
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
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
                {expandedProject === project.id ? 'Show Less' : 'Show More'}
              </button>
              
              {expandedProject === project.id && (
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
