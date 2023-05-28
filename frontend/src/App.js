import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import ContactUs from "./components/website/Contactus/Contactus";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
          <Route path="/contact" exact>
            <ContactUs/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
