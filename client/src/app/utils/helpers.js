export const ACTIONS = {
  AUTH: "AUTH",
  LOGOUT: "LOGOUT",
  SET_THEME_MODE: "SET_THEME_MODE",
};

export const routes_resolve = {
  host: `${import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/"}${
    import.meta.env.VITE_API_VERSION || "v1/"
  }`,
  getHost() {
    return this.host;
  },
  links: {
    login: { path: "/login", name: "Login", auth: false },
    register: { path: "/register", name: "Register", auth: false },
    pools: { path: "/pools", name: "Pools", auth: false },
    my_pools: { path: "/my-pools", name: "My Pools", auth: false },
    create: { path: "/create-pool", name: "Create Pool", auth: false },
    update: { path: "/update-pool", name: "Update Pool", auth: false },
  },
  routes: {
    login: "users/login",
    register: "users/register",
    logout: "users/logout",
    createPool: "pool/create",
    updatePool: "pool/update",
    listPool: "pool/get",
    myPools: "pool/my-pool",
    vote: "pool/vote",
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
