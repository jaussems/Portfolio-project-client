import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selector";
//import Coincomponent2 from "../components/coincomponent2";
import CoinComponent from "../components/coin";
import CoinComponentProfile from "../components/Coincomponent3";
import { GetUserFavorites } from "../store/user/actions";
import { selectUserCoins } from "../store/user/selector";
import { selectUserId } from "../store/user/selector";
import { useHistory } from "react-router-dom";
import { showMessageWithTimeout } from "../../src/store/Message/action";
const ProfilePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const usercoins = useSelector(selectUserCoins);
  const history = useHistory();
  const userid = useSelector(selectUserId);

  useEffect(() => {
    if (!user.token) {
      history.push("/login");
    }
    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        `welcome ${user.firstName}`,
        1500
      )
    );
    dispatch(GetUserFavorites(userid));
  }, [dispatch, userid]);

  return (
    <>
      <div style={{ backgroundColor: "blueviolet" }}>
        <h1>Profile Page</h1>
      </div>
      <div>
        <h3>The coins I have:</h3>
        <div>
          {usercoins.map((usercoins) => {
            return (
              <div key={usercoins.stringCoinId}>
                <CoinComponentProfile
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
