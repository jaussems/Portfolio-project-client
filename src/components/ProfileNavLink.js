import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { selectUser } from "../store/user/selector";
import { useSelector } from "react-redux";
export default function ProfileNavLink() {
  const user = useSelector(selectUser);

  return (
    <>
      <Nav.Item as="li">
        <Nav.Link eventKey="Coins" href={`/user/${user.id}`}>
          Your profile
        </Nav.Link>
      </Nav.Item>
    </>
  );
}
