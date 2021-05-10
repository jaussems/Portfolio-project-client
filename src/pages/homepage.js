import React, { useState, useEffect } from "react";
import { fetchCoins } from "../store/homepage/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../store/homepage/selector";
import CoinComponent from "../components/coin";
import { GetUserFavorites, DeleteUserFavorites } from "../store/user/actions";
import { selectUserCoins, selectUserId } from "../store/user/selector";

const Homepage = () => {
  const dispatch = useDispatch();
  const allcoins = useSelector(getCoinData);
  const userid = useSelector(selectUserId);
  const allusercoins = useSelector(selectUserCoins);

  //console.log(`THE USERS COINS`, allusercoins);
  const allstringcoinid = allusercoins.map(
    (favoritecoin) => favoritecoin.stringCoinId
  );

  useEffect(() => {
    dispatch(fetchCoins());
    dispatch(GetUserFavorites(userid));
  }, [dispatch, userid]);

  return (
    <>
      <div>
        <h1>Welcome to the homepage</h1>
        <div>
          <label>Sort by </label>
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
