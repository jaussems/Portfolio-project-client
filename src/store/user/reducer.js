import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  userCoins: [],
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case "FETCH_USERS_COINS_SUCCES":
      return { ...state, userCoins: action.payload };

    case "ADD_USERS_COINS_SUCCES":
      return { ...state, userCoins: [...state.userCoins, action.payload] };

    case "FETCH_USERS_SUCCES":
      return { ...state, allUsers: action.payload };

    default:
      return state;
  }
};
