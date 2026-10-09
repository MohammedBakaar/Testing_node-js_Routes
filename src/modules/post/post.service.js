import { postModel } from "../../db/model/post.model.js";

export const createpost= async (data) => {
  let newPost= await  postModel.create(data);
  return newPost;
};
