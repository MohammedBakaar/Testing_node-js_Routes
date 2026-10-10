import { commentModel } from "../../db/model/index.js";

export const createcomment= async (data) => {
  let newComment= await  commentModel.create(data);
  return newComment;
};
export const deleteComment= async (id,userId) => {
 let comment = await commentModel.findByPk(id) 
 if(!comment) throw new Error("comment not found",{cause : 404})
if(comment.dataValues.userId != userId) throw new Error("you are not authorized",{cause : 401})
 return await comment.destroy({where:id})
};
export const findOrCreate= async (userId,postId,content) => {
let [resultt,created] = await commentModel.findOrCreate({
  where:{
    userId,
    postId,
    context:content
  }
})
  return {resultt,created}
};


