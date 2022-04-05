import React, { useEffect, useState } from 'react'
import { TextField,Button,Typography,Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import useStyles from './styles.js'
import { useDispatch } from 'react-redux';
import {createPost, updatePost} from '../../actions/posts.js' 
import { useSelector } from 'react-redux';


const Form=({currentId,setCurretId})=>{

  const [postData,setPostData] =useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })

  const post=useSelector((state)=>currentId ? state.posts.find((p)=> p._id === currentId) : null)
  const classes=useStyles();
  const dispatch=useDispatch();

  useEffect(()=>{
    if(post) setPostData(post);
  },[post])


  const handleSubmit=(e)=>{
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId,postData))  
    }
    else{
    dispatch(createPost(postData))
    }
  }

  const clear=()=>{

  }

  return(
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField 
        name='creator' 
        variant='outlined' 
        label='Creator' 
        fullWidth
        value={postData.creator}
        onChange={(e)=>setPostData({...postData,creator:e.target.value})}
        // 이렇게 설정한이유는 ...postData를 통해서 나머지 데이터는 유지 시키고 creator의 값만 바뀌게 하려고
        />
        <TextField 
        name='title' 
        variant='outlined' 
        label='Title' 
        fullWidth
        value={postData.title}
        onChange={(e)=>setPostData({...postData,title:e.target.value})}
        // 이렇게 설정한이유는 ...postData를 통해서 나머지 데이터는 유지 시키고 creator의 값만 바뀌게 하려고
        />
        <TextField 
        name='message' 
        variant='outlined' 
        label='Message' 
        fullWidth
        value={postData.message}
        onChange={(e)=>setPostData({...postData,message:e.target.value})}
        // 이렇게 설정한이유는 ...postData를 통해서 나머지 데이터는 유지 시키고 creator의 값만 바뀌게 하려고
        />
        <TextField 
        name='tags' 
        variant='outlined' 
        label='Tags' 
        fullWidth
        value={postData.tags}
        onChange={(e)=>setPostData({...postData,tags:e.target.value})}
        // 이렇게 설정한이유는 ...postData를 통해서 나머지 데이터는 유지 시키고 creator의 값만 바뀌게 하려고
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type='submit' fullWidth>Submit</Button>
        <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}
export default Form