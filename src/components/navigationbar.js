import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navigationbar = () => {
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
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
