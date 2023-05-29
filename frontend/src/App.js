import "./App.css";
import { BrowserRouter,Router,Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Home from "./component/mainpage/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
        <Header />
        
          <Route path="/" exact Component={Home}/>
          
      
      </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
