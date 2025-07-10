const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {year} Justin Yung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
