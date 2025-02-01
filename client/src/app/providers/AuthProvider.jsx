/* eslint-disable react/prop-types */
import store from '../store/store';
import { Provider } from 'react-redux';

export const AuthProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
