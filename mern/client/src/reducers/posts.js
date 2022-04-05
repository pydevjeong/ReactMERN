
export default (posts=[],action)=>{
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts,action.payload];
    case 'UPDATE':
    case 'LIKE':
      return posts.map((post)=>post._id===action.payload._id ? action.payload : post);
      //action.payload는 새로 업데이트된 post이다 => 따라서 id 값과 업데이트된 post가 같아면 실행되는것이고 아니면 그냥 post(업데이트없이 그냥 원래있던 post를 리턴한다.)
    case 'DELETE':
      return posts.filter((post)=>post._id !== action.payload );
    default:
      return posts;
  }
}