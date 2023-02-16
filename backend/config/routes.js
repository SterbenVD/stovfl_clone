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
router.get('/post/user/:id/:sort/:order', postC.PostsByUser);
router.get('/post/parent/:id/:sort/:order', postC.PostsByParent);
router.get('/post/tag/:tags/:sort/:order', postC.PostsByTags);
router.patch('/post/:id', postC.editPost);
router.delete('/post/:id', postC.deletePost);

router.post('/comment', commentC.createComment);
router.get('/comment/user/:id/:sort/:order', commentC.CommentsByUser);
router.get('/comment/parent/:id/:sort/:order', commentC.CommentsByParent);
router.patch('/comment/:id', commentC.editComment);
router.delete('/comment/:id', commentC.deleteComment);

router.post('/vote', voteC.setVote);
router.get('/vote/:userid', voteC.getVote);
router.delete('/vote/:postid', voteC.resetVote);

router.get('/tag/trend', tagC.getTrending);
router.get('/tag/suggest', tagC.suggestTags);

export default router;