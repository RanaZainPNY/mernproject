import logo from './logo.svg';
import './App.css';
import Carousel from './components/website/carousel/carousel'
import Signup from './components/website/Signup/Signup';
import Signin from './components/website/SignIn/Signin';

function App() {
  return (
    <div>
      <Signin/>      
      <hr />
      
      <Carousel/>
      <Signup/>
    </div>
  );
}

export default App;
