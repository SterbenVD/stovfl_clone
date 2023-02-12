import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPostById = async (req, res) => {
    try {
        // const post = await Post.findAll({
        //     where: {
        //         id: req.params.postid,
        //     }
        // });
        // res.json(post[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPostsByUser = async (req, res) => {
    try {
        // const idlist = await Post.findAll({
        //     where: {
        //         username: req.params.username,
        //     },
        //     order: [
        //         ['posttime', 'DESC']
        //     ],
        //     attributes: ['postid']
        // });
        // res.json(idlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPostsByTag = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPostsByParent = async (req, res) => {
    try {
        // const idlist = await Post.findAll({
        //     where: {
        //         parentid: req.params.parentid,
        //     },
        //     order: [
        //         ['likes', 'DESC']
        //     ],
        //     attributes: ['postid']
        // });
        // res.json(idlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const trendingPosts = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const editPost = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}