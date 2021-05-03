import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { selectUser, selectToken } from "../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import Loggedin from "./LoggedIn";
import Loggedout from "./Loggedout";

const Navigationbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <Loggedin /> : <Loggedout />;
  return (
    <Navbar bg="ligth" expand="lg">
      <Nav
        className="justify-content-center"
        style={{ width: "100%", height: "25px" }}
        fill
      >
        <Nav
          defaultActiveKey="/"
          as="ul"
          style={{
            listStyleType: "none",
            display: "flex",
            backgroundColor: "cyan",
            padding: "5px",
          }}
        >
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="Coins" href="/users/:userId">
              Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {loginLogoutControls}
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
