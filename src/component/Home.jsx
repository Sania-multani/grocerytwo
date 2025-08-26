
import React, { useState } from "react";
import { FaHeart, FaShoppingBasket, FaUser, FaSearch } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaRandom, FaCopy, FaStar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // basic styles
import "swiper/css/navigation"; // navigation styles
import "swiper/css/pagination"; // pagination styles
import Slider from "react-slick";
import { NavLink } from "react-router-dom";







const testimonials = [
    {
        text: "Delicious and easy to make! This premix has become a breakfast essential for me.",
        name: "Jessica",
        location: "From Chicago",
        image: "assets/images/groc27.jpg",
    },
    {
        text: "Delicious and easy to make! This premix has become a breakfast essential for me.",
        name: "Mike",
        location: "From New York",
        image: "assets/images/groc27.jpg",
    },
    {
        text: "I love how customizable it is. My kids enjoy it too!",
        name: "Anna",
        location: "From LA",
        image: "assets/images/groc27.jpg",
    },
    {
        text: "Finally, a vegetarian omelette I can enjoy every day!",
        name: "Sam",
        location: "From Austin",
        image: "assets/images/groc27.jpg",
    },
    {
        text: "Quick, delicious, and healthy — the best start to my mornings!",
        name: "Lily",
        location: "From Boston",
        image: "assets/images/groc27.jpg",
    },
];





