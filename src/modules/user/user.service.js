

import { userModel } from "../../db/model/index.js";

export const createUser = async (data) => {
  let newUser =  userModel.build(data);
 return await newUser.save()

};
export const updateUser = async (id ,data) => {
return await userModel.update(data,{ where : {id }});
};
export const findUser = async (email) => {
return await userModel.findOne({where:{email}});
};
export const findUserByPK = async (id) => {
return await userModel.findByPk(id,{
attributes : {
  exclude : ["role"]
}
})
};