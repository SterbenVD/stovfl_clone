import express from "express";
import * as authC from '../controllers/authController.js';
import * as userC from '../controllers/usersController.js';
import * as postC from '../controllers/postsController.js';
import * as commentC from '../controllers/commentsController.js';
import * as tagC from '../controllers/tagsController.js';
import * as voteC from '../controllers/votesController.js';

const router = express.Router();

router.post('/checkToken', authC.checkToken);
router.post('/auth', authC.authUser);

router.post('/user', userC.createUser);
router.get('/user/:id', userC.getUserByName);
router.patch('/user/:id', userC.updateUser);
router.delete('/user/:id', userC.deleteUser);

router.post('/post', postC.createPost);
router.get('/post/:id', postC.getPostById);
router.get('/post/user/:id', postC.getPostsByUser);
router.get('/post/parent/:id', postC.getPostsByParent);
router.patch('/post/:id', postC.editPost);
router.delete('/post/:id', postC.deletePost);

router.post('/comment', commentC.createComment);
router.get('/comment/user/:id', commentC.getCommentsByUser);
router.get('/comment/parent/:id', commentC.getCommentsByParent);
router.patch('/comment/:id', commentC.editComment);
router.delete('/comment/:id', commentC.deleteComment);

router.post('/vote', voteC.setVote); 
// router.get('/vote/id/:postid', voteC.getVote);
router.post('/vote/delete', voteC.resetVote);

router.get('/tag/trend', tagC.getTrending);



export default router;