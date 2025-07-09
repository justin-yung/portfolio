import { motion } from 'framer-motion';
import profileImage from '../assets/profile-image.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="section-container">
        <div className="home-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="content-container"
          >
            <motion.div 
              className="name-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="home-name">Justin Yung</h1>
              <div className="chinese-name-container">
                <h2 className="chinese-name">翁正</h2>
                <p className="phonetic-name">/jung1 zeng3/</p>
              </div>
            </motion.div>
            
            <motion.h2 
              className="home-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Business Analyst | Data Reporting
            </motion.h2>
            
            <motion.p 
              className="home-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Motivated to build a career in the analytical space by applying data-driven thinking, process optimisation, and stakeholder collaboration. 
              Eager to contribute to business decision-making through actionable insights and continuous improvement.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="home-buttons"
            >
              <a href="#about" className="btn btn-primary">More About Me</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="home-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <div className="profile-image-wrapper">
              <div className="profile-image-glow"></div>
              <div className="profile-image-border">
                <img 
                  src={profileImage} 
                  alt="Justin Yung"
                  className="profile-image"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
