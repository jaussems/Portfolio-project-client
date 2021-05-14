import React from "react";

import Nav from "react-bootstrap/Nav";
import { selectUser } from "../store/user/selector";
import { useSelector } from "react-redux";
export default function ProfileNavLink() {
  const user = useSelector(selectUser);

  return (
    <>
      <Nav.Item as="li">
        <Nav.Link
          eventKey="Coins"
          href={`/user/${user.id}`}
          style={{ color: "white" }}
        >
          Your profile
        </Nav.Link>
      </Nav.Item>
    </>
  );
}
