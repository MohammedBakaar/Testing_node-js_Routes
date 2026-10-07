import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
export let userModel = sequelize.define("user",{
name : 
{
    type : DataTypes.STRING(255),
    allowNull : false
},
email :
{
    type : DataTypes.STRING(255),
    unique : true 
},
password : 
{
 type : DataTypes.STRING(255)
},
role : 
{
 type : DataTypes.STRING(255),
 enum : ["user","admin"],
 defaultValue : "user"
}

},{
    timestamps : true
})



// id (Primary Key, Auto Increment)
//  name (VARCHAR)
//  email(VARCHAR, Unique)
//  password (VARCHAR)
//  role (ENUM: user, admin)
//  createdAt (Date)
//  updatedAt(Date)