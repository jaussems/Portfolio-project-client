const axios = require("axios");

export const FETCH_COINS = "FETCH_COINS";

export const FetchedCoinData = (fetchedCoins) => {
  return {
    type: FETCH_COINS,
    payload: fetchedCoins,
  };
};

export const fetchCoins = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=price_change_percentage
      `);
      dispatch(FetchedCoinData(response.data));
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
    }
  };
};
