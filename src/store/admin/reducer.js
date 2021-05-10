import { FETCH_USERS_SUCCES, BLOCK_USER } from "../admin/action";

const initialState = {
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCES:
      return { ...state, allUsers: action.payload };
    case BLOCK_USER:
      return { ...state, allUsers: action.payload };

    default:
      return state;
  }
};
