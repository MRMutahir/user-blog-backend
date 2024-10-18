import { User } from "../user/userModel.js";

const createUser = async (payload) => {
  const user = await User.create(payload);
  return user;
};

export { createUser };
