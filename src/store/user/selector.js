export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export const selectUserId = (state) => state.user.id;

export const selectUserCoins = (state) => state.user.userCoins;

export const fetchUsers = (state) => state.user.allUsers;
