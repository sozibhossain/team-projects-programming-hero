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
import DahsBord from "./Components/Pages/DashBord/DashBord";
import Faq from "./Components/Pages/Faq/Faq";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound";
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
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
          <Route path="/termsofservice" element={<TermsOfService/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
          <Route path="/about" element={<PrivateRoute><AboutUs /></PrivateRoute>}></Route>
          <Route path="/blog" element={<PrivateRoute> <BlogGrid /> </PrivateRoute>}> </Route>
          <Route path="/blog-single" element={<PrivateRoute><BlogSingle /></PrivateRoute>}></Route>
          <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>}></Route>
          <Route path="/course-single" element={<PrivateRoute><CourseSingle /></PrivateRoute>}></Route>
          <Route path="/gallery" element={<PrivateRoute><Gallery/></PrivateRoute>}></Route>
          <Route path="/shopping-cart" element={<PrivateRoute><ShoppingCart/></PrivateRoute>}></Route>
          <Route path="/dash-bord" element={<PrivateRoute><DahsBord/></PrivateRoute>}></Route>
        </Routes>
      <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
