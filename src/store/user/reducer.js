import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  userCoins: [],
};

// ...state,
// userCoins: [
//   state.userCoins.filter(
//     (removedcoins) => removedcoins.id !== action.payload.stringCoinId
//   ),
// ],

export default function reducer(state = initialState, action) {
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

    case "DELETE_USERS_COINS_SUCCES": {
      const newUserCoins = state.userCoins.filter(
        (allcoins) => allcoins.id === action.payload.stringCoinId
      );
      return {
        ...state,
        userCoins: newUserCoins,
      };
    }

    case "ADD_USERS_COINS_SUCCES":
      return { ...state, userCoins: [...state.userCoins, action.payload] };

    default:
      return state;
  }
}

// userCoins: [
//   ...state.userCoins.filter(
//     (removedcoins) => removedcoins.id !== action.payload.stringCoinId
//   ),
// ],
