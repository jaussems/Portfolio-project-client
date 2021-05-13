import { appLoading, appDoneLoading, setMessage } from "../Message/action";

const axios = require("axios");
export const FETCH_COINS = "FETCH_COINS";
export const FETCH_COIN_PRICE = "FETCH_COIN_PRICE";
export const FETCH_MORE_COINS = "FETCH_MORE_COINS";

export const FetchedCoinData = (fetchedCoins) => {
  return {
    type: FETCH_COINS,
    payload: fetchedCoins,
  };
};

export const FetchMoreCoin = (fetchedmorecoins) => {
  return {
    type: FETCH_MORE_COINS,
    payload: fetchedmorecoins,
  };
};

export const fetchCoins = (post, page) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response =
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${post}&page=${page}&sparkline=false&price_change_percentage=price_change_percentage
      `);

      dispatch(FetchedCoinData(response.data));

      dispatch(appDoneLoading());
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
      dispatch(setMessage("danger", true, e.message));
    }
  };
};

//fetch more coins
export const fetchmoreCoins = (post, page) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response =
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${post}&page=${page}&sparkline=false&price_change_percentage=price_change_percentage
      `);
      dispatch(FetchMoreCoin(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
      dispatch(setMessage("danger", true, e.message));
    }
  };
};
