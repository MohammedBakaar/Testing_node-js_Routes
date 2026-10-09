

import {commentModel} from "./comment.model.js";
import {userModel} from "./user.model.js";
import {postModel} from "./post.model.js";

userModel.hasMany(postModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
userModel.hasMany(commentModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
postModel.belongsTo(userModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
commentModel.belongsTo(userModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
postModel.hasMany(commentModel,{
    foreignKey : "postId",
    as : "comments",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
commentModel.belongsTo(postModel,{
    foreignKey : "postId",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})


export {commentModel} from "./comment.model.js";

export {userModel} from "./user.model.js";

export {postModel} from "./post.model.js";