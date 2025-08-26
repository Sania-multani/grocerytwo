import React from 'react'

const Footer = () => {
  return (
    <>
                 <footer className="footer">
      <div className="footer-container">

        <div className="footer-section brand">
          <h2>PurePick</h2>
          <p>Healthy food. Happy life.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: support@mybrand.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer