import * as api from '../api'

//Action Creators

export const getPosts = () =>async(dispatch) => {
  try{
    const {data} = await api.fetchPosts();
    
    dispatch({type:'FETCH_ALL',payload:data})
  } catch(error){
    console.log(error.message);
  }

}

export const createPost=(post)=>async(dispatch)=>{
  try {
    const {data}=await api.createPost(post)

    dispatch({type:'CREATE',payload:data})
  } catch (error) {
    console.log(error); 
  }
}

export const updatePost=(id, post)=>async(dispatch)=>{
  try {
    const {data}=await api.updatePost(id,post)

    dispatch({type:'UPDATE',payload:data})
  } catch (error) {
    console.log(error); 
  }
}

export const deletePost=(id)=>async(dispatch)=>{
  try {
    await api.deletePost(id)
    //변수에 담지 않는이유은 우리가 그 데이터를 가지고 뭘 할게아니라 그냥 삭제할거라서 담을 필요가없다.
    dispatch({type:"DELETE",payload:id})
  } catch (error) {
    console.log(error);
  }
}

export const likePost=(id)=>async(dispatch)=>{
  try{
    const {data}=await api.likePost(id)

    dispatch({type:'LIKE',payload:data})
  }
  catch(error){
    console.log(error);
  }
}