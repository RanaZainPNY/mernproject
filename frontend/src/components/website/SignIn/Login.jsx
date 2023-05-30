import { useState } from'react';
import { Link, useHistory } from'react-router-dom';
import axios from 'axios';
// Import fontawesome icons
import { faEnvelopeOpenText, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import Bootrap styles & Components
import Container from'react-bootstrap/Container'
import Row from'react-bootstrap/Row'
import Col from'react-bootstrap/Col'
import Button from'react-bootstrap/Button'
import Alert from'react-bootstrap/Alert'
// Stylesheets
import './Login.css';
const API_URL = process.env.REACT_APP_API_URL; // Set up backend URL as env variable
function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(null); 
  const history = useHistory(); 
  async function handleSubmit(event) {
    event.preventDefault(); 
    try{
      await axios.post(`${API_URL}/auth/signin`, { email, password }); 
      history.push('/'); // Redirect user once logged in
    } catch (err){
        console.log('Error:', err.response.data ); 
        if (err.response && err.response.status === 401 ) 
          setError("Invalid Email or Password");  
        else
          setError("Something went wrong!");  
    }
  };
  return (
    <div className="wrapper">
      {/* Display error message */}
      {error? (<Alert variant='danger'>{error}</Alert>) : null}
      <Container>
        <h1 style={{ textAlign:'center', marginBottom:"7%" }}>Sign In</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="formBasicEmail">
            <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"/> 
            <FormControl
              type="text"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <FontAwesomeIcon icon={faUnlockAlt} size="lg"/> 
            <FormControl 
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </FormGroup>
          
          <Button block type="submit" > Sign In </Button>
          
        </Form>
        
        Don't Have An Account? <Link to="/signup">Signup Instead!</Link><br/>
        
      </Container>
    </div>
  );
};
export default Login;