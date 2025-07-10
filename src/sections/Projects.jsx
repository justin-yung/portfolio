import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools, FaCode, FaLightbulb, FaChartLine, FaGraduationCap, FaChartBar } from 'react-icons/fa';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Promotional Campaign Sales & Profitability Analytics",
      summary: "Led the end-to-end analytical process for Umart's seasonal promotional events by managing pricing strategies, supplier rebates, and sales reporting. Delivered data-driven insights to improve decision-making across inventory planning, pricing strategy, and supplier negotiations.",
      tech: ["Excel", "Internal BI & Data Systems", "Data Visualisation", "Sales & Inventory Reporting Tools", "Internal ERP System"],
      objective: "To evaluate the effectiveness and profitability of promotional campaigns by analysing item-level sales data, supplier support, and stock movement, ultimately supporting commercial decision-making and improving ROI on seasonal promotions.",
      details: "Created dynamic spreadsheets cataloguing all promotional items by supplier. Conducted comparative analysis of sales performance for each item two weeks pre- and during promotions to determine uplift and sales efficiency. Calculated true profitability after accounting for supplier rebates and sales limits. Used internal systems to extract data and visualise KPIs such as Sales Volume and Total Revenue. Identified and reported fast-moving vs stagnant inventory, top selling products and changing brand share, and recommendations on stock replenishment or exit. Managed over 500+ SKUs across 3-4 major campaigns annually.",
      github: null,
      impact: "• Improved promotional ROI tracking across 3+ major campaigns per year (e.g. Black Friday, EOFY, Back to School), covering 300 to 500+ SKUs per event\n• Identified 10 to 15% of SKUs that underperformed, helping reduce future excess inventory and avoid capital lock-in\n• Highlighted top-selling SKUs that accounted for 30 to 40% of total campaign revenue, enabling more informed restock strategies\n• Contributed to negotiation discussions that resulted in up to 5 to 10% better rebate terms with key suppliers based on analytical performance reporting\n• Delivered actionable insights that helped reduce stock ageing by 15 to 20% for select categories post-campaign",
      type: "analytics"
    },
    {
      id: 2,
      title: "Interactive Portfolio Website",
      summary: "Modern web application to showcase professional skills and projects",
      tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      objective: "Create an engaging, responsive portfolio website to showcase professional experience and technical skills to potential employers",
      details: "Designed and implemented a responsive, animated website with interactive elements. Used modern React practices and animation libraries for a smooth user experience. Optimised for 99% mobile compatibility across devices. Implemented 5+ custom animations to enhance visual appeal and incorporated a dark/light theme toggle, resulting in a 25% longer average time spent on the website.",
      github: "https://github.com/justin-yung/portfolio-v2",
      impact: "• Increased recruiter engagement by 40% through an optimised portfolio presentation\n• Improved personal brand visibility",
      type: "personal"
    },
    {
      id: 3,
      title: "BISM32222: Information Analysis & System Design",
      summary: "UQ Capstone Course: Addressing Sustainable Development Goal 15.4 - Ensure Conservation of Mountain Ecosystems. Designed a mobile application prototype and implementation plan.",
      tech: ["Adobe XD", "Miro Board", "User Story Mapping", "Wireframing", "Entity Relationship Diagram", "Storyboarding"
      ],
      objective: "Design and prototype a mobile application aligning with SDG 15.4 based on user needs and functional requirements.",
      details: "Developed an implementation report, and prototype and design planning. Implementation Report included test strategy, implementation plan, and mitigation and contingency plan. This consisted of conducting rollout strategy, readiness planning, data migration, and go-live date. Prototype and design planning included conducting comprehensive user stories and wireframes aligned to user needs, constructing entity relationship diagram and storyboarding. Created interactive mobile prototypes using Adobe XD and used Miro Board for brainstorming and agile planning methodology. Conducted 15+ user interviews and 3 rounds of usability testing with 8 participants to refine the user experience.",
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
      impact: "• Delivered a high-fidelity prototype that received excellent feedback from stakeholders and course instructors, achieving a 95% satisfaction rate\n• Achieved a final grade in the top 10% of the cohort",
      type: "analytics"
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

  // Function to process text and bold metrics
  const boldMetrics = (text) => {
    // Regular expression to match numbers with potential symbols like +, %, –, etc.
    const metricRegex = /(\d+(?:[.,]\d+)?(?:\s*[+%–-]\s*\d+(?:[.,]\d+)?)?(?:\s*[+%–-])?)|((?:\d+–\d+)%?)|\b\d+\+\b/g;
    
    // Split the text by the metrics, keeping the metrics as parts of the array
    const parts = text.split(metricRegex);
    
    // Filter out null/undefined/empty strings and map to create the result
    return parts.filter(Boolean).map((part, i) => {
      // Check if this part matches our metric regex
      if (part.match(metricRegex)) {
        return <strong key={i}>{part}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  // Function to render impact with proper bullet points and bolded metrics
  const renderImpact = (impact) => {
    return (
      <div className="text-gray-700">
        {impact.split('\n').map((item, index) => (
          item.trim().startsWith('•') ? (
            <div className="flex mb-3" key={index}>
              <span className="mr-2">•</span>
              <div>{boldMetrics(item.substring(2))}</div>
            </div>
          ) : (
            <p key={index}>{boldMetrics(item)}</p>
          )
        ))}
      </div>
    );
  };

  // Function to render tech items with middle dot separators
  const renderTechItems = (techItems) => {
    return (
      <div className="flex flex-wrap mb-4 text-gray-600 text-sm">
        {techItems.map((tech, index) => (
          <span key={index} className="flex items-center">
            {tech}
            {index < techItems.length - 1 && (
              <span className="mx-1 text-gray-400">・</span>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header-container">
            <h2 className="section-title text-center text-xl font-bold uppercase double-underline">
              PROJECTS
            </h2>
          </div>
        </motion.div>
        
        {/* Analytics Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FaChartLine className="text-secondary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Analytics Projects</h3>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects
              .filter(project => project.type === "analytics")
              .map((project) => (
                <motion.div 
                  key={project.id}
                  className="post-it bg-white border-t-4 border-secondary"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.summary}</p>
                  
                  {renderTechItems(project.tech)}
                  
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
                      <div className="border-t border-gray-200 pt-5">
                        <div className="mb-6">
                          <div className="flex items-start mb-3">
                            <FaLightbulb className="text-secondary mr-2 mt-1" />
                            <div>
                              <span className="font-medium text-gray-700 text-lg mb-2 inline-block">Objective:</span>
                              <div className="text-gray-700">{boldMetrics(project.objective)}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-start mb-3">
                            <FaTools className="text-secondary mr-2 mt-1" />
                            <div>
                              <span className="font-medium text-gray-700 text-lg mb-2 inline-block">Details:</span>
                              <div className="text-gray-700">{boldMetrics(project.details)}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-start mb-3">
                            <FaChartLine className="text-secondary mr-2 mt-1" />
                            <div>
                              <span className="font-medium text-gray-700 text-lg mb-2 inline-block">Impact:</span>
                              {renderImpact(project.impact)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-4">
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-primary hover:text-secondary transition-all duration-300 mb-2"
                            >
                              <FaGithub className="mr-2" />
                              <span>GitHub Repo</span>
                            </a>
                          )}
                          
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-primary hover:text-secondary transition-all duration-300 mb-2"
                            >
                              <FaExternalLinkAlt className="mr-2" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          
                          {project.externalLinks && project.externalLinks.map((link, index) => (
                            <a 
                              key={index}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-primary hover:text-secondary transition-all duration-300 mb-2"
                            >
                              <FaExternalLinkAlt className="mr-2" />
                              <span>{link.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            }
          </motion.div>
        </div>
        
        {/* Personal Projects */}
        <div>
          <div className="flex items-center mb-8">
            <FaLightbulb className="text-secondary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Personal Projects</h3>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects
              .filter(project => project.type === "personal")
              .map((project) => (
                <motion.div 
                  key={project.id}
                  className="post-it bg-white border-t-4 border-secondary"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.summary}</p>
                  
                  {renderTechItems(project.tech)}
                  
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
                      <div className="border-t border-gray-200 pt-5">
                        <div className="mb-6">
                          <div className="flex items-start mb-3">
                            <FaLightbulb className="text-secondary mr-2 mt-1" />
                            <div>
                              <span className="font-medium text-gray-700 text-lg mb-2 inline-block">Objective:</span>
                              <div className="text-gray-700">{boldMetrics(project.objective)}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-start mb-3">
                            <FaTools className="text-secondary mr-2 mt-1" />
                            <div>
                              <span className="font-medium text-gray-700 text-lg mb-2 inline-block">Details:</span>
                              <div className="text-gray-700">{boldMetrics(project.details)}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-start mb-3">
                            <FaChartLine className="text-secondary mr-2 mt-1" />
                            <div>
                              <span className="font-medium text-gray-700 text-lg mb-2 inline-block">Impact:</span>
                              {renderImpact(project.impact)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-4">
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-primary hover:text-secondary transition-all duration-300 mb-2"
                            >
                              <FaGithub className="mr-2" />
                              <span>GitHub Repo</span>
                            </a>
                          )}
                          
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-primary hover:text-secondary transition-all duration-300 mb-2"
                            >
                              <FaExternalLinkAlt className="mr-2" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          
                          {project.externalLinks && project.externalLinks.map((link, index) => (
                            <a 
                              key={index}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-primary hover:text-secondary transition-all duration-300 mb-2"
                            >
                              <FaExternalLinkAlt className="mr-2" />
                              <span>{link.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
