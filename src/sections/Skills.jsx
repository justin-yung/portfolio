import { motion } from 'framer-motion';
import { 
  FaDatabase, FaChartBar, FaLaptopCode, FaLanguage, 
  FaCertificate, FaStar, FaLightbulb 
} from 'react-icons/fa';

const Skills = () => {
  // Technical skills
  const technicalSkills = [
    { name: "Power BI", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Python", level: 75 },
    { name: "Excel (Advanced)", level: 95 },
    { name: "Tableau", level: 80 },
    { name: "R", level: 65 },
    { name: "JIRA", level: 85 },
    { name: "Azure", level: 70 },
    { name: "Google Analytics", level: 75 }
  ];
  
  // Languages
  const languages = [
    { name: "English", level: "Native" },
    { name: "Cantonese", level: "Conversational" },
    { name: "Spanish", level: "Basic" }
  ];
  
  // Interests
  const interests = [
    "Data Storytelling", 
    "Digital Transformation", 
    "Process Optimisation",
    "Business Intelligence",
    "Data-driven Decision Making",
    "Predictive Analytics"
  ];
  
  // Certifications
  const certifications = [
    { 
      name: "Entry Certificate in Business Analysis™ (ECBA)", 
      issuer: "International Institute of Business Analysis (IIBA)", 
      year: 2025,
      credential: "https://badges.iiba.org/4f6815cc-c1c2-4a2b-8569-22ef80928d08"
    },
    { 
      name: "Microsoft Certified: Data Analyst Associate", 
      issuer: "Microsoft", 
      year: 2022,
      credential: "https://www.credential.net/sample-credential"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header-container">
            <h2 className="section-title text-center text-xl font-bold uppercase double-underline">
              SKILLS
            </h2>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <FaLaptopCode className="text-secondary text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div 
                      className="bg-secondary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Languages */}
            <div className="mt-10">
              <div className="flex items-center mb-6">
                <FaLanguage className="text-secondary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-primary">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm"
                  >
                    <span className="font-medium text-gray-700">{language.name}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {language.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Interests & Certifications */}
          <div>
            {/* Interests */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-secondary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-primary">Interests</h3>
              </div>
              
              <div className="flex flex-wrap mb-10">
                {interests.map((interest, index) => (
                  <motion.span 
                    key={index}
                    variants={itemVariants}
                    className="skill-bubble"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <FaCertificate className="text-secondary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-primary">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="p-4 bg-white rounded-lg shadow-sm"
                  >
                    <h4 className="font-bold text-gray-800 mb-1">{cert.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{cert.issuer}</span>
                      <span className="text-gray-500">{cert.year}</span>
                    </div>
                    <div className="mt-4">
                      <a 
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:underline"
                      >
                        <FaStar className="mr-1" size={14} />
                        <span className="text-sm">View Credential</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
