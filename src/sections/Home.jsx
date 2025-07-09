import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="section-container">
        <div className="home-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="home-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Justin Yung
            </motion.h1>
            
            <motion.h2 
              className="home-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Business Analyst | Data Enthusiast | Problem Solver
            </motion.h2>
            
            <motion.p 
              className="home-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transforming complex data into meaningful insights and business solutions.
              Passionate about driving digital transformation through data-driven decision making.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="home-buttons"
            >
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
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
                {/* Replace with your profile image */}
                <img 
                  src="https://via.placeholder.com/400x400" 
                  alt="Profile"
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
