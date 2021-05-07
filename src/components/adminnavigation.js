import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../store/user/selector";
import Nav from "react-bootstrap/Nav";

export default function AdminNav() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/admin/users">Admin Page</Nav.Link>
      </Nav.Item>
    </>
  );
}
