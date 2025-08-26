import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faTruck
} from '@fortawesome/free-solid-svg-icons';
import { FaBars } from "react-icons/fa"; // for hamburger icon
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Blog = () => {

    const categories = [
        "Basic knowledge",
        "Coffee",
        "Cooking recipe",
        "Cooking tips",
        "Food preservation",
        "Food Processing",
        "Honey",
        "Nutrition",
        "Uncategorized",
        "weight Loss"
    ];

    const blogs = [
        {
            id: 1,
            image: "assets/images/groc5.jpg", // Replace with your image
            title: "12 Healthy Fruits and Vegetables Must-Haves to...",
            description:
                "Duis commodo faucibus lectus, et accumsan quam egestas at. Praesent eros mi, condimentum sit amet felis quis, hendrerit ullamcorper turpis vehicula nibh mauris.",
            author: "Admin",
            date: "November 16, 2022",
        },
        {
            id: 2,
            image: "assets/images/groc5.jpg", // Replace with your image
            title: "Orange Fresh Juice Nutrition Facts, Calories and Health...",
            description:
                "Duis commodo faucibus lectus, et accumsan quam egestas at. Praesent eros mi, condimentum sit amet felis quis, hendrerit ullamcorper turpis vehicula nibh mauris.",
            author: "Admin",
            date: "November 16, 2022",
        },

    ];

     const posts = [
    {
      id: 1,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices fermentum tincidunt nunc...",
      date: "March 14, 2024",
    },
    {
      id: 2,
      image: "assets/images/groc33.jpg",
      title: "Eleifend augue volutpat tincidunt nisl at dum facilisis...",
      date: "March 14, 2024",
    },
    {
      id: 3,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices purus fermentum tincidunt nunc...",
      date: "March 14, 2024",
    },
     {
      id: 3,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices purus fermentum tincidunt nunc...",
      date: "March 14, 2024",
    },
     {
      id: 3,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices purus fermentum tincidunt nunc...",
      date: "March 14, 2024",
    },
     {
      id: 3,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices purus fermentum tincidunt nunc...",
      date: "March 14, 2024",
    },
     {
      id: 3,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices purus fermentum tincidunt nunc...",
      date: "March 14, 2024",
    }, {
      id: 3,
      image: "assets/images/groc33.jpg",
      title: "Maecenas ultrices purus fermentum tincidunt nunc...",
      date: "March 14, 2024",
    },
  ];



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
                    <p className='cstm-con-blog'>NUTRITION </p>
                    <p className='cstm-ho-blog'>Home</p>
                </div>
            </div>

            <div className='container-fluid '>
             <div className='row'>
                <div className='col-lg-4  '>
            <div className="categories-container ms-5 mt-3">
                {/* Header */}
                <div className="categories-header">
                    <FaBars className="menu-icon" />
                    <h2>Categories</h2>
                </div>

                {/* List */}
                <ul className="categories-list">
                    {categories.map((cat, index) => (
                        <li key={index}>
                            <label>
                                <input type="radio" name="category" />
                                <span>{cat}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <div className="search-container mt-4">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter your keyword"
          className="search-input"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
    </div> */}

    <div className="recent-posts-container mb-5">
      <h2 className="recent-title">Recent Posts</h2>
      <hr className="divider" />

      <div className="recent-posts-list ">
        {posts.map((post) => (
          <div key={post.id} className="recent-post">
            <img src={post.image} alt={post.title} className="recent-image" />
            <div className="recent-content">
              <h3 className="recent-post-title">{post.title}</h3>
              <p className="recent-date">
                <FaCalendarAlt className="icon" /> {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>


            </div>
            <div className='col-lg-8 '>
            <div className="blog-container d-flex">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        {/* Image */}
                        <img src={blog.image} alt={blog.title} className="blog-image" />

                        {/* Meta Info */}
                        <div className="blog-meta">
                            <span>
                                <FaUser className="icon" /> By {blog.author}
                            </span>
                            <span>
                                <FaCalendarAlt className="icon" /> {blog.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="blog-title">{blog.title}</h3>

                        {/* Description */}
                        <p className="blog-description">{blog.description}</p>
                    </div>
                ))}
            </div>

             <div className="blog-container d-flex">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        {/* Image */}
                        <img src={blog.image} alt={blog.title} className="blog-image" />

                        {/* Meta Info */}
                        <div className="blog-meta">
                            <span>
                                <FaUser className="icon" /> By {blog.author}
                            </span>
                            <span>
                                <FaCalendarAlt className="icon" /> {blog.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="blog-title">{blog.title}</h3>

                        {/* Description */}
                        <p className="blog-description">{blog.description}</p>
                    </div>
                ))}
            </div>


             <div className="blog-container d-flex">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        {/* Image */}
                        <img src={blog.image} alt={blog.title} className="blog-image" />

                        {/* Meta Info */}
                        <div className="blog-meta">
                            <span>
                                <FaUser className="icon" /> By {blog.author}
                            </span>
                            <span>
                                <FaCalendarAlt className="icon" /> {blog.date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="blog-title">{blog.title}</h3>

                        {/* Description */}
                        <p className="blog-description">{blog.description}</p>
                    </div>
                ))}
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Blog