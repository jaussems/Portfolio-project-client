import React, { useState, useEffect } from "react";
import { fetchCoins } from "../store/homepage/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../store/homepage/selector";
import CoinComponent from "../components/coin";

const Homepage = () => {
  const dispatch = useDispatch();
  const allcoins = useSelector(getCoinData);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Welcome to the homepage</h1>
        <div>
          <label>Sort by </label>
        </div>
        {allcoins.map((coins) => {
          return (
            <div key={coins.id}>
              <CoinComponent
                name={coins.name}
                imageUrl={coins.image}
                currentprice={coins.current_price}
                alt={coins.symbol}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
