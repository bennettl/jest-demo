const UserService = require("./user.service");
const UserApi = require("user.api");

describe("User Service", () => {
  let userService;
  let userApi;
  beforeEach(() => {
    userApi = new UserApi();
    userService = new UserService(userApi);
  });

  test("creating a user", async () => {
    const email = "test@test.com";
    const params = { email };
    const user = await userService.createUser(params);

    expect(userApi.createUser).toHaveBeenCalled();
    expect(userApi.createUser).toHaveBeenCalledWith(params);
    expect(user.email).toBe(email);
  });
});
