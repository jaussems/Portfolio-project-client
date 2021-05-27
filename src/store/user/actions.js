import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "../user/selector";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../Message/action";

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
    dispatch(appLoading());

    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    //dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      //dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          showMessageWithTimeout("danger", true, error.response.data.message)
        );
        //dispatch(setMessage("error", true, error.response.data.message));
        //dispatch(appDoneLoading());
      } else {
        console.log(error.message);
        dispatch(showMessageWithTimeout("danger", true, error.message));

        //dispatch(appDoneLoading());
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
    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const GetUserFavorites = (userid) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    const user = selectUser(getState());

    try {
      const response = await axios.get(`${apiUrl}/user/favorites/${userid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const coinsfetched = await response.data.map(
        (foundcoin) => foundcoin.coin
      );
      dispatch(usersfavoritesGet(coinsfetched));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
      if (!token && !user) {
        dispatch(setMessage("danger", true, e.message));
      }
    }
  };
};

export const AddUserFavorites = (userid, name, stringCoinId, imageUrl) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.post(
        `${apiUrl}/user/favorites/${userid}/coin/?name=${name}&stringCoinId=${stringCoinId}&imageUrl=${imageUrl}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(userFavoriteAdded(response.data.coin));
      dispatch(
        showMessageWithTimeout("success", false, "added favorite", 1500)
      );
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
      dispatch(setMessage("danger", true, e.message));
    }
  };
};

export const DeleteUserFavorites = (userid, stringCoinId) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    try {
      const response = await axios.delete(
        `${apiUrl}/user/favorites/${userid}/coin/?&stringCoinId=${stringCoinId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(userFavoriteDeleted(response.data.deletedcoin));
      dispatch(GetUserFavorites(userid));
      dispatch(
        showMessageWithTimeout("success", false, "deleted favorite", 1500)
      );
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
      dispatch(setMessage("danger", true, e.message));
    }
  };
};
