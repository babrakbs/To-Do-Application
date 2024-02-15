import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    token: '',
    user: {},
    counter: 0,
  },
  reducers: {

    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },

    setToken: (state, action) => {
      // console.log('REducer Token.......', action.payload)
      state.token = action.payload;
      
    },

    setCounter: (state, action) => {
      state.counter = action.payload
    },


  },
});

export const {
  setUser,
  setToken,
  setCounter,

} = AuthSlice.actions;

export default AuthSlice.reducer;


