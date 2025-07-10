import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPassport, FaLightbulb, FaUsers, FaTrophy, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const About = () => {
  const [selectedInterests, setSelectedInterests] = useState({});
  
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
  
  // Interests with descriptions
  const interests = [
    { 
      name: "Data Visualisation", 
      description: "Creating meaningful visual representations of data to help identify patterns and insights. I enjoy using tools like Power BI and Tableau to transform complex datasets into clear, actionable visualizations." 
    },
    { 
      name: "Process Optimisation", 
      description: "Streamlining workflows and eliminating inefficiencies to improve business outcomes. I enjoy analysing current processes and finding innovative ways to enhance them." 
    },
    { 
      name: "Problem Solving", 
      description: "Tackling complex challenges through analytical thinking and creative solutions. I enjoy breaking down problems into manageable components and developing effective strategies." 
    },
    { 
      name: "Movies", 
      description: "I love movies. Not just watching them, but really diving into them. I enjoy picking them apart, thinking about why a scene works, and what makes a story stick. It’s one of my favourite ways to relax and get inspired. My current favourite would be Past Lives directed by Celine Song." 
    },
    { 
      name: "Travel", 
      description: "Exploring new cultures, cuisines, and perspectives. Travel broadens my horizons and helps me approach problems with a global mindset." 
    },
    { 
      name: "Running", 
      description: "Maintaining physical fitness and mental clarity through regular exercise. Running helps me stay focused and energized for daily challenges." 
    },
    { 
      name: "Volleyball", 
      description: "Enjoying team sports that require coordination and cooperation. Volleyball has taught me valuable lessons about teamwork and effective communication." 
    }
  ];

  // Function to handle interest click
  const handleInterestClick = (interest) => {
    setSelectedInterests(prev => ({
      ...prev,
      [interest.name]: interest
    }));
  };

  // Function to close the interest modal
  const closeModal = (interestName) => {
    setSelectedInterests(prev => {
      const newState = { ...prev };
      delete newState[interestName];
      return newState;
    });
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header-container">
            <h2 className="section-title text-center text-xl font-bold uppercase double-underline">
              ABOUT ME
            </h2>
          </div>
        </motion.div>
        
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
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Analytical and results-driven Operations Support Analyst with hands-on experience in <b>SQL, Power BI, and stakeholder engagement</b>. 
            Professionally certified in Business Analysis (ECBA®) and a Bachelor of Commerce graduate from The University of Queensland, majoring in Business Information Systems and Finance. 
            Proven ability to <b>optimise business processes, lead cross-functional teams, </b>and<b> deliver data-driven insights</b> to support operational decision-making. 
            Demonstrated success in procurement operations, cost reduction initiatives, and stakeholder communication. 
            Fluent in English, Mandarin, and Cantonese, with strong technical and interpersonal skills to support scalable and efficient business outcomes.
            </p>
          </motion.div>
          
          {/* Right Column - Things I Love & Location */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Things I Love</h3>
            
            {/* Interests Display - Spread Out */}
            <div className="interests-container mb-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  onClick={() => handleInterestClick(interest)}
                  className="interest-bubble"
                >
                  {interest.name}
                </div>
              ))}
            </div>
            
            {/* Location & Work Eligibility */}
            <h3 className="text-2xl font-bold mb-4 text-primary">Location & Work Eligibility</h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-secondary mr-2" />
                <span className="text-gray-700">Brisbane, Australia | Open to relocate to Metro Sydney and Melbourne Areas</span>
              </div>
              <div className="flex items-center">
                <FaPassport className="text-secondary mr-2" />
                <span className="text-gray-700">Australian Citizen</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Interest Modal */}
      {Object.values(selectedInterests).map((interest) => (
        <div key={interest.name} className="interest-modal-overlay" onClick={() => closeModal(interest.name)}>
          <div className="interest-modal" onClick={(e) => e.stopPropagation()}>
            <button className="interest-modal-close" onClick={() => closeModal(interest.name)}>
              <FaTimes />
            </button>
            <h3 className="interest-modal-title">{interest.name}</h3>
            <p className="interest-modal-description">{interest.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
