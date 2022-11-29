import {createSlice} from '@reduxjs/toolkit';

// initial state for the auth reducer store

const initialState = {
  userData: {
    email: '',
    password: '',
  },
};

// redux for the auth slice

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth_data: (state, action) => {
      state.userData.email = action.payload.email;
      state.userData.password = action.payload.password;
    },
  },
});

export const {auth_data} = authSlice.actions;

export default authSlice.reducer;
