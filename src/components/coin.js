import React, { useEffect, useState } from "react";
import ButtonComponent from "../components/buttoncomponent";

import { AddUserFavorites, DeleteUserFavorites } from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";

import { selectUserCoins, selectUserId } from "../store/user/selector";
const Coin = (props) => {
  const dispatch = useDispatch();
  const userid = useSelector(selectUserId);

  const coinStringId = props.name.toLowerCase();

  function AdduserFavorites() {
    dispatch(
      AddUserFavorites(userid, props.name, coinStringId, props.imageUrl)
    );
  }

  function DeleteUserFavorites() {
    dispatch(DeleteUserFavorites(userid, coinStringId));
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "5px",
          border: "2px solid darkblue",
          display: "flex",
          gap: "24px",
          height: "75px",
        }}
      >
        <img src={props.imageUrl} alt={props.alt} />
        <div>
          <h1>{props.name}</h1>
        </div>

        <div style={{ padding: "0.5em" }}>
          <h2>Current Price : {props.currentprice} $</h2>
        </div>
        <div>
          <ButtonComponent onClick={AdduserFavorites} liked={props.isLiked} />
        </div>
      </div>
    </>
  );
};

export default Coin;
