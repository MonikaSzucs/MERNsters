<<<<<<< Updated upstream
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar/navbar';
=======
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Login.css'

>>>>>>> Stashed changes

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event) {
    event.preventDefault();
    }
    
    return (
        <div className="Login">
        <div>
            <NavBar/>
            <Container>
            <Row>
                <Col sm={4}>
                
                </Col>
                <Col sm={4}>
                LOGIN HERE
                </Col>
                <Col sm={4}>
                
                </Col>
            </Row>
            </Container>
        </div>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    )
}
// Login