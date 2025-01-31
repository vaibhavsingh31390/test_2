import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: localStorage.getItem('is_auth') === 'true',
  config: localStorage.getItem('config') || null,
  dark_mode: localStorage.getItem('dark_mode') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
      if (action.payload) {
        localStorage.setItem('is_auth', 'true');
      } else {
        localStorage.removeItem('is_auth');
      }
    },
    setConfig: (state, action) => {
      state.config = action.payload;
      if (action.payload) {
        localStorage.setItem('config', JSON.stringify(state.config));
      } else {
        localStorage.removeItem('config');
      }
    },
    setDarkmode: (state, action) => {
      state.dark_mode = action.payload;
      if (action.payload) {
        localStorage.setItem('dark_mode', 'true');
      } else {
        localStorage.removeItem('dark_mode');
      }
    },
  },
});

export const { setAuth, setConfig, setDarkmode } = authSlice.actions;
export default authSlice.reducer;
