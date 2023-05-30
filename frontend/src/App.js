import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import ContactUs from "./components/website/Contactus/Contactus";
import Signin from "./components/website/SignIn/Signin";
import Footer from "./components/website/Footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
          <Route path="/contact" exact>
            <ContactUs/>
          </Route>
          <Route path="/signin" exact>
            <Signin/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
