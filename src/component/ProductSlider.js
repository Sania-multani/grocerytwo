// // components/TestimonialSlider.js
// import React from "react";
// import Slider from "react-slick";


// const testimonials = [
//   {
//     text: "As a vegetarian, I always miss out on the classic breakfast staple of omelettes. But with Botanica Store's Veg Omelette premix, I can finally enjoy a tasty and protein-packed breakfast option. The mix is easy to use and customize with my favorite veggies.",
//     name: "Jessica",
//     location: "From Chicago",
//     image: "assets/images/groc27.jpg",
//   },
//   {
//     text: "Delicious and easy to make! This premix has become a breakfast essential for me.",
//     name: "Mike",
//     location: "From New York",
//     image: "assets/images/groc27.jpg",
//   },
//   {
//     text: "I love how customizable it is. My kids enjoy it too!",
//     name: "Anna",
//     location: "From LA",
//     image: "assets/images/groc27.jpg",
//   },
//   {
//     text: "Finally, a vegetarian omelette I can enjoy every day!",
//     name: "Sam",
//     location: "From Austin",
//     image: "assets/images/groc27.jpg",
//   },
// ];

// const ProductSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <div className="testimonial-wrapper">
//       <Slider {...settings}>
//         {testimonials.map((item, index) => (
//           <div className="testimonial" key={index}>
//             <p className="testimonial-text">"{item.text}"</p>
//             <div className="profile-section">
//               <img src={item.image} alt={item.name} className="avatar" />
//               <p className="profile-name"><strong>{item.name}</strong> - {item.location}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // Custom Arrow Components
// function CustomPrevArrow(props) {
//   const { onClick } = props;
//   return <div className="custom-arrow left" onClick={onClick}>❮</div>;
// }

// function CustomNextArrow(props) {
//   const { onClick } = props;
//   return <div className="custom-arrow right" onClick={onClick}>❯</div>;
// }

// export default ProductSlider;














import React from "react";
import Slider from "react-slick";


const testimonials = [
  {
    text: "As a vegetarian, I always miss out on the classic breakfast staple of omelettes. But with Botanica Store's Veg Omelette premix, I can finally enjoy a tasty and protein-packed breakfast option. The mix is easy to use and customize with my favorite veggies.",
    name: "Jessica",
    location: "From Chicago",
    image: "/images/user1.jpg",
  },
  {
    text: "Delicious and easy to make! This premix has become a breakfast essential for me.",
    name: "Mike",
    location: "From New York",
    image: "/images/user2.jpg",
  },
  {
    text: "I love how customizable it is. My kids enjoy it too!",
    name: "Anna",
    location: "From LA",
    image: "/images/user3.jpg",
  },
  {
    text: "Finally, a vegetarian omelette I can enjoy every day!",
    name: "Sam",
    location: "From Austin",
    image: "/images/user4.jpg",
  },
  {
    text: "Quick, delicious, and healthy — the best start to my mornings!",
    name: "Lily",
    location: "From Boston",
    image: "/images/user5.jpg",
  },
];

const ProductSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    infinite: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="slide-container">
            <div className="slide-inner">
              <div className="avatar-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="avatar-circle"
                />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">"{item.text}"</p>
                <p className="profile-name">
                  <strong>{item.name}</strong> - {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function CustomPrevArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow left" onClick={onClick}>❮</div>;
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow right" onClick={onClick}>❯</div>;
}

export default ProductSlider;
