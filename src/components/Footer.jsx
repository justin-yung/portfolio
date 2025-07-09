import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {year} Justin Yung. Built with 
          <FaHeart className="footer-icon" /> 
          using React
        </p>
        <p className="footer-copyright">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
