import { createSlice } from '@reduxjs/toolkit';

const userAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    userAuth: false,
  },
  reducers: {
    toggleUserAuth(state) {
    state.userAuth = !state.userAuth;
    },
  },
});
export const { toggleUserAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;
