import React, { useEffect, useState } from "react";
import ButtonComponent from "../components/buttoncomponent";
import { Link } from "react-router-dom";
import { AddUserFavorites, DeleteUserFavorites } from "../store/user/actions";
import { selectUserCoins } from "../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { selectUserId } from "../store/user/selector";
const Coin = (props) => {
  const dispatch = useDispatch();
  const userid = useSelector(selectUserId);
  const allusercoins = useSelector(selectUserCoins);
  const coinStringId = props.name.toLowerCase();
  const allstringcoinid = allusercoins.map(
    (favoritecoin) => favoritecoin.stringCoinId
  );

  function AdduserFavorites() {
    if (!allstringcoinid.includes(coinStringId)) {
      dispatch(
        AddUserFavorites(userid, props.name, coinStringId, props.imageUrl)
      );
    } else dispatch(DeleteUserFavorites(userid, coinStringId));
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "5px",
          border: "2px solid darkblue",
          display: "flex",
          flex: "0 0 25em",
          gap: "34px",
          height: "75px",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <p>{props.number}</p>
        <img src={props.imageUrl} alt={props.alt} />
        <div>
          <h1>{props.name}</h1>
        </div>

        <div style={{ padding: "0.5em" }}>
          <h2>Current Price : {props.currentprice} $</h2>
        </div>
        <div>
          <ButtonComponent liked={props.isLiked} onClick={AdduserFavorites} />
        </div>
        <div>
          <Link to={`/coins/${props.coinid}`}>
            <Button
              style={{
                backgroundColor: "blue",
                justifyContent: "flex-end",
              }}
            >
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coin;
