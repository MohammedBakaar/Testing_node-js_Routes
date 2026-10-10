import { Op } from "sequelize";
import { commentModel, postModel, userModel } from "../../db/model/index.js";

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
export const findCommentWord = async(word)=>{
  return  commentModel.findAndCountAll({
    where :{ context :{ [Op.substring] : word}}
  })
}
export const findRecentComment = async(postId)=>{
  return  commentModel.findAll({where:{postId},limit:3,order:["createdAt"]})
}
export const findCommentDetailed = async(id)=>{
  return await commentModel.findByPk(id,{
    attributes : ["id","context"] ,
    include:[{
      model:userModel,
      attributes:["id","name","email"]
    },
    {
      model:postModel,
      attributes:["id","title","content"]
    }
  ]
  })
}


