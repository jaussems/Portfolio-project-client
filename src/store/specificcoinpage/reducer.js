import { FETCH_SINGLE_COIN } from "../specificcoinpage/action";

const initialState = {
  singlecoin: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_COIN:
      return { ...state, singlecoin: [action.payload] };

    default:
      return state;
  }
};
