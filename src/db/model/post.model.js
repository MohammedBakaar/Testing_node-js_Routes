import { DataTypes , Model } from "sequelize";
import { sequelize } from "../connection.js";

 export class postModel extends Model{}
 postModel.init({
title : 
{
    type : DataTypes.STRING(255),
    allowNull : false
},
content : 
{
    type : DataTypes.STRING(255),
    allowNull : false
}

 },{
    timestamps : true ,
    paranoid : true ,
    tableName: "posts" ,
    sequelize
 })
 


//  title (VARCHAR)
//  content(TEXT)
//  userId (Foreign Key to Users)
//  createdAt (Date)
//  updatedAt(Date)