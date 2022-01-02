// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/Pages/About/AboutUs/AboutUs";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";



function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="/contact" element={<Contact />}>
            
          </Route>
          {/* <Route path="/about">
            
          </Route>
          <Route path="/blog">
            
          </Route>
          <Route path="/courses">
            
          </Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
