import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaCalendarAlt, FaTools, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [expandedJobs, setExpandedJobs] = useState({});
  const [expandedEducation, setExpandedEducation] = useState({});
  
  // Professional experience data
  const jobs = [
    {
      id: 1,
      title: "Operations Support Analyst",
      company: "Umart Online",
      location: "Mansfield QLD",
      period: "Jan 2024 - Dec 2024",
      summary: "Led procurement operations and data analysis for inventory management.",
      details: "Led procurement operations, utilised SQL queries and data visualisation tools to analyse inventory turnover rates and deliver data-driven recommendations to senior management. Managed a team of <b>4</b>, streamlining process flow to reduce employee downtime by <b>10%</b> and expand team responsibilities. Utilised adaptive communicative styles with internal stakeholders, and reduced procurement-related costs by <b>5%</b> through improved supplier engagement.",
      tools: ["SQL", "Power BI", "Excel", "Procurement", "Team Management"],
      impact: "Reduced procurement costs by <b>5%</b> and improved team efficiency by <b>10%</b>"
    },
    {
      id: 2,
      title: "Junior Accountant",
      company: "Yum Cha Cuisine",
      location: "Indooroopilly QLD",
      period: "Oct 2023 - Jan 2024",
      summary: "Managed financial reporting and bookkeeping activities.",
      details: "Generated <b>monthly</b> financial reports and performed bank reconciliations using Xero and Hubdoc to ensure accuracy and consistency across accounts. Monitored expense trends and identified key cost fluctuations, providing actionable insights to senior management for pricing and budgeting decisions. Supported <b>day-to-day</b> bookkeeping activities, maintaining accurate records of transactions and contributing to improved financial oversight.",
      tools: ["Xero", "Hubdoc", "Excel", "Financial Analysis", "Bookkeeping"],
      impact: "Improved financial reporting accuracy and provided actionable insights for management decisions"
    },
    {
      id: 3,
      title: "Supervisor",
      company: "Yum Cha Cuisine",
      location: "Indooroopilly QLD",
      period: "Feb 2021 - Sep 2023",
      summary: "Supervised front-of-house operations and team management.",
      details: "Supervised a team of <b>4 to 6</b> front-of-house staff, improving service efficiency, optimised team coordination, and customer flow management. Trained and delegated tasks to team members based on individual strengths, standardising onboarding procedures and reducing onboarding time by <b>13%</b>. Managed daily operations, including store opening and closing, and handled an average of <b>35+</b> customer requests per shift to maintain high service standards and guest satisfaction.",
      tools: ["Team Leadership", "Customer Service", "Operations Management", "Training", "Problem Solving"],
      impact: "Reduced onboarding time by <b>13%</b> and improved service efficiency through optimised team coordination"
    }
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Commerce",
      institution: "The University of Queensland",
      location: "Brisbane, Queensland",
      period: "Feb 2020 - Jul 2023",
      major: "Major in Business Information Systems, Finance",
      gpa: "GPA <b>5.3/7.0</b>",
      details: "Developed strong analytical and problem-solving skills through coursework in database management, systems analysis, and financial modelling. Participated in <b>multiple</b> business case competitions and collaborated on group projects simulating real-world business scenarios."
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
    setExpandedJobs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleEdu = (id) => {
    setExpandedEducation(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{job.location}</span>
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
                  {expandedJobs[job.id] ? 'Show Less' : 'Show More'}
                </button>
                
                {expandedJobs[job.id] && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: job.details }}></p>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <FaTools className="text-gray-600 mr-2" />
                          <span className="font-medium text-gray-700">Tools:</span>
                        </div>
                        <div className="flex flex-wrap items-center text-gray-700 text-sm">
                          {job.tools.map((tool, index) => (
                            <span key={index} className="inline-flex items-center">
                              <span>{tool}</span>
                              {index < job.tools.length - 1 && <span className="mx-1 text-gray-500">・</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-gray-700">Impact:</span>
                        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: job.impact }}></p>
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
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{edu.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                
                <p className="text-gray-700 mb-2">{edu.major}</p>
                <p className="text-gray-700 font-medium mb-3" dangerouslySetInnerHTML={{ __html: edu.gpa }}></p>
                
                <button 
                  onClick={() => toggleEdu(edu.id)}
                  className="text-secondary font-medium hover:underline focus:outline-none"
                >
                  {expandedEducation[edu.id] ? 'Show Less' : 'Show More'}
                </button>
                
                {expandedEducation[edu.id] && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: edu.details }}></p>
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
