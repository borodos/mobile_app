import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "authUserSlice",
  initialState: {
    user: {},
  },

  reducers: {
    setAuthUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("token", state.user.token);
    },
    logoutAuthUser(state) {
      state.user = {};
    },
    setProfileImage(state, action) {
      state.user.image = action.payload;
    },
  },
});

export default authUserSlice.reducer;
export const { setAuthUser, logoutAuthUser, setProfileImage } = authUserSlice.actions;
