import React, { useState, useEffect, useRef } from "react";
import { fetchCoins, fetchmoreCoins } from "../store/homepage/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  appLoading,
  appDoneLoading,
  setMessage,
} from "../store/Message/action";
import { selectAppLoading } from "../store/Message/selector";
import { PageNavComponent } from "../components/Pagination";
import useInterval from "../hooks/useInterval";
import { useParams } from "react-router-dom";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import Table from "react-bootstrap/Table";
import { getCoinData } from "../store/homepage/selector";
import CoinComponent from "../components/coin";
import { GetUserFavorites } from "../store/user/actions";
import {
  selectUserCoins,
  selectToken,
  selectUser,
} from "../store/user/selector";

const Homepage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const allusercoins = useSelector(selectUserCoins);
  let allcoins = useSelector(getCoinData);
  const savedcoins = useRef();
  savedcoins.current = allcoins;

  const user = useSelector(selectUser);

  const [sortcoins, setSortCoins] = useState("");

  const { pageindex } = useParams();
  if (sortcoins === 0) {
    allcoins = [...savedcoins.current];
  } else if (sortcoins === 1) {
    allcoins.sort((a, b) => {
      return a.id.localeCompare(b.id);
    });
  } else if (sortcoins === 2) {
    allcoins.sort((a, b) => {
      return a.current_price - b.current_price;
    });
  } else if (sortcoins === 3) {
    allcoins.sort((a, b) => {
      return b.current_price - a.current_price;
    });
  }

  //makes an array with the users stringCoinId's to check the button with
  const allstringcoinid = allusercoins.map(
    (favoritecoin) => favoritecoin.stringCoinId
  );

  useInterval(
    () => {
      dispatch(fetchCoins(100, pageindex));
    },

    30000
  );

  useEffect(() => {
    dispatch(fetchCoins(100, pageindex));
    if (token && user) {
      dispatch(GetUserFavorites(user.id));
    }
  }, [dispatch, user.id, sortcoins, pageindex]);

  return (
    <div>
      <h1>Welcome to the homepage</h1>
      <div>
        <div style={{ marginTop: "30px" }}>
          <PageNavComponent
            pageref={pageindex}
            isCurrentPage={parseInt(pageindex)}
          />
        </div>
        <label style={{ padding: "2px" }}>Sort by </label>
        <select
          className="btn btn-sm btn-info"
          value={sortcoins}
          onChange={(e) => setSortCoins(parseInt(e.target.value))}
        >
          <option name="all" value={0}>
            ---
          </option>
          <option name="name" value={1}>
            By Name
          </option>
          <option name="lowest-price" value={2}>
            By Lowest Price
          </option>
          <option name="highest-price" value={3}>
            By Highest Price
          </option>
        </select>
      </div>
      <div>
        <Table responsive="lg" borderless>
          <thead style={{ textAlign: "inherit" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Favorite</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {allcoins.map((coins, index) => {
              return (
                <CoinComponent
                  key={index}
                  id={coins.id}
                  randomcolor={Math.floor(Math.random() * 16)}
                  number={index + 1}
                  name={coins.name}
                  imageUrl={coins.image}
                  percetange={
                    coins?.price_change_percentage_24h > 0 ? (
                      <span style={{ color: "green" }}>
                        {coins?.price_change_percentage_24h?.toFixed(2) + "↑ "}{" "}
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        {coins?.price_change_percentage_24h?.toFixed(2) + "↓"}
                      </span>
                    )
                  }
                  currentprice={coins.current_price}
                  alt={coins.symbol}
                  coinid={coins.id}
                  isLiked={allstringcoinid.includes(coins.id) ? true : false}
                />
              );
            })}
          </tbody>
        </Table>
        <div>
          <PageNavComponent
            pageref={pageindex}
            isCurrentPage={parseInt(pageindex)}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
