class UserApi {
  createUser = jest.fn(async (params) => {
    return { email: params.email };
  });
}

module.exports = UserApi;
