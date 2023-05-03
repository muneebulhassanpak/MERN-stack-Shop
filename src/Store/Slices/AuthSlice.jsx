import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  loginStatus: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.loginStatus = true;
    },
    logout(state, action) {
      state.loginStatus = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
