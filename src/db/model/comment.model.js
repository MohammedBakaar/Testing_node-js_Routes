import { DataTypes , Model } from "sequelize";
import { sequelize } from "../connection.js";

 export  class commentModel extends Model{}
  commentModel.init({
context : 
{
    type : DataTypes.STRING(255),
    allowNull : false
},
 },{
    timestamps : true ,
    paranoid : true ,
    tableName : "comments" ,
    sequelize
 })
 


//  title (VARCHAR)
//  content(TEXT)
//  userId (Foreign Key to Users)
//  createdAt (Date)
//  updatedAt(Date)