const veggies = [
    {
        name: 'Green Broccoli',
        image: 'https://img.freepik.com/free-photo/broccoli-white-background_88281-18.jpg',
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

];



const menuItems = [
    { id: 1, img: "assets/images/groc1.png", name: "Pizza", desc: "Delicious cheese pizza" },
    { id: 2, img: "assets/images/groc7.png", name: "Burger", desc: "Juicy beef burger" },
    { id: 3, img: "assets/images/groc1.png", name: "Pasta", desc: "Creamy white sauce pasta" },
    { id: 4, img: "assets/images/groc21.png", name: "Salad", desc: "Healthy green salad" },
];


const banners = [
    {
        id: 1,
        img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/10/bn1.jpg",
        title: "",
        subtitle: "",
        desc: "",
        link: "#",
    },
    {
        id: 2,
        img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/10/bn2.jpg",
        title: "",
        subtitle: "",
        desc: "",
        link: "#",
    },
    {
        id: 3,
        img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/10/bn3.jpg",
        title: "Filet mignon",
        subtitle: "Premium Quality",
        desc: "",
        button: "Order now",
        link: "#",
    },
    {
        id: 4,
        img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/10/bn4.jpg",
        title: "",
        subtitle: "",
        desc: "",
        link: "#",
    },
];


const Home = () => {
    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        infinite: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

    }
    const [isOpen, setIsOpen] = useState(false);

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
    };

    const products = [
        {
            id: 1,
            name: "Green Broccoli",
            price: 8.0,
            oldPrice: 9.0,
            discount: "-11%",
            img: "assets/images/groc22.jpg",
            rating: 0,
        },
        {
            id: 2,
            name: "Purple Onion",
            price: 12.0,
            oldPrice: null,
            soldOut: true,
            img: "assets/images/groc22.jpg",
            rating: 5,
        },
        {
            id: 3,
            name: "Chile Bell Pepper",
            price: 18.0,
            oldPrice: null,
            img: "assets/images/groc22.jpg",
            rating: 0,
        },
        {
            id: 4,
            name: "Green Cabbage",
            price: 15.0,
            oldPrice: null,
            img: "assets/images/groc22.jpg",
            rating: 0,
        },
    ];

    return (
        <>
            {/* <nav className="navbar container">
              
                <div className="logo">PurePick</div>

                <ul className={`nav-links ${isOpen ? "open" : ""} `}>
                    <li className="nav-item ">
                        <NavLink to="/home" className="">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shop">Shop </NavLink>
                    </li>
                    <li className="nav-item">
                        <p to="/product">Product </p>
                    </li>
                    <li className="nav-item">
                        <p to="/pages">Pages </p>
                    </li>
                    <li className="nav-item">
                        <p to="/blog">Blog </p>
                    </li>

                   
                    <div className="mobile-icons">
                        <FaSearch />
                        <FaUser />
                        <FaHeart />
                        <FaShoppingBasket />
                    </div>
                </ul>

             
                <div className="icons">
                    <div className="search">
                        <FaSearch /> <span>SEARCH</span>
                    </div>
                    <FaUser className="icon" />

                    <div className="circle-icon">
                        <FaHeart />
                        <span className="badge">0</span>
                    </div>

                    <div className="circle-icon">
                        <FaShoppingBasket />
                        <span className="badge">0</span>
                    </div>
                </div>

              
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiOutlineMenu />}
                </div>
            </nav> */}


            <div className="cstm-bg-img2">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="cstm-ful-bg">
                            <div className="cstm-bg-image">

                            </div>

                            <div className="cstm-sec-full">
                                <div className="d-flex  flex-row justify-content-between">
                                    <div className="cstm-bg-text">
                                        <p className="cstm-en-text">
                                            Enjoy Our Delicious Food
                                        </p>
                                        <p className="cstm-text-freh">
                                            Fresh and healthy salad made with our own Chef Recipe.
                                            Special healthy and-fat free dish for those who want to lose weight
                                        </p>
                                        <div className="cstm-sec-expl d-flex justify-content-center align-items-center mt-5">
                                            <p className="cstm-expl mt-3">EXPLORE NOW</p>
                                            <div className="cstm-circle-half ms-2">
                                                <FaArrowRight className="cstm-arw-icn" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <img src="assets/images/groc3.png" className="cstm-img-banr"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="cstm-ful-bg">
                            <div className="cstm-bg-img3">

                            </div>

                            <div className="cstm-sec-full">
                                <div className="d-flex  flex-row justify-content-between">
                                    <div className="cstm-bg-text">
                                        <p className="cstm-en-text">
                                            Delicious Salad Everyone
                                        </p>
                                        <p className="cstm-text-freh">
                                            Fresh and healthy salad made with our own Chef Recipe.
                                            Special healthy and-fat free dish for those who want to lose weight
                                        </p>
                                        <div className="cstm-sec-expl d-flex justify-content-center align-items-center mt-5">
                                            <p className="cstm-expl mt-3">EXPLORE NOW</p>
                                            <div className="cstm-circle-half ms-2">
                                                <FaArrowRight className="cstm-arw-icn" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <img src="assets/images/groc19.png" className="cstm-img-banr2"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="cstm-ful-bg">
                            <div className="cstm-bg-image">

                            </div>

                            <div className="cstm-sec-full">
                                <div className="d-flex  flex-row justify-content-between">
                                    <div className="cstm-bg-text">
                                        <p className="cstm-en-text">
                                            Enjoy Our Delicious Food
                                        </p>
                                        <p className="cstm-text-freh">
                                            Fresh and healthy salad made with our own Chef Recipe.
                                            Special healthy and-fat free dish for those who want to lose weight
                                        </p>
                                        <div className="cstm-sec-expl d-flex justify-content-center align-items-center mt-5">
                                            <p className="cstm-expl mt-3">EXPLORE NOW</p>
                                            <div className="cstm-circle-half ms-2">
                                                <FaArrowRight className="cstm-arw-icn" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <img src="assets/images/groc3.png" className="cstm-img-banr"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            <h2 className="text-center mt-5">Category</h2>
            <div className="menu-slider">
                <div className="cstm-today">
                    <h3 className="today-menu mt-5">Today Menu</h3>
                    <h1 className="our-menu mt-5">Our Menu</h1>

                    <div className="slider-buttons">
                        <button className="circle-btn" onClick={prevSlide}>
                            &lt;
                        </button>
                        <button className="circle-btn" onClick={nextSlide}>
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="cstm-img-catg-slider">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {menuItems.map((item) => (
                            <div key={item.id} className="cstm-menu">
                                <div className="menu-card">
                                    <img src={item.img} alt={item.name} className="menu-img" />
                                    <h3 className="menu-title">{item.name}</h3>
                                    <p className="menu-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>





            <section className="banner-section container-fluid py-5">
                <div className="row g-3">
                    {/* Left column (2 banners stacked) */}
                    <div className="col-md-3 d-flex flex-column gap-3">
                        {banners.slice(0, 2).map((banner) => (
                            <div
                                key={banner.id}
                                className="banner-card position-relative rounded-4 overflow-hidden"
                            >
                                <a href={banner.link}>
                                    <img
                                        src={banner.img}
                                        alt="Banner"
                                        className="img-fluid w-100 banner-img"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Middle column (big banner with text) */}
                    <div className="col-md-6">
                        <div className="banner-card position-relative rounded-4 overflow-hidden h-100">
                            <img
                                src={banners[2].img}
                                alt="Banner"
                                className="img-fluid w-100 banner-img"
                            />
                            <div className="banner-content position-absolute text-start p-4">
                                <p className="banner-subtitle">{banners[2].subtitle}</p>
                                <h2 className="banner-title">{banners[2].title}</h2>
                                {banners[2].button && (
                                    <a href={banners[2].link} className="btn cstm-btm-ord mt-3">
                                        {banners[2].button}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right column (1 banner) */}
                    <div className="col-md-3">
                        <div className="banner-card position-relative rounded-4 overflow-hidden h-100">
                            <a href={banners[3].link}>
                                <img
                                    src={banners[3].img}
                                    alt="Banner"
                                    className="img-fluid w-100 banner-img"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="special-offer-section fadeInUp ">
                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-5 col-12 text-center text-lg-start px-4 py-5">
                            <div className="title_block">
                                <p className="sub_title">Special Offer</p>
                                <h4 className="title">
                                    Burgers With Onion Dip and Potato Chips
                                </h4>
                            </div>
                            <div className="desc mt-3">
                                <p>
                                    <strong>Per Serving:</strong> 510 calories; fat 26g; saturated
                                    fat 10g; cholesterol 88mg; sodium 883mg; protein 31g;
                                    carbohydrates 36g; sugars 9g; fiber 1g; iron 4mg; calcium 97mg.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center justify-content-lg-start align-items-center mt-4">
                                <a href="#" className="btn btn-dark rounded-pill px-4 d-flex align-items-center">
                                    <span>Order now</span>
                                    <span className="btn-icon ms-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                </a>
                                <div className="price ms-4">
                                    <span className="fw-bold fs-4">Rs.12.99</span>
                                    <s className="ms-2">Rs.25.00</s>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        {/* <div className="cstm-bg-sec-hom"> */}
                        {/* <div className="col-lg-7 col-12 text-center mt-4 mt-lg-0  border border-danger custom-bg ">
                                <div className="offer-images  border border-danger ">
                                    <img
                                        src="https://botanica.risingbamboo.com/wp-content/uploads/2022/09/sale.png"
                                        alt="Sale"
                                        className="main-offer-img img-fluid"
                                    />
                                    <img
                                        src="https://botanica.risingbamboo.com/wp-content/uploads/2022/09/sale_bf.png"
                                        alt="Sale Before"
                                        className="extra-offer-img img-fluid position-absolute"
                                    />
                                    <img
                                        src="https://botanica.risingbamboo.com/wp-content/uploads/2022/09/sale_af.png"
                                        alt="Sale After"
                                        className="extra-offer-img img-fluid position-absolute"
                                    />
                                </div>
                            </div> */}


                        {/* </div> */}
                        <div className=" col-lg-7 col-12 d-none d-lg-block ">
                            <div className="custom-bg">


                                <div className="cstm-img-groc">
                                    <img src="assets/images/groc1.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="d-none d-lg-block">
                <div className="custom-bg">

               
              <div className="cstm-img-groc">
                <img src="assets/images/groc1.png"></img>
              </div>
               </div>
            </div> */}


            <h1 className="text-center mt-5">Our Products</h1>

            <div className="product-section">

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





            <section className="special-offer-section fadeInUp mt-5">
                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">



                        <div className=" col-lg-7 col-12 d-none d-lg-block ">
                            <div className="custom-bg-sec">


                                <div className="cstm-img-groc-sec">
                                    <img src="assets/images/groc25.png"></img>
                                </div>
                            </div>
                        </div>
                        {/* Left Content */}
                        <div className="col-lg-5 col-12 text-center text-lg-start px-4 py-5">
                            <div className="title_block">
                                <p className="sub_title">Special Offer</p>
                                <h4 className="title">
                                    Burgers With Onion Dip and Potato Chips
                                </h4>
                            </div>
                            <div className="desc mt-3">
                                <p>
                                    <strong>Per Serving:</strong> 510 calories; fat 26g; saturated
                                    fat 10g; cholesterol 88mg; sodium 883mg; protein 31g;
                                    carbohydrates 36g; sugars 9g; fiber 1g; iron 4mg; calcium 97mg.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center justify-content-lg-start align-items-center mt-4">
                                <a href="#" className="btn cstm-ab rounded-pill px-4 d-flex align-items-center">
                                    <span>Order now</span>
                                    <span className="btn-icon ms-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                </a>
                                <div className="price ms-4">
                                    <span className="fw-bold fs-4">Rs.12.99</span>
                                    <s className="ms-2">Rs.25.00</s>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <div className="cstm-prodt-sec">
                <div className="cstm-prodt-sec-to">

                </div>
            </div> */}



            {/* Hover Section */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 position-relative ">
                        {/* <div className="cstm-prodt-sec shadow">
                            <div className="cstm-prodt-sec-to shadow">
                                <img src="assets/images/groc24.jpg" className=" cstm-img-prodt"></img>
                                </div>
                                </div> */}
                        {/* <div className="custom-product-cont">
                            <img src="assets/images/groc24.jpg" className=" cstm-img-prodt"></img>
                        </div>
                        <div className="custom-bg-box">

                        </div> */}
                    </div>

                    {/* <div className="col-lg-3">
                        <div className="cstm-prodt-sec ">
                            <div className="cstm-prodt-sec-to">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cstm-prodt-sec">
                            <div className="cstm-prodt-sec-to">
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="cstm-prodt-sec">
                            <div className="cstm-prodt-sec-to">
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>



            {/* <div className="container-fluid">
           <video className="video-background">
            <source src="https://botanica.risingbamboo.com/wp-content/uploads/2023/06/Video-HD.mp4" type="video.mp4"/>
           </video>
         </div> */}



            {/* <div className="video-background-container">
      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://botanica.risingbamboo.com/wp-content/uploads/2023/06/Video-HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-content">
        <h1>Welcome to My Page</h1>
        <p>This is over the parallax video background.</p>
      </div>
    </div> */}




            <section className="parallax-section">
                <div className="video-background-container">
                    <video
                        className="background-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="https://botanica.risingbamboo.com/wp-content/uploads/2023/06/Video-HD.mp4"
                    />
                </div>

                <div className="video-overlay"></div>

                <div className="video-content">
                    <span className="subtitle">TAKE A TRIP​</span>
                    <h2 className="title text-white">Explore our organic farm</h2>
                    <h2 className="description">Providing High Quality Products</h2>
                </div>
            </section>

            <div className="d-flex justify-content-center mb-5">
                <div className="cstm-test-div">
                    <p className="cstm-tst-sec">Testimonials</p>
                    <p className="text-center">what customer say about us</p>

                    <div className="p-8">
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
                </div>

                <div>

                </div>
            </div>


        </>
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


export default Home;

