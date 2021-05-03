import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { selectToken } from "../store/user/selector";
import { signUp } from "../store/user/actions";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(firstName, email, password));

    setEmail("");
    setPassword("");
    setFirstName("");
  }

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
              <Form.Control
                type="email"
                placeholder="Enter first name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>
          </Container>
        </Col>

        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address </Form.Label>
            <br />
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </Container>
        <Container style={{ padding: "5px", margin: "10px" }}>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password </Form.Label>
            <br />
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </Container>
        <Container>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
        </Container>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
};

export default SignupPage;
