export const routeHelper = {
  host: "http://localhost:8000/",
  getHost() {
    return this.host;
  },
  routes: {
    login: "api/v1/users/login",
    register: "api/v1/users/register",
    createPool: "api/v1/pool/create",
    updatePool: "api/v1/pool/update",
    listPool: "api/v1/pool/get",
    vote: "api/v1/pool/vote",
  },
  getEndpoint(key) {
    if (Object.prototype.hasOwnProperty.call(this.routes, key)) {
      return this.host + this.routes[key];
    } else {
      throw new Error(`Endpoint "${key}" not found.`);
    }
  },
};
