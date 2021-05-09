import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../store/admin/action";
import { fetchUsers } from "../store/admin/selector";
import UserComponent from "../components/usercomponenent";
import Button from "react-bootstrap/Button";
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
              <UserComponent
                firstName={user.firstName}
                email={user.email}
                blocked={
                  user.isBlocked ? (
                    <Button>Block</Button>
                  ) : (
                    <Button>Unblock</Button>
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adminpage;
