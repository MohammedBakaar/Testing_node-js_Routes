import {Router} from "express";
import { createUser } from "./user.service.js";

export let userRouter = Router(); 

userRouter.post('/create', async(req,res,next)=>{
  console.log("post");
  
  let {name ,email ,password ,role }=req.body  
  let result = await  createUser({name ,email ,password ,role })
   return res.status(200).json(result)
})
userRouter.get("/create",(req,res,next)=>{
  console.log("getting");
  return res.status(200).json({
    message : "arrived"
  })
})
