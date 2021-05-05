const axios = require("axios");
export const FETCH_SINGLE_COIN = "FETCH_SINGLE_COIN";

export const FetchedSpecificCoin = (fetchedCoin) => {
  return {
    type: FETCH_SINGLE_COIN,
    payload: fetchedCoin,
  };
};

export const fetchCoin = (coinId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&market_data=true
        `);

      dispatch(FetchedSpecificCoin(response.data));
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
    }
  };
};
