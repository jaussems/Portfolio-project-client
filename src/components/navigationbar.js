import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { selectUser, selectToken } from "../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import Loggedin from "./LoggedIn";
import Loggedout from "./Loggedout";
import AdminNav from "./adminnavigation";
import ProfileNavLink from "./ProfileNavLink";

const Navigationbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <Loggedin /> : <Loggedout />;
  const userControl = user.email ? <ProfileNavLink /> : null;
  const isAdmin = user.isAdmin ? <AdminNav /> : null;
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        style={{
          padding: "5px",
          width: "100%",
        }}
        fill
      >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{
              width: "100%",
              listStyleType: "none",
              backgroundColor: "#67C8FF	 ",
              height: "50px",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
              borderRadius: "999px",
            }}
            fill
          >
            <Nav.Item as="li">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {userControl}
            {isAdmin}
            {loginLogoutControls}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigationbar;
