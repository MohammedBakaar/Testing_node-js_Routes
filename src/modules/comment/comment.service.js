import { commentModel } from "../../db/model/comment.model.js";

export const createcomment= async (data) => {
  let newComment= await  commentModel.create(data);
  return newComment;
};
