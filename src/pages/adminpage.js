import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../store/user/actions";
import { fetchUsers } from "../store/user/selector";
import UserComponent from "../components/usercomponenent";

const Adminpage = () => {
  const dispatch = useDispatch();
  const allusers = useSelector(fetchUsers);
  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to the Admin Page</h1>
      <div>
        {allusers.map((user) => {
          return (
            <div>
              <UserComponent firstName={user.firstName} email={user.email} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adminpage;
