import express from "express";
import {PORT } from './config/configservece.js'
import { connect } from "./db/connection.js";
import { userModel } from "./db/model/user.model.js";
import postModel from "./db/model/posts.model.js";
import  {userRouter}  from "./modules/user.controller.js";
import globalErrorHandler from "./common/globalErrorHandler.js";

const app = express();


await connect()

app.use(express.json())


app.use("/user",userRouter)



app.use(globalErrorHandler)

app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);
})