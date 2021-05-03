import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
const LoginInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Form>
        <Form.Label>
          {" "}
          <h2>Welcome the login page</h2>
        </Form.Label>
        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address </Form.Label>
            <br />
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Container>
        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password </Form.Label>
            <br />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Container>
        <Container>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form.Group>
          <Link to="/signup" style={{ textAlign: "center" }}>
            Click here to sign up
          </Link>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginInPage;
