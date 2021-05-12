import { combineReducers } from "redux";
import user from "./user/reducer";
import homepage from "./homepage/reducer";
import coinpage from "./specificcoinpage/reducer";
import admin from "./admin/reducer";
import message from "./Message/reducer";
export default combineReducers({
  message,
  user,
  homepage,
  coinpage,
  admin,
});
