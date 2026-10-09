import {Router} from "express";
import * as cs from "./comment.service.js";

export let commentRouter = Router(); 

commentRouter.post('/create', async(req,res,next)=>{
 
  let result = await  createcomment(req.body)
   return res.status(201).json({
    message : "comment created" ,
    result
   })
})

