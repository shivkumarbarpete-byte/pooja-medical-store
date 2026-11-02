import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container" id="contact">
      <div className="footer-content">
        <h3>Pooja & Shree Shayam Medical Store</h3>
        <p>Providing quality medicines and Healthcare products.</p>
        <p><strong>Contact:</strong> +91 9876543210 | info@poojamedical.com</p>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pooja & Shree Shayam Medical Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;