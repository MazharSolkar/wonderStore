import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { username: 'mazhar' },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state, action) => {
      console.log('logout');
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
