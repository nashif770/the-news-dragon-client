import React, { useContext } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvide";



const Login = () => {

  const {signInUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/category/0';

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target.form;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signInUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from, {replace: true})
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <Container className="w-25 mx- mt-4">
      <h3>Please Login</h3>
      <Form onClick={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br></br>

        <Form.Text className="text-secondary">
          Don't have an account? 
          <Link to='/register'>Register</Link>
        </Form.Text>
        <br></br>


        <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
        <br></br>
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>

    </Container>
  );
};

export default Login;
