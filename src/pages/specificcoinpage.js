import React, { useState, useEffect } from "react";
import { fetchCoin } from "../store/specificcoinpage/action";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleCoin } from "../store/specificcoinpage/selector";
import CoinComponent2 from "../components/coincomponent2";
import Coinchart from "../components/coinchart";
import { useParams } from "react-router-dom";

const SpecificCoinPage = () => {
  const dispatch = useDispatch();
  let { coinId } = useParams();
  const specificcoin = useSelector(GetSingleCoin);

  useEffect(() => {
    dispatch(fetchCoin(coinId));
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Welcome to the Specific Coin Page!</h1>
        {specificcoin.map((coins) => {
          return (
            <div key={coins.id}>
              <CoinComponent2
                name={coins.name}
                imageUrl={coins.image.large}
                currentprice={coins.market_data.current_price.usd}
                alt={coins.symbol}
              />
            </div>
          );
        })}
        <div>
          <Coinchart />
        </div>
      </div>
    </>
  );
};

export default SpecificCoinPage;
