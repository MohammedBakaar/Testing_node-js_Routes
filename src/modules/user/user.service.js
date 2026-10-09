import { userModel } from "../../db/model/user.model.js";

export const createUser = async (data) => {
  let newUser = await  userModel.create(data);
  return newUser;
};
