import {Router} from "express";
import { createpost } from "./post.service.js";

export let postRouter = Router(); 

postRouter.post('/create', async(req,res,next)=>{
 
  let result = await  createpost(req.body)
   return res.status(201).json({
    message : "post created" ,
    result
   })
})

