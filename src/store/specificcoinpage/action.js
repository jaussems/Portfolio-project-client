import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../Message/action";
import { selectToken } from "../user/selector";

const axios = require("axios");
export const FETCH_SINGLE_COIN = "FETCH_SINGLE_COIN";
export const FETCH_COMMENTS_COIN = "FETCH_COMMENTS_COIN";
export const ADD_COMMENT = "ADD_COMMENT";
const header = {};
export const DELETE_COMMENT = "DELETE_COMMENT";
export const FetchedSpecificCoin = (fetchedCoin) => {
  return {
    type: FETCH_SINGLE_COIN,
    payload: fetchedCoin,
  };
};

export const CommentsFetched = (comments) => {
  return {
    type: FETCH_COMMENTS_COIN,
    payload: comments,
  };
};

export const CommentAdded = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const CommentDeleted = (comment) => {
  return {
    type: DELETE_COMMENT,
    payload: comment,
  };
};

export const fetchCoin = (coinId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response =
        await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&market_data=true
        `);

      dispatch(FetchedSpecificCoin(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
    }
  };
};

export const fetchComments = (coinId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/coins/${coinId}
        `);

      dispatch(CommentsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(`ERROR MESSAGE:`, e.message);
      //dispatch(setMessage("danger", true, e.message));
    }
  };
};

export const addComment = (
  userid,
  coinId,
  name,
  content,
  coinName,
  coinImage
) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.post(
        `${apiUrl}/coins/${userid}/${coinId}?coinName=${coinName}&coinImage=${coinImage}`,
        { name, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(CommentAdded(response.data.all_comments));
      dispatch(showMessageWithTimeout("success", false, "added comment", 2500));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
      dispatch(setMessage("danger", true, e.message));
    }
  };
};

export const deleteComment = (userid, coinId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/coins/${userid}/${coinId}`
      );
      console.log(` Response I got :`, response.data);
      dispatch(CommentDeleted(response.data.all_comments));
      dispatch(
        showMessageWithTimeout("success", false, "deleted comment", 1500)
      );
    } catch (e) {
      console.log("ERROR MESSAGE".e.message);
      dispatch(setMessage("danger", true, e.message));
    }
  };
};
