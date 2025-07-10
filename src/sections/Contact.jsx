import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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

  return (
    <section id="contact" className="py-20 pb-32 bg-white">
      <div className="section-container">
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header-container">
            <h2 className="section-title text-center text-xl font-bold uppercase double-underline">
              CONTACT ME
            </h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center"
        >
          <p className="text-center text-gray-700 mb-6 max-w-xl">
            I'm always open to discussing new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
          
          <motion.div
            variants={itemVariants}
            className="contact-cards-container"
          >
            <div className="contact-card">
              <div className="contact-card-header">
                <FaEnvelope className="contact-card-icon" />
                <h3 className="contact-card-title">Email</h3>
              </div>
              <p className="contact-card-text">yungjustin806@gmail.com</p>
              <a 
                href="mailto:yungjustin806@gmail.com" 
                className="contact-card-button"
              >
                Send Email
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <FaLinkedin className="contact-card-icon" />
                <h3 className="contact-card-title">LinkedIn</h3>
              </div>
              <p className="contact-card-text">Connect with me on LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/justin-yung-277711226/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-button"
              >
                View Profile
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <FaGithub className="contact-card-icon" />
                <h3 className="contact-card-title">GitHub</h3>
              </div>
              <p className="contact-card-text">Check out my code repositories</p>
              <a 
                href="https://github.com/justin-yung" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card-button"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
