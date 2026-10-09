import { DataTypes, Op } from "sequelize";
import { sequelize } from "../connection.js";

export const userModel = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING(255),
    },
    role: {
      type: DataTypes.STRING(255),
      enum: ["user", "admin"],
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
    paranoid: true,
    validate: {
      checkPasswordLength() {
        if (this.password.length < 6) {
          throw new Error("Password's length must be > 6", { cause: 400 });
        }
      },
    },
  },
);

userModel.beforeCreate(user => {
   if(user.name.length <= 2 )
         {
           throw new Error("user name must be more than 2 characters",{cause: 400});
         }
})
// id (Primary Key, Auto Increment)
//  name (VARCHAR)
//  email(VARCHAR, Unique)
//  password (VARCHAR)
//  role (ENUM: user, admin)
//  createdAt (Date)
//  updatedAt(Date)
