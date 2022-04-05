import express from "express"
import { getPosts,createPost, updatePost,deletePost,likePost} from "../controllers/posts.js";


const router=express.Router();

router.get('/',getPosts)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)
//patch는 문서를 업데이트 (새로운걸 넣거나 , 삭제 등)할때 사용하기에 그 target의 id값을 알아야한다.

export default router