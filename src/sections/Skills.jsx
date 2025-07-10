import { motion } from 'framer-motion';
import { 
  FaDatabase, FaChartBar, FaLaptopCode, FaLanguage, 
  FaCertificate, FaStar, FaLightbulb, FaUsers, FaTrophy
} from 'react-icons/fa';

const Skills = () => {

  // Technical skills
  const technicalSkills = [
    { name: "Excel (Advanced)", level: "Proficient", percentage: 95 },
    { name: "Power BI", level: "Proficient", percentage: 80 },
    { name: "SQL", level: "Proficient", percentage: 80 },
    { name: "Tableau", level: "Proficient", percentage: 80 },
    { name: "Python", level: "Learning", percentage: 30 },
    { name: "R", level: "Learning", percentage: 30 },
  ];
  
  // Languages
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Cantonese", level: "Fluent" },
    { name: "Mandarin", level: "Fluent" },
    { name: "Japanese", level: "Conversational" }
  ];
  
  // Leadership qualities
  const leadershipQualities = [
    { name: "Results-Driven", level: 95 },
    { name: "Strategic Thinking", level: 90 },
    { name: "Autonomy", level: 88 },
    { name: "Team Mentorship", level: 85 },
  ];
  
  // Certifications
  const certifications = [
    { 
      name: "Entry Certificate in Business Analysis™ (ECBA)", 
      issuer: "International Institute of Business Analysis (IIBA)", 
      year: 2025,
      credential: "https://badges.iiba.org/4f6815cc-c1c2-4a2b-8569-22ef80928d08"
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
            <div className="flex items-center mb-10">
              <FaLaptopCode className="text-secondary text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-1">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                    <span className="px-3 py-1 bg-gray-100 text-primary rounded-full font-medium shadow-sm">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-md h-6 overflow-hidden">
                    <div 
                      className="h-6 bg-secondary rounded-l-md" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Leadership Qualities */}
            <div className="mt-12">
              <div className="flex items-center mb-10">
                <FaUsers className="text-secondary text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-1">Leadership Qualities</h3>
              </div>
              
              <div className="space-y-6">
                {leadershipQualities.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                      <span className="px-3 py-1 bg-gray-100 text-primary rounded-full font-medium shadow-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-md h-6 overflow-hidden">
                      <div 
                        className="h-6 bg-secondary rounded-l-md" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="mt-12">
              <div className="flex items-center mb-10">
                <FaLanguage className="text-secondary text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-1">Languages</h3>
              </div>
              
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 text-lg">{language.name}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                        {language.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-md h-6 overflow-hidden">
                      <div 
                        className="h-6 bg-secondary rounded-l-md" 
                        style={{ 
                          width: language.level === "Fluent" ? "95%" : 
                                 language.level === "Professional" ? "80%" :
                                 language.level === "Intermediate" ? "60%" : "40%"
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Certifications */}
          <div>
            {/* Certifications */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center mb-10">
                <FaCertificate className="text-secondary text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-1">Certifications</h3>
              </div>
              
              <div className="space-y-10">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-sm border-l-4 border-primary p-6"
                  >
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{cert.name}</h4>
                    <div className="flex items-center mb-5">
                      <span className="text-gray font-medium mr-2">{cert.issuer}</span>
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="bg-gray-100 text-primary px-2 py-1 rounded-md text-sm font-medium">{cert.year}</span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <a 
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300"
                      >
                        <FaStar className="mr-3" size={16} />
                        <span className="text-sm font-medium">View Credential</span>
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
