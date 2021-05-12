import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers, toggleblockUser } from "../store/admin/action";
import { fetchUsers } from "../store/admin/selector";
import UserComponent from "../components/usercomponenent";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { selectUser } from "../store/user/selector";
const Adminpage = () => {
  const dispatch = useDispatch();
  const allusers = useSelector(fetchUsers);
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(GetAllUsers());
    if (!user.token) {
      history.push("/login");
    }
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
                  !user.isBlocked ? (
                    <Button onClick={(e) => dispatch(toggleblockUser(user.id))}>
                      Block
                    </Button>
                  ) : (
                    <Button onClick={(e) => dispatch(toggleblockUser(user.id))}>
                      Unblock
                    </Button>
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
