import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selector";
import Coincomponent2 from "../components/coincomponent2";
import { GetUserFavorites } from "../store/user/actions";
import { selectUserCoins } from "../store/user/selector";
import { selectUserId } from "../store/user/selector";
const ProfilePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const usercoins = useSelector(selectUserCoins);

  const userid = useSelector(selectUserId);

  useEffect(() => {
    dispatch(GetUserFavorites(userid));
  }, [dispatch, userid]);

  return (
    <>
      <div style={{ backgroundColor: "blueviolet" }}>
        <h1>Welcome to the Profile Page</h1>
        <h2>Hello {user.firstName} ! </h2>
      </div>
      <div>
        <h3>The coins I have:</h3>
        <div>
          {usercoins.map((usercoins) => {
            return (
              <div key={usercoins.stringCoinId}>
                <Coincomponent2
                  name={usercoins.name}
                  imageUrl={usercoins.imageUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
