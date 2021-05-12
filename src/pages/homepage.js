import React, { useState, useEffect } from "react";
import { fetchCoins } from "../store/homepage/actions";
import { useDispatch, useSelector } from "react-redux";

import {
  getCoinData,
  getCoinDataByName,
  getCoinDataByLowestPrice,
  getCoinDataByHighestPrice,
} from "../store/homepage/selector";
import CoinComponent from "../components/coin";
import { GetUserFavorites } from "../store/user/actions";
import {
  selectUserCoins,
  selectUserId,
  selectToken,
} from "../store/user/selector";

const Homepage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const allcoins = useSelector(getCoinData);

  const userid = useSelector(selectUserId);
  const [sortcoins, setSortCoins] = useState(0);
  const allusercoins = useSelector(selectUserCoins);

  //makes an array with the users stringCoinId's to check the button with
  const allstringcoinid = allusercoins.map(
    (favoritecoin) => favoritecoin.stringCoinId
  );

  useEffect(() => {
    dispatch(fetchCoins());
    if (token) {
      dispatch(GetUserFavorites(userid));
    }
  }, [dispatch, userid]);

  return (
    <>
      <div>
        <h1>Welcome to the homepage</h1>
        <div>
          <label>Sort by </label>
          <select
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
            <option name="popularity" value={4}>
              By Popularity
            </option>
          </select>
        </div>
        {allcoins.map((coins, index) => {
          return (
            <div key={coins.id}>
              <CoinComponent
                number={index + 1}
                name={coins.name}
                imageUrl={coins.image}
                currentprice={coins.current_price}
                alt={coins.symbol}
                coinid={coins.id}
                isLiked={
                  allstringcoinid.includes(coins.name.toLowerCase())
                    ? true
                    : false
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
