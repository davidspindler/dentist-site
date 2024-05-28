import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section address">
                    <h3>Our Address</h3>
                    <p>123 Sample Street</p>
                    <p>Sample City, SC 12345</p>
                    <p>Country</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;