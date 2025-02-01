import { handleAuthFlow } from '../store/authSlice';

export const ACTIONS = {
  AUTH: 'AUTH',
  LOGOUT: 'LOGOUT',
  SET_THEME_MODE: 'SET_THEME_MODE',
};

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
  },
  routes: {
    login: 'api/v1/users/login',
    register: 'api/v1/users/register',
    logout: 'api/v1/users/logout',
    createPool: 'api/v1/pool/create',
    updatePool: 'api/v1/pool/update',
    listPool: 'api/v1/pool/get',
    myPools: 'api/v1/pool/my-pool',
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

export const authHelper = (error, data, dispatch) => {
  if (data) {
    dispatch(
      handleAuthFlow({
        type: ACTIONS.AUTH,
        data: { isAuth: true, data },
      })
    );
  } else {
    dispatch(
      handleAuthFlow({
        type: ACTIONS.LOGOUT,
      })
    );
  }
};
