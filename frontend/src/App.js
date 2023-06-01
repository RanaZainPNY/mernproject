import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import ContactUs from "./components/website/Contactus/Contactus";
import Signin from "./components/website/SignIn/Signin";
import Footer from "./components/website/Footer/Footer";
import About from "./components/website/About/About";
// import Carousel from './components/website/carousel/carousel'
import LimitedEditionPlates from "./components/website/categoriespag/LimitedEditionPlates";
import Home from "./components/admin/Home/Home";
import Register from "./components/website/Register/Register";


function App() {
  return (
    <>
      <Router>        
        <Header />
        {/* <Carousel/> */}
        <Routes>
          <Route path="/" element={<Pages />}></Route>
          <Route path="/home" element={< Pages />}></Route>
          <Route path="/shop" element={< LimitedEditionPlates />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/admin" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer />
      </Router>

      {/* <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
        </Switch>
        <Footer />
      </Router> */}
    </>
  );
}

export default App;
