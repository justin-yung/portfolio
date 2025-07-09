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
    <section id="contact" className="py-24 pb-36 bg-white contact-section-bg">
      <div className="section-container relative z-10">
        <motion.div
          className="flex justify-center mb-16"
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
        
        {/* Contact Information */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-wrap justify-center items-start gap-6 md:gap-12 w-full"
          >
            <div className="contact-icon-container flex flex-col items-center">
              <a 
                href="mailto:yungjustin806@gmail.com" 
                className="text-gray-700 hover:text-secondary transition-colors duration-300 flex flex-col items-center"
              >
                <div className="rounded-full bg-gray-100 flex items-center justify-center mb-5 contact-icon-bg">
                  <FaEnvelope className="text-primary contact-icon" />
                </div>
                <span className="font-medium">Email</span>
              </a>
            </div>
            
            <div className="contact-icon-container flex flex-col items-center">
              <a 
                href="https://www.linkedin.com/in/justin-yung-277711226/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-secondary transition-colors duration-300 flex flex-col items-center"
              >
                <div className="rounded-full bg-gray-100 flex items-center justify-center mb-5 contact-icon-bg">
                  <FaLinkedin className="text-primary contact-icon" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            
            <div className="contact-icon-container flex flex-col items-center">
              <a 
                href="https://github.com/justin-yung" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-secondary transition-colors duration-300 flex flex-col items-center"
              >
                <div className="rounded-full bg-gray-100 flex items-center justify-center mb-5 contact-icon-bg">
                  <FaGithub className="text-primary contact-icon" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
