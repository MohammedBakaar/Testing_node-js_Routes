import { commentModel } from "../../db/model/index.js";

export const createcomment= async (data) => {
  let newComment= await  commentModel.create(data);
  return newComment;
};
