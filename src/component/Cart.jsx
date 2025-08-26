import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faTruck
} from '@fortawesome/free-solid-svg-icons';


const initialCartItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 49.99,
    quantity: 2,
    image: '/assets/images/groc28.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 89.99,
    quantity: 1,
    image: '/assets/images/groc29.jpg',
  },
];

function Cart() {

    
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

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
          <p className='cstm-con-cart'>CART </p>
          <p className='cstm-ho'>Home</p>
        </div>
      </div>
    <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
</div>
    <div className="cart-page container mt-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item row align-items-center mb-3 p-3 border rounded">
              <div className="col-md-2">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-4">
                <h5>{item.name}</h5>
              </div>
              <div className="col-md-2">
                <p>Qty: {item.quantity}</p>
              </div>
              <div className="col-md-2">
                <p>Rs.{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <div className="text-end">
            <h4>Total: Rs.{getTotal()}</h4>
            <Link to="/checkout" className='cstm-cart-link'>
            <button className="btn cstm-proc mt-3 mb-5">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default Cart;
