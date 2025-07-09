import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual EmailJS service, template, and user IDs
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const userId = 'YOUR_USER_ID';

    emailjs.sendForm(serviceId, templateId, formRef.current, userId)
      .then((result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      }, (error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'There was an error sending your message. Please try again.'
        });
        setLoading(false);
      });
  };

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
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✉️ Contact
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col justify-center"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-primary mb-6"
            >
              Let's Connect
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-8"
            >
              I'm always interested in new opportunities, collaborations, or just a friendly chat about data, analytics, or technology. Feel free to reach out through any of the channels below:
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <a 
                href="mailto:your.email@example.com" 
                className="flex items-center text-gray-700 hover:text-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <span>your.email@example.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FaLinkedin className="text-primary text-xl" />
                </div>
                <span>linkedin.com/in/yourprofile</span>
              </a>
              
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FaGithub className="text-primary text-xl" />
                </div>
                <span>github.com/yourusername</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
            >
              {formStatus.submitted && formStatus.success ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                    <p>{formStatus.message}</p>
                  </div>
                  <button 
                    onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  {formStatus.submitted && !formStatus.success && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4">
                      <p>{formStatus.message}</p>
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
