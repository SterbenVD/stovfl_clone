import express from "express";
import * as authC from '../controllers/authController.js';
import * as userC from '../controllers/usersController.js';
import * as postC from '../controllers/postsController.js';
import * as commentC from '../controllers/commentsController.js';
import * as tagC from '../controllers/tagsController.js';
import * as voteC from '../controllers/votesController.js';

const router = express.Router();

router.get('/auth', authC.authUser); // Works
router.post('/user', authC.createUser);
router.get('/user/:user_name', userC.getUserByName); // Works
router.get('/usersearch/:id', userC.getFuzzyUser); // Works

router.get('/post/:id', postC.getPostById); // Works
router.get('/post/user/:id/:post_type/:sort/:order/', postC.PostsByUser); // Works
router.get('/post/parent/:id/:sort/:order', postC.PostsByParent); // Works
router.get('/post/tag/:tags/:sort/:order', postC.PostsByTags); // Works

router.get('/comment/user/:id/:sort/:order', commentC.CommentsByUser); // Works
router.get('/comment/parent/:id/:sort/:order', commentC.CommentsByParent); // Works

router.get('/tag/trend', tagC.getTrending);
router.get('/tagsearch/:id', tagC.getFuzzyTag); // Works

router.get('/checkToken', authC.checkToken);

// router.use(authC.checkToken);
router.patch('/user/:id', userC.updateUser);
router.delete('/user/:id', userC.deleteUser);
router.post('/post', postC.createPost);
router.patch('/post/:id', postC.editPost);
router.delete('/post/:id', postC.deletePost);
router.post('/comment', commentC.createComment);
router.patch('/comment/:id', commentC.editComment);
router.delete('/comment/:id', commentC.deleteComment);
router.post('/vote', voteC.setVote);
router.get('/vote/:userid', voteC.getVote);
router.delete('/vote/:postid', voteC.resetVote);

export default router;