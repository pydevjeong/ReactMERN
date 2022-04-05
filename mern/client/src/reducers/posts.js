
export default (posts=[],action)=>{
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return posts;
    case 'UPDATE':
      return posts.map((post)=>post._id===action.payload ? action.payload : post);
      //action.payload는 새로 업데이트된 post이다 => 따라서 id 값과 업데이트된 post가 같아면 실행되는것이고 아니면 그냥 post(업데이트없이 그냥 원래있던 post를 리턴한다.)
    default:
      return posts;
  }
}