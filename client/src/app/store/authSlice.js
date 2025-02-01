import { createSlice } from '@reduxjs/toolkit';
import { ACTIONS } from '../utils/constants';

const initialState = {
  isAuth: localStorage.getItem('is_auth') === 'true',
  token: localStorage.getItem('token') || null,
  config: localStorage.getItem('config') || null,
  dark_mode: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleAuthFlow: (state, action) => {
      // if (action.payload.type === ACTIONS.AUTH) {
      const data = action.payload.data.data.data;
      state.isAuth = true;
      state.token = data.token;
      state.config = data.user;
      localStorage.setItem('config', JSON.stringify(state.config));
      localStorage.setItem('is_auth', state.isAuth);
      localStorage.setItem('token', state.token);
      localStorage.setItem('dark_mode', JSON.stringify(state.dark_mode));
      // } else if (action.payload.type === ACTIONS.LOGOUT) {
      //   localStorage.removeItem('is_auth');
      //   localStorage.removeItem('token');
      //   localStorage.removeItem('config');
      //   localStorage.removeItem('dark_mode');
      // } else if (action.payload.type === ACTIONS.SET_THEME_MODE) {
      //   localStorage.setItem('dark_mode', JSON.stringify(!state.dark_mode));
      // } else {
      //   throw new Error('UNKNOWN ACTION.');
      // }
    },
  },
});

export const { handleAuthFlow } = authSlice.actions;
export default authSlice.reducer;
