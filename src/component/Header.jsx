import React, { useState } from 'react'
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import { FaHeart, FaShoppingBasket, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {

     const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantity: 2,
    image: "assets/images/groc28.jpg", // Replace with real image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "assets/images/groc28.jpg", // Replace with real image
  },
];


 const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <>
            <nav className="navbar container">
                {/* Logo */}
                <div className="logo">PurePick</div>

                {/* Desktop Menu */}
                <ul className={`nav-links ${isOpen ? "open" : ""} `}>
                    <li className="nav-item ">
                        <NavLink to="/" className="">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shop">Shop </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact">Contact </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog">Blog </NavLink>
                    </li>

                    {/* Mobile Icons */}
                    <div className="mobile-icons">
                        <FaSearch />
                        <FaUser />
                        <FaHeart />
                        <FaShoppingBasket />
                    </div>
                </ul>

                {/* Right Side Icons */}
                <div className="icons">
                    {/* <div    >
                        <FaSearch /> <span>SEARCH</span>
                    </div> */}

                    {!searchOpen && (
                        <button className="search-btn" onClick={() => setSearchOpen(true)}>
                            <div    >
                                <FaSearch />
                            </div>
                        </button>
                    )}

                    {searchOpen && (
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-input"
                            />
                            <button className="close-btn" onClick={() => setSearchOpen(false)}>
                                ✖
                            </button>
                        </div>
                    )}

                    <NavLink to="/login" className="cstm-log-link">
                        <button class="btn text-white" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">  <FaUser className="icon" /></button>
                    </NavLink>

                    {/* <div className="circle-icon">
                        <FaHeart />
                        <span className="badge">0</span>
                    </div> */}

                    <button className="btn cstm-shoping-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <FaShoppingBasket /></button>


                    {/* <div className="circle-icon">
                        <FaShoppingBasket />
                        <span className="badge">0</span>
                    </div> */}


                </div>

                {/* Mobile Menu Toggle */}
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiOutlineMenu />}
                </div>
            </nav>


            <div>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 cstm-heading-modl d-flex" id="exampleModalToggleLabel">
                                    <div className='cstm-log-in'><p className='cstm-log'>Login</p></div>
                                    <div className='ms-3 ' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><p className='cstm-reg'>Register</p></div>
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <p className='ms-4 fw-bold'>Insert your account information</p>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label className='cstm-em-adres'>Email address</label><br></br>
                                        <input type="email" placeholder='ENTER YOUR EMAIL' className='w-100 cstm-em-ad'></input>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='cstm-paswrd'>Password</label><br></br>
                                        <input type="password" placeholder='ENTER YOUR Password' className='w-100 cstm-em-ad'></input>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div className='d-flex'>
                                            <input type="checkbox" className='cstm-check-box'></input>
                                            <p className='cstm-rem-me'>Remember Me</p>
                                        </div>
                                        <div>
                                            <p className='cstm-lost-passwod '>Forget Password?</p>
                                        </div>
                                    </div>
                                    <NavLink to="/profile">
                                        <button type="text" className='w-100 mb-5 bg-success border border-none p-3 text-white fw-bold mt-5'>LOGIN</button>
                                    </NavLink>
                                </form>
                            </div>
                            {/* <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {/* <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Register</h1>
                                <button type="button" className="btn-close mb-5" data-bs-dismiss="modal" aria-label="Close" />
                            </div> */}
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 cstm-heading-modl d-flex" id="exampleModalToggleLabel">
                                    <div className=''><p className='cstm-log-to'>Login</p></div>
                                    <div className='ms-3 cstm-log-in-to ' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><p className='cstm-reg '>Register</p></div>
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            {/* <div className="modal-body">
                                Hide this modal and show the first with the button below.
                            </div> */}
                            <p className='ms-4 fw-bold mb-0'>Insert your account information</p>
                            <div className="modal-body ">
                                <form>
                                    <div className=' d-flex gap-3 mt-0'>
                                        <div className='w-100 '>
                                            <label className='cstm-em-adres'>Name</label><br></br>
                                            <input type="email" placeholder='ENTER YOUR EMAIL' className='w-100 cstm-em-ad'></input>
                                        </div>
                                        <div className='w-100'>
                                            <label className='cstm-em-adres'>Email address</label><br></br>
                                            <input type="email" placeholder='ENTER YOUR EMAIL' className='w-100 cstm-em-ad'></input>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='cstm-paswrd'>Password</label><br></br>
                                        <input type="password" placeholder='ENTER YOUR Password' className='w-100 cstm-em-ad'></input>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='cstm-paswrd'> Confirm Password</label><br></br>
                                        <input type="password" placeholder='ENTER YOUR Password' className='w-100 cstm-em-ad'></input>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div className='d-flex'>
                                            <input type="checkbox" className='cstm-check-box'></input>
                                            <p className='cstm-rem-me'>Remember Me</p>
                                        </div>
                                        <div>
                                            <p className='cstm-lost-passwod'>Forget Password?</p>
                                        </div>
                                    </div>
                                    <button type="text" className='w-100 mb-4 bg-success border border-none p-3 text-white fw-bold mt-5' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"> Register</button>
                                </form>
                            </div>

                            {/* <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {/* Sample Cart Items */}
            {cartItems.map((item) => (
            <div className="cart-item d-flex mb-3" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">
                  Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                </p>
                <p className="mb-0 fw-bold">
                  Total: Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="cstm-cros-btn">
                x
              </button>
            </div>
          ))}

          <hr />
          <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>
         <Link to="cart">
          <button className="btn cstm-check-cart w-100  mt-3">Checkout</button>
          </Link>
  </div>
</div>


        </>
    )
}

export default Header