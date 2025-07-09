import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPassport, FaLightbulb, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Leadership qualities
  const leadershipQualities = [
    { icon: <FaLightbulb />, text: "Strategic Thinking" },
    { icon: <FaUsers />, text: "Team Mentorship" },
    { icon: <FaTrophy />, text: "Results-Driven" },
  ];
  
  // Interests
  const interests = [
    "Data Visualization", "Digital Transformation", "Process Optimization", 
    "Machine Learning", "Problem Solving", "Music", "Travel"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👤 About Me
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Professional Summary */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A data-driven Business Analyst with 5+ years of experience transforming complex business problems 
              into actionable insights. Specializing in data analytics, visualization, and process optimization 
              to drive business growth and efficiency. Currently seeking to leverage my analytical expertise 
              to help organizations make data-driven decisions and implement effective business solutions.
            </p>
            
            {/* Leadership Qualities */}
            <h3 className="text-2xl font-bold mb-4 text-primary">Leadership Qualities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {leadershipQualities.map((quality, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-gray-50 shadow-sm"
                >
                  <div className="text-secondary text-xl mr-3">
                    {quality.icon}
                  </div>
                  <span className="text-gray-700">{quality.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Things I Love & Location */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Things I Love</h3>
            <div className="flex flex-wrap mb-8">
              {interests.map((interest, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 m-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
            
            {/* Location & Work Eligibility */}
            <h3 className="text-2xl font-bold mb-4 text-primary">Location & Work Eligibility</h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-secondary mr-2" />
                <span className="text-gray-700">Sydney, Australia</span>
              </div>
              <div className="flex items-center">
                <FaPassport className="text-secondary mr-2" />
                <span className="text-gray-700">Full Work Rights</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
