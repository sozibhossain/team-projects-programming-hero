// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/Pages/About/AboutUs/AboutUs";
import BlogGrid from "./Components/Pages/BlogGrid/BlogGrid";
import ContactDetail from "./Components/Pages/Contact/ContactDetail";
import Home from "./Components/Pages/Home/Home";
import TermsOfService from "./Components/Pages/TermsOfService/TermsOfService";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="/contact" element={<ContactDetail />}>
            
          </Route>
          {/* <Route path="/about">
            
          </Route>
          <Route path="/blog">
            
          </Route>
          <Route path="/courses">
            
          </Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/blog" element={<BlogGrid />}></Route>
          <Route path="/termsofservice" element={<TermsOfService/>}></Route>
        </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
