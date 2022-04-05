import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"


export const getPosts=async (req,res)=>{
  try {
    // find 메소드
    const postMessages=await PostMessage.find()
    console.log(postMessages);
    res.status(200).json(postMessages)
    //응답상태 200 , json형태로 postMessages를 반환
  } catch (error) {
    res.status(404).json({message:error.message})
  }
}
export const createPost=async (req,res)=>{
  const post=req.body;

  const newPost=new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({message:error.message})
  }
}




export const updatePost = async (req,res)=>{
  const {id: _id}=req.params
  const post=req.body
  //자바스크립트 문법으로 object destructoring
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not that id')

  const updatedPost=await PostMessage.findByIdAndUpdate(_id,post,{new:true})

  res.json(updatedPost)
}