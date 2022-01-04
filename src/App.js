// import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/Pages/About/AboutUs/AboutUs";
import BlogGrid from "./Components/Pages/BlogGrid/BlogGrid";
import BlogSingle from "./Components/Pages/BlogSingle/BlogSingle";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Contact from "./Components/Pages/Contact/Contact";
import Courses from "./Components/Pages/Courses/Courses";
import CourseSingle from "./Components/Pages/CourseSingle/CourseSingle";
import Faq from "./Components/Pages/Faq/Faq";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Registration/Registration";
import ShoppingCart from "./Components/Pages/ShoppingCart/ShoppingCart";
import TermsOfService from "./Components/Pages/TermsOfService/TermsOfService";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/blog" element={<BlogGrid />}></Route>
          <Route path="/blog-single" element={<BlogSingle />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/course-single" element={<CourseSingle />}></Route>
          <Route path="/termsofservice" element={<TermsOfService/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
        </Routes>
      <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
