import {Router} from "express";
import { createUser } from "./user.service.js";

export let userRouter = Router(); 

userRouter.post('/create', async(req,res,next)=>{
 
  let result = await  createUser(req.body)
   return res.status(201).json({
    message : "user created" ,
    result
   })
})

