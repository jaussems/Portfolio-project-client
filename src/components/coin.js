import React from "react";
import ButtonComponent from "../components/buttoncomponent";
import { Link } from "react-router-dom";
import { AddUserFavorites, DeleteUserFavorites } from "../store/user/actions";

import { selectUserCoins } from "../store/user/selector";
import CoinLineChart from "../components/coinlinechart";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { selectUser } from "../store/user/selector";

const Coin = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const allusercoins = useSelector(selectUserCoins);
  const coinStringId = props.name.toLowerCase();
  const allstringcoinid = allusercoins.map(
    (favoritecoin) => favoritecoin.stringCoinId
  );

  function AdduserFavorites() {
    if (!allstringcoinid.includes(coinStringId)) {
      dispatch(
        AddUserFavorites(user.id, props.name, coinStringId, props.imageUrl)
      );
    } else dispatch(DeleteUserFavorites(user.id, coinStringId));
  }

  return (
    <>
      <tr
        style={{
          border: "none",
          width: "80%",
        }}
      >
        <th scope="row">{props.number}</th>
        <td>
          <img
            src={props.imageUrl}
            alt={props.alt}
            style={{ height: "75px", width: "75px" }}
          />
        </td>
        <td
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overFlow: "hidden",
            width: "10%",
            textAlign: "left",
          }}
        >
          <h1>{props.name}</h1>
        </td>

        <td
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overFlow: "hidden",
            width: "10%",
          }}
        >
          <h1 style={{ fontSize: "17px" }}>
            last 24 hours: {props.percetange}%
          </h1>
          <h2>Current Price : {props.currentprice} $</h2>
        </td>
        <td>
          <ButtonComponent liked={props.isLiked} onClick={AdduserFavorites} />
        </td>

        <td>
          <Link to={`/coins/${props.coinid}`}>
            <Button
              style={{
                backgroundColor: "orange",
                alignText: "center",
                justifyContent: "flex-end",
                width: "4em",
              }}
            >
              See Details
            </Button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Coin;
