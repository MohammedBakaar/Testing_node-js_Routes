import {Router} from "express";
import * as cs from "./comment.service.js";

export let commentRouter = Router(); 

commentRouter.post('/create', async(req,res,next)=>{
 let {comments} = req.body
 let result=[]
 for(let i =0 ; i<comments.length;i++)
 {
  let newComment = await  cs.createcomment(comments[i])
  result.push(newComment)
 }
   return res.status(201).json({
    message : "comment created" ,
    result
   })
})
commentRouter.delete('/:id', async(req,res,next)=>{
 let {userId} = req.body;
  let result = await  cs.deleteComment(req.params.id,userId)
   return res.status(200).json({
    message : "comment Deleted" ,
    result
   })
})
commentRouter.post("/find-or-create",async(req,res,next)=>{
  let {userId,postId,content}=req.body
  
  let {resultt,created} = await cs.findOrCreate(userId,postId,content)
  
    return res.status(created ? 201 : 200).json({
    message : `comment ${created ? `created` : `fetched`}`,
    resultt
   })
})


