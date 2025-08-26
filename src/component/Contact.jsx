import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faTruck
} from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} className="topbar-icon" />
            +0123-456-789
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="topbar-icon" />
            example@domain.com
          </span>
        </div>
        <div className="topbar-right">
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="topbar-icon" />
            PO Box 1622 Bamboo Street West
          </span>
          <span>
            <FontAwesomeIcon icon={faTruck} className="topbar-icon" />
            Free shipping for order above <strong>Rs. 200.00</strong>
          </span>
        </div>
      </div>

      <div className='cstm-cont-sec'>
        <div className='cstm-con-text'>
          <p className='cstm-con'>CONTACT US </p>
          <p className='cstm-ho'>Home</p>
        </div>
      </div>

      <div style={{ borderRadius: "20px", width: "100%", width: "850px", overflow: "hidden", marginLeft: "240px", textAlign: "center", borderRadius: "20px" }}>

        <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d85326.576651073!2d77.092979!3d28.6723666!3m2!1i1024!2i768!4f13.1!2m1!1sKD-3%2C%20Third%20Floor%2C%20near%20Kohat%20Enclave%20metro%20station%2C%20Delhi%20-%20110034!5e1!3m2!1sen!2sin!4v1756098462242!5m2!1sen!2sin" height="590" width="99.9%" marginLeft="20px" marginRight="30px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


      <div className='container-fluid mt-5 mb-5'>
        <div className='row'>
          <div className='col-lg-6 px-3 '>
            <p className='cstm-get'>GET IN TOUCH</p>
            <p>Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
            <form>
              <div className=' '>
                <input type="text" placeholder='Your Name' className=' px-3 border border-dark  cstm-a'></input>
                <input type="email" placeholder='Your Email' className=' px-3 border border-dark cstm-a ms-3'></input>
              </div>
              <div>
                <input type="text" placeholder='Subject' className=' px-3 border border-dark cstm-b mt-3 cstm-b'></input>
              </div>
              {/* <div>
             <input type="text" placeholder='Your Message'  className='border border-dark w-100 mt-3 cstm-c '></input>
          </div> */}
              <textarea
                className="contact-textarea px-3"
                placeholder="Your Message"
                rows={8}
              />

              <button type="submit" className='mt-4 ms-4 p-2 px-4 bg-success text-white border border-none fs-5'>Submit</button>
            </form>
          </div>
          <div className='col-lg-6    px-5'>
            <p className='mt-5'><strong>Address:</strong>123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</p>

            <p><strong>Email:</strong>support@domain.com</p>
            <p><strong>Call Us:</strong>88293820</p>
            <p><strong>Opening time:</strong>Our store has re-opened for shopping, exchanges every day 11am to 7pm</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact