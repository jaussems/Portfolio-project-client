import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
const SignupPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Form>
        <Form.Label>
          {" "}
          <h2>Welcome the sign up page</h2>
        </Form.Label>
        <Col xs={7}>
          <Container style={{ padding: "5px", margin: "10px" }}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>First name </Form.Label>
              <br />
              <Form.Control type="email" placeholder="Enter first name" />
            </Form.Group>
          </Container>
        </Col>
        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Last Name </Form.Label>
            <br />
            <Form.Control type="email" placeholder="Enter last name" />
          </Form.Group>
        </Container>

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
              Sign up
            </Button>
          </Form.Group>
        </Container>
      </Form>
    </Container>
  );
};

export default SignupPage;
