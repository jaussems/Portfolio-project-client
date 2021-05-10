import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selector";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

const usersfavoritesGet = (favoritecoins) => ({
  type: "FETCH_USERS_COINS_SUCCES",
  payload: favoritecoins,
});

const userFavoriteAdded = (addfavoritecoin) => ({
  type: "ADD_USERS_COINS_SUCCES",
  payload: addfavoritecoin,
});

const userFavoriteDeleted = (deletefavoritecoin) => ({
  type: "DELETE_USERS_COINS_SUCCES",
  payload: deletefavoritecoin,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (firstName, email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
    }
  };
};

export const GetUserFavorites = (userid) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/user/favorites/${userid}`);
      console.log(
        `RESPONSE I GOT`,
        response.data.map((foundcoin) => foundcoin.coin)
      );

      const coinsfetched = response.data.map((foundcoin) => foundcoin.coin);
      dispatch(usersfavoritesGet(coinsfetched));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};

export const AddUserFavorites = (userid, name, stringCoinId, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user/favorites/${userid}/coin/?name=${name}&stringCoinId=${stringCoinId}&imageUrl=${imageUrl}`
      );

      // `/user/favorites/1/coin/?name=Bitcoin&stringCoinId=bitcoin&imageUrl=2232323.png`
      dispatch(userFavoriteAdded(response.data.coin));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};

export const DeleteUserFavorites = (userid, stringCoinId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/user/favorites/${userid}/coin/?&stringCoinId=${stringCoinId}`
      );

      // `/user/favorites/1/coin/?name=Bitcoin&stringCoinId=bitcoin&imageUrl=2232323.png`

      dispatch(userFavoriteDeleted(response.data.deleteUserFavorite));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};
