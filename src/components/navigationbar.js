import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { selectUser, selectToken } from "../store/user/selector";
import { useSelector } from "react-redux";
import Loggedin from "./LoggedIn";
import Loggedout from "./Loggedout";
import NavbarItem from "../components/navbarItem";
import AdminNav from "./adminnavigation";
import ProfileNavLink from "./ProfileNavLink";

const Navigationbar = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <Loggedin /> : <Loggedout />;
  const userControl = user.email ? <ProfileNavLink /> : null;
  const isAdmin = user.isAdmin ? <AdminNav /> : null;

  return (
    <Navbar bg="light" expand="lg" style={{ width: "100%", position: "fixed" }}>
      <Navbar.Brand as={NavLink} to="/">
        Crypto
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home"></NavbarItem>
          {userControl}
          {isAdmin}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
