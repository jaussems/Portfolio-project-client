const axios = require("axios");

export const FETCH_COINS = "LOGIN_SUCCESS";

export const FetchedCoinData = (fetchedCoins) => {
  return {
    type: FETCH_COINS,
    payload: fetchedCoins,
  };
};

export const fetchCoins = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=false
      `);
      dispatch(FetchedCoinData(response.data));
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
    }
  };
};
