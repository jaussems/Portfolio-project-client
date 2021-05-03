import { FETCH_COINS } from "../homepage/actions";

const initialState = {
  coins: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return { ...initialState, ...action.payload };

    default:
      return state;
  }
};
