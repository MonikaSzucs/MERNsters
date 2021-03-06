import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import NavBar from "../Components/NavBar/navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

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
    <div>
      <NavBar />

      <div className="Login">
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>Login HERE</Col>
            <Col sm={4}></Col>
          </Row>
        </Container>

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
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
// Login
