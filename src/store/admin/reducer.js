import { FETCH_USERS_SUCCES } from "../admin/action";

const initialState = {
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCES:
      return { ...state, allUsers: action.payload };

    default:
      return state;
  }
};
