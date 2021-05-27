import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selector";

const LoginInPage = () => {
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

  function SubmitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container style={{ height: "100vh", width: "25%" }}>
      <Form>
        <Form.Label>
          {" "}
          <h2>Welcome the login page</h2>
        </Form.Label>
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
            <Button variant="primary" type="submit" onClick={SubmitForm}>
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
