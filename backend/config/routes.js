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
router.get('/post/time/user/:id', postC.UserPostsByTime);
router.get('/post/score/user/:id', postC.UserPostsByScore);
router.get('/post/time/parent/:id', postC.ParentPostsByTime);
router.get('/post/score/parent/:id', postC.ParentPostsByScore);
router.patch('/post/:id', postC.editPost);
router.delete('/post/:id', postC.deletePost);

router.post('/comment', commentC.createComment);
router.get('/comment/time/user/:id', commentC.UserCommentsByTime);
router.get('/comment/score/user/:id', commentC.UserCommentsByScore);
router.get('/comment/time/parent/:id', commentC.ParentCommentsByTime);
router.get('/comment/score/parent/:id', commentC.ParentCommentsByScore);
router.patch('/comment/:id', commentC.editComment);
router.delete('/comment/:id', commentC.deleteComment);

router.post('/vote', voteC.setVote); 
// router.get('/vote/id/:postid', voteC.getVote);
router.post('/vote/delete', voteC.resetVote);

router.get('/tag/trend', tagC.getTrending);


export default router;