import {Router} from "express";
import * as ps from "./post.service.js";

export let postRouter = Router(); 

postRouter.post('/create', async(req,res,next)=>{
 
  let result = await  ps.createPost(req.body)
   return res.status(201).json({
    message : "post created" ,
    result
   })
})

postRouter.delete('/:id', async(req,res,next)=>{
 let {userId} = req.body;
  let result = await  ps.deletePost(req.params.id,userId)
   return res.status(200).json({
    message : "Post Deleted" ,
    result
   })
})
postRouter.get('/details', async(req,res,next)=>{
  let result = await  ps.getPost()
   return res.status(200).json({
    message : "posts fetched" ,
    result
   })
})
postRouter.get('/comment-count', async(req,res,next)=>{
  let result = await  ps.getPostCount()
  for(let i=0 ;i<result.length;i++){
    result[i].dataValues.comments = result[i].dataValues.comments.length
    console.log(result[i]);
    
  }
   return res.status(200).json({
    message : "posts fetched" ,
    result
   })
})


