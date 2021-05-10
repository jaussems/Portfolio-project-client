import {
  FETCH_SINGLE_COIN,
  FETCH_COMMENTS_COIN,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../specificcoinpage/action";

const initialState = {
  singlecoin: [],
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_COIN:
      return { ...state, singlecoin: [action.payload] };
    case FETCH_COMMENTS_COIN:
      return { ...state, comments: action.payload };
    case ADD_COMMENT:
      return { ...state, comments: action.payload };
    case DELETE_COMMENT:
      return { ...state, comments: action.payload };

    default:
      return state;
  }
};
