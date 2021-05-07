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

// const usersGet = (users) => ({
//   type: "FETCH_USERS_SUCCES",
//   payload: users,
// });

const usersfavoritesGet = (favoritecoins) => ({
  type: "FETCH_USERS_COINS_SUCCES",
  payload: favoritecoins,
});

const userFavoriteAdded = (addfavoritecoin) => ({
  type: "ADD_USERS_COINS_SUCCES",
  payload: addfavoritecoin,
});

const fetchAllUsers = (users) => ({
  type: "FETCH_USERS_SUCCES",
  payload: users,
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

// export const getAllUsers = () => {
//   return async (dispatch, getState) => {
//     // get token from the state
//     const token = selectToken(getState());

//     // if we have no token, stop
//     if (token === null) return;

//     try {
//       const response = await axios.get(`${apiUrl}/admin/users`);
//       dispatch(usersGet(response.data));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

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
      dispatch(userFavoriteAdded(response.data));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};

export const GetAllUsers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/admin/user`);
      console.log(`TESTING RESPONSE`, response);
      dispatch(fetchAllUsers(response.data));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};
