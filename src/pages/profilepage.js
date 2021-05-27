import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selector";

import CoinComponentProfile from "../components/Coincomponent3";
import { GetUserFavorites } from "../store/user/actions";
import { selectUserCoins } from "../store/user/selector";
import { useHistory } from "react-router-dom";
import { showMessageWithTimeout } from "../../src/store/Message/action";
const ProfilePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const usercoins = useSelector(selectUserCoins);
  const history = useHistory();

  //const userid = useSelector(selectUserId);

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
    dispatch(GetUserFavorites(user.id));
  }, [dispatch, user.id]);

  return (
    <div style={{ minHeight: "1080px" }}>
      <h3>The coins I have:</h3>
      <div>{!usercoins ? <p>No coins to display yet!</p> : null}</div>
      <div>
        {usercoins.map((usercoins) => {
          return (
            <div key={usercoins.stringCoinId}>
              <CoinComponentProfile
                name={usercoins.name}
                imageUrl={usercoins.imageUrl}
                coinid={usercoins.stringCoinId.split(" ").join("")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
