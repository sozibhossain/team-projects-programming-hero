// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/Pages/About/AboutUs/AboutUs";
import BlogGrid from "./Components/Pages/BlogGrid/BlogGrid";
import Contact from "./Components/Pages/Contact/Contact";
import TermsOfService from "./Components/Pages/TermsOfService/TermsOfService";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/blog" element={<BlogGrid />}></Route>
          <Route path="/termsofservice" element={<TermsOfService/>}></Route>
        </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
