import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);                   // Protect create post
router.get('/getposts', getposts);                             // Public get posts
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost); // Protect delete
router.put('/updatepost/:postId/:userId', verifyToken, updatepost);    // Protect update

export default router;
