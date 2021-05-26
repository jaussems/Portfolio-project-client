import React from "react";
import NavbarItem from "../components/navbarItem";
import { selectUser } from "../store/user/selector";
import { useSelector } from "react-redux";
export default function ProfileNavLink() {
  const user = useSelector(selectUser);

  return (
    <NavbarItem path={`/user/${user.id}`} linkText="Your Profile"></NavbarItem>
  );
}
