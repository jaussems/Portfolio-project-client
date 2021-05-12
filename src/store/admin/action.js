import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selector";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../Message/action";

export const FETCH_USERS_SUCCES = "FETCH_USERS_SUCCES";
export const BLOCK_USER = "BLOCK_USER";
const fetchAllUsers = (users) => ({
  type: FETCH_USERS_SUCCES,
  payload: users,
});

const BlockUser = (blockuser) => ({
  type: FETCH_USERS_SUCCES,
  payload: blockuser,
});

export const GetAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const token = selectToken(getState());
    try {
      const response = await axios.get(
        `${apiUrl}/admin/user`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(`TESTING RESPONSE`, response);
      dispatch(fetchAllUsers(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
    }
  };
};

export const toggleblockUser = (userId) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.put(
        `${apiUrl}/admin/user/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(BlockUser(response.data));
      dispatch(showMessageWithTimeout("success", false, "user Blocked", 1500));
    } catch (e) {
      console.log("ERROR MESSAGE", e.message);
      dispatch(setMessage("error message", true, e.message));
    }
  };
};
