export const fetchUsers = (state) =>
  state.admin.allUsers.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });
