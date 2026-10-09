import { commentModel, postModel, userModel } from "../../db/model/index.js";

export const createPost= async (data) => {
  let newPost= new postModel(data);
return await  newPost.save().catch(e=>{throw new Error("user does not exist",{cause:400})})
};
export const deletePost= async (id,userId) => {
 let Post = await postModel.findByPk(id) 
 if(!Post) throw new Error("post not found",{cause : 404})
if(Post.dataValues.userId != userId) throw new Error("you are not authorized",{cause : 401})
 return await Post.destroy({where:id})
};
export const getPost= async () => {
return await  postModel.findAll({
  attributes:["id","title"],
  include:[
  {
      model : userModel,
      attributes:["id","name"]
  },
  {
    model:commentModel,
    attributes:["id","context"],
    as:"comments"
  }
          ]
})
};

export const getPostCount= async () => {
return await  postModel.findAll({
  attributes:["id","title"],
  include:{model:commentModel,
    as:"comments",
  }
})
}