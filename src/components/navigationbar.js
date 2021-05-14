import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { selectUser, selectToken } from "../store/user/selector";
import { useSelector } from "react-redux";
import Loggedin from "./LoggedIn";
import Loggedout from "./Loggedout";
import AdminNav from "./adminnavigation";
import ProfileNavLink from "./ProfileNavLink";

const Navigationbar = () => {
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
        expand="lg"
        style={{
          padding: "5px",
          backgroundColor: "#111",
          width: "100%",
          color: "white",
          fontSize: "25px",
          justifyContent: "space-around",
          listStyleType: "none",
        }}
      >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
              color: "white",
            }}
          >
            <Nav.Item as="li">
              <Nav.Link
                href="/"
                style={{
                  transition: "all 0.2s",
                  fontWeight: "bold",
                  color: "white",
                  "&:hover": {
                    background: "white",
                  },
                }}
              >
                Home
              </Nav.Link>
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
