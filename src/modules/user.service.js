import { userModel } from "../db/model/user.model.js"

export const createUser = async(data)=>{
    let {name ,email ,password ,role }=data
    let newUser = new userModel({name ,email ,password ,role })

  let result =  await newUser.save()
    
  
   if(!result)
    throw new Error('wrong credintials',{cause:401})

 
return newUser
}