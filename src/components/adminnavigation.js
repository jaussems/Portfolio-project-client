import React from "react";

import Nav from "react-bootstrap/Nav";

export default function AdminNav() {
  return (
    <>
      <Nav.Item as="li">
        <Nav.Link href="/admin/users">Admin Page</Nav.Link>
      </Nav.Item>
    </>
  );
}
