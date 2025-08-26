import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import ProductSlider from './component/ProductSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './component/Shop';
import Layout from './component/Layout';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Login from './component/Login';
import Profile from './component/Profile';
import Cart from './component/Cart';
import Checkout from './component/Checkout';



function App() {
  return (
    <>
  {/* <Home/> */}
  {/* <Slides/> */}
  {/* <ProductSlider/> */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}></Route>
     <Route path="/shop" element={<Shop/>}/>
    <Route path="/contact" element={<Contact/>}/>
     <Route path="/blog" element={<Blog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
       <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
     </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
