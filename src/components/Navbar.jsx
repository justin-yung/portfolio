import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const toggleNav = () => setNav(!nav);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle nav highlight based on scroll position
      const scrollPosition = window.scrollY;
      
      // Determine if we're on the home page (top of the page)
      // Check if we're in the home section - above the first section in our sections array
      const firstSectionElement = document.getElementById(sections[0].id);
      if (firstSectionElement) {
        setIsHomePage(scrollPosition < firstSectionElement.offsetTop - 100);
      }
      
      // Make navbar background opaque after scrolling
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          return {
            id: section.id,
            offsetTop: element.offsetTop,
            height: element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, offsetTop, height } = sectionElements[i];
        if (scrollPosition >= offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = isHomePage 
    ? (scrolled ? 'navbar navbar-scrolled black-navbar' : 'navbar black-navbar')
    : (scrolled ? 'navbar navbar-scrolled' : 'navbar');

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-logo"
        >
          <a href="#home">
            <div className="logo-circle">
              <span className="logo-chinese">正</span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {sections.map(section => (
            <motion.li 
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: sections.indexOf(section) * 0.1 }}
              className="navbar-item"
            >
              <a 
                href={`#${section.id}`}
                className={`navbar-link ${
                  activeSection === section.id ? 'active' : ''
                }`}
              >
                {section.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={toggleNav}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <ul className="mobile-menu-list">
              {sections.map((section, index) => (
                <motion.li 
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mobile-menu-item"
                >
                  <a 
                    href={`#${section.id}`}
                    onClick={toggleNav}
                    className={`mobile-menu-link ${
                      activeSection === section.id ? 'active' : ''
                    }`}
                  >
                    {section.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
