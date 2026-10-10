

import {commentModel} from "./comment.model.js";
import {userModel} from "./user.model.js";
import {postModel} from "./post.model.js";
import { DataTypes } from "sequelize";

userModel.hasMany(postModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
     foreignKey:{
        allowNull: false
    }
})
userModel.hasMany(commentModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
     foreignKey:{
        allowNull: false
    }
})
postModel.belongsTo(userModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
     foreignKey:{
        allowNull: false
    }
})
commentModel.belongsTo(userModel,{
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
    foreignKey:{
        allowNull: false
    }
})
postModel.hasMany(commentModel,{
    foreignKey :{ 
    name :"postId",
    allowNull:false
},
    as : "comments",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
commentModel.belongsTo(postModel,{
    foreignKey : {
        name :"postId",
        allowNull: false
    },
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})


export {commentModel} from "./comment.model.js";

export {userModel} from "./user.model.js";

export {postModel} from "./post.model.js";