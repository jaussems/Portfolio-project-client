import React from "react";
import NavbarItem from "./navbarItem";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/login" linkText="Login" style={{ color: "white" }} />
    </>
  );
}
