import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selector";
export const FETCH_USERS_SUCCES = "FETCH_USERS_SUCCES";
export const BLOCK_USER = "BLOCK_USER";
const fetchAllUsers = (users) => ({
  type: FETCH_USERS_SUCCES,
  payload: users,
});

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
