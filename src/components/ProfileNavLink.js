import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function ProfileNavLink() {
  return (
    <>
      <Nav.Item as="li">
        <Nav.Link eventKey="Coins" href="/users/:userId">
          Your profile
        </Nav.Link>
      </Nav.Item>
    </>
  );
}
