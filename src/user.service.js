class UserService {
  constructor(userApi) {
    this.userApi = userApi;
  }

  createUser = (params) => {
    return this.userApi.createUser(params);
  };
}

module.exports = UserService;
