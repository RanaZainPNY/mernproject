import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import ContactUs from "./components/website/Contactus/Contactus";
import Signin from "./components/website/SignIn/Signin";
import Footer from "./components/website/Footer/Footer";
import About from "./components/website/About/About";
import Shope from "./components/website/Shopes/Shope";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />}></Route>
          <Route path="/shope" element={< Shope />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/about" element={<About/>}></Route>
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
