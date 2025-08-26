import React from 'react'
import { FaBolt } from "react-icons/fa";
import { FaHeart, FaShoppingBasket, FaUser, FaSearch } from "react-icons/fa";

const veggies = [
    {
        name: 'Green Broccoli',
        image: 'assets/images/groc28.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },
    {
        name: 'Purple Onion',
        image: 'assets/images/groc23.jpg',
        price: 12.0,
        rating: 5,
        soldOut: true,
    },
    {
        name: 'Chile Bell Pepper',
        image: 'assets/images/groc24.jpg',
        price: 18.0,
        rating: 0,
        soldOut: false,
    },
    {
        name: 'Green Cabbage',
        image: 'assets/images/groc22.jpg',
        price: 15.0,
        rating: 0,
        soldOut: false,
    },
    {
        name: 'Green Broccoli',
        image: 'assets/images/groc23.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

    {
        name: 'Green Broccoli',
        image: 'assets/images/groc23.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

    {
        name: 'Green Broccoli',
        image: 'assets/images/groc22.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

    {
        name: 'Green Broccoli',
        image: 'assets/images/groc24.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc24.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc24.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc24.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc24.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc31.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc30.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc29.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

     {
        name: 'Green Broccoli',
        image: 'assets/images/groc28.jpg',
        price: 8.0,
        oldPrice: 9.0,
        rating: 0,
        discount: '-11%',
        soldOut: false,
    },

];

const Shop = () => {
  return (
   <>
   <div className='container mb-5'>
    <div className="product-section-shop mt-5">
       
                   {veggies.map((item, index) => (
                       <div className="product-card mt-5 shadow" key={index}>
                           {item.discount && !item.soldOut && (
                               <div className="discount-badge">
                                   <FaBolt /> {item.discount}
                               </div>
                           )}
                           {item.soldOut && <div className="sold-out">SOLD OUT</div>}
                           <FaHeart className="heart-icon" />
   
                           <img src={item.image} alt={item.name} className="product-img" />
   
                           <div className="rating">
                               {item.rating === 5 ? '★★★★★' : '☆☆☆☆☆'} <span>({item.rating})</span>
                           </div>
   
                           <h3 className="product-title">{item.name}</h3>
   
                           <div className="price">
                               <span className="new-price">Rs.{item.price.toFixed(2)}</span>
                               {item.oldPrice && (
                                   <span className="old-price">Rs.{item.oldPrice.toFixed(2)}</span>
                               )}
                           </div>
   
                           <button className="cart-btn">
                               <FaShoppingBasket />
                           </button>
                       </div>
                   ))}
               </div>
               </div>
   </>
  )
}

export default Shop