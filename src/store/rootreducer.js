import { combineReducers } from "redux";
import user from "./user/reducer";
import homepage from "./homepage/reducer";
import coinpage from "./specificcoinpage/reducer";
export default combineReducers({
  user,
  homepage,
  coinpage,
});
