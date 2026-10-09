import {Router} from "express";
import * as us from "./user.service.js";

export let userRouter = Router(); 

userRouter.post('/signup', async(req,res,next)=>{
 
  let result = await  us.createUser(req.body).catch(e =>{throw new Error("wrong credintials",{cause : 400})})
    res.status( 201).json({
    message : `user created` ,
    result
   })
})
userRouter.put('/:id',async(req,res,next)=>{
 
  let [result] = await  us.updateUser(Number(req.params.id),req.body)
  if(result)
    res.status( 201).json({
    message : `user updated` ,
    result
   })
    result = await  us.createUser(req.body).catch(e =>{throw new Error("wrong credintials",{cause : 400})})
    res.status( 201).json({
    message : `user created` ,
    result
   })

})
userRouter.get("/by-email",async(req,res,next)=>{
  let result = await us.findUser(req.query.email)

  res.status( result ? 201 : 404).json({
    message : `user ${result ? "" : "not "}found` ,
    result
   })
})
userRouter.get("/:id",async(req,res,next)=>{
  let result = await us.findUserByPK(req.params.id)
  console.log(result);
  
  res.status( result ? 201 : 404).json({
    message : `user ${result ? "" : "not "}found` ,
    result
   })
})
