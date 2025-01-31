import { setAuth, setConfig, setDarkmode } from '../store/authSlice';

export const routeHelper = {
  host: 'http://localhost:8000/',
  getHost() {
    return this.host;
  },
  links: {
    login: { path: '/', name: 'Login' },
    register: { path: '/register', name: 'Register' },
    pools: { path: '/pools', name: 'Pools' },
    my_pools: { path: '/my-pools', name: 'My Pools' },
    create: { path: '/create-pool', name: 'Create Pool' },
    logout: { path: '/logout', name: 'Logout' },
  },
  routes: {
    login: 'api/v1/users/login',
    register: 'api/v1/users/register',
    createPool: 'api/v1/pool/create',
    updatePool: 'api/v1/pool/update',
    listPool: 'api/v1/pool/get',
    vote: 'api/v1/pool/vote',
  },
  getEndpoint(key) {
    if (Object.prototype.hasOwnProperty.call(this.routes, key)) {
      return this.host + this.routes[key];
    } else {
      throw new Error(`Endpoint "${key}" not found.`);
    }
  },
  success: [200, 201, 202, 204],
  error: [400, 401, 403, 404, 409, 500, 502, 503],
  checkStatus(code) {
    if (this.success.includes(code)) {
      return false;
    } else {
      return true;
    }
  },
};

export const handleAuth = (error, data, dispatch) => {
  if (data) {
    dispatch(setAuth(true));
    dispatch(setConfig(data.data.user));
    dispatch(setDarkmode(false));
  } else {
    dispatch(setAuth(null));
    dispatch(setConfig(null));
    dispatch(setDarkmode(null));
  }
};
