import { FETCH_COINS, FETCH_MORE_COINS } from "../homepage/actions";

const initialState = {
  coins: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COINS:
      return { ...state, coins: action.payload };
    case FETCH_MORE_COINS:
      return {
        ...state,
        coins: [...state.coins, ...action.payload],
      };

    default:
      return state;
  }
}
