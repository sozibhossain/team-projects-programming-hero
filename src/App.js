// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import Heading from "./Components/Pages/Contact/Heading";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="/contact" element={<Heading />}>
            
          </Route>
          {/* <Route path="/about">
            
          </Route>
          <Route path="/blog">
            
          </Route>
          <Route path="/courses">
            
          </Route> */}
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
