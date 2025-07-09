import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaCalendarAlt, FaTools } from 'react-icons/fa';

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [expandedEdu, setExpandedEdu] = useState(null);
  
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Senior Business Analyst",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      summary: "Leading data analysis initiatives for enterprise clients.",
      details: "Led cross-functional teams to implement data-driven solutions for Fortune 500 clients. Developed interactive dashboards using Power BI that increased decision-making efficiency by 35%. Automated reporting processes that saved 15+ hours weekly.",
      tools: ["Power BI", "SQL", "Python", "Excel", "Agile"],
      impact: "Reduced operational costs by 22% and improved client satisfaction scores by 18%"
    },
    {
      id: 2,
      title: "Business Analyst",
      company: "DataCorp Analytics",
      period: "2018 - 2021",
      summary: "Transformed raw data into actionable business insights.",
      details: "Analyzed large datasets to identify trends and opportunities. Created predictive models that improved forecast accuracy by 28%. Collaborated with stakeholders to define business requirements and implement solutions.",
      tools: ["SQL", "Tableau", "Excel", "R", "JIRA"],
      impact: "Identified $1.2M in cost-saving opportunities and streamlined 5 core business processes"
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Global Insights Group",
      period: "2016 - 2018",
      summary: "Managed data collection, cleaning, and preliminary analysis.",
      details: "Conducted statistical analysis on customer behavior data. Developed automated ETL processes that improved data quality by 40%. Created weekly and monthly reports for executive leadership.",
      tools: ["Excel", "SQL", "Google Analytics", "SPSS"],
      impact: "Improved data accuracy by 35% and reduced reporting time by 60%"
    }
  ];

  // Sample education data
  const education = [
    {
      id: 1,
      degree: "Master of Data Science",
      institution: "University of Technology",
      period: "2015 - 2016",
      details: "Specialized in business analytics and machine learning. Completed capstone project on predictive analytics for retail inventory management."
    },
    {
      id: 2,
      degree: "Bachelor of Business",
      institution: "State University",
      period: "2011 - 2015",
      details: "Major in Information Systems. Graduated with honors (GPA 3.8/4.0). Received academic excellence scholarship for 3 consecutive years."
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

  const toggleJob = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  const toggleEdu = (id) => {
    if (expandedEdu === id) {
      setExpandedEdu(null);
    } else {
      setExpandedEdu(id);
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          💼 Experience
        </motion.h2>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FaBriefcase className="text-secondary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Professional Experience</h3>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {jobs.map((job) => (
              <motion.div 
                key={job.id}
                className="post-it bg-white relative"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <h4 className="text-xl font-bold text-primary mb-2">{job.title}</h4>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaBuilding className="mr-2" />
                  <span>{job.company}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{job.period}</span>
                </div>
                
                <p className="text-gray-700 mb-3">{job.summary}</p>
                
                <button 
                  onClick={() => toggleJob(job.id)}
                  className="text-secondary font-medium hover:underline focus:outline-none"
                >
                  {expandedJob === job.id ? 'Show Less' : 'Show More'}
                </button>
                
                {expandedJob === job.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 mb-4">{job.details}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <FaTools className="text-gray-600 mr-2" />
                          <span className="font-medium text-gray-700">Tools:</span>
                        </div>
                        <div className="flex flex-wrap">
                          {job.tools.map((tool, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded mr-2 mb-2"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-gray-700">Impact:</span>
                        <p className="text-gray-700">{job.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center mb-8">
            <FaGraduationCap className="text-secondary text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-primary">Education</h3>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {education.map((edu) => (
              <motion.div 
                key={edu.id}
                className="post-it bg-white"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <h4 className="text-xl font-bold text-primary mb-2">{edu.degree}</h4>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaBuilding className="mr-2" />
                  <span>{edu.institution}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                
                <button 
                  onClick={() => toggleEdu(edu.id)}
                  className="text-secondary font-medium hover:underline focus:outline-none"
                >
                  {expandedEdu === edu.id ? 'Show Less' : 'Show More'}
                </button>
                
                {expandedEdu === edu.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700">{edu.details}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
