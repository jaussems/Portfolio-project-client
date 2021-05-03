import { combineReducers } from "redux";
import user from "./user/reducer";
import homepage from "./homepage/reducer";
export default combineReducers({
  user,
  homepage,
});
