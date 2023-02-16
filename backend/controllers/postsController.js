import { Post } from "../models/postsModel.js";

export const createPost = async (req, res) => {
    try {
        if (req.body.body === "" && req.body.title === "") { throw { message: "Post cannot be empty" }; }


        const now = new Date().getTime();
        req.body.posttime = new Date().getTime(); //set timestamp
        const threshold = now - 15 * 60 * 1000; //15 min

        //spam protection:
        const spamcount = await Post.count({
            where: {
                username: req.body.username,
                posttime: { [Sequelize.Op.gte]: threshold }
            }
        });
        if (spamcount > 15) {
            res.json({ message: 'Spam' });
            return;
        }

        await Post.create(req.body);

        // if (req.body.parentid != null) {
        //     Post.increment(['replies'], { where: { postid: req.body.parentid } });
        // }

        res.json({
            message: "Post created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findAll({
            where: {
                id: req.params.postid,
            }
        });
        res.json(post[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const PostsByUser = async (req, res) => {
    try {
        const postlist = await Post.findAll({
            where: {
                owner_user_id: req.params.id,
            },
            order: [
                [req.params.sort, req.params.order]
            ],
            attributes: ['id']
        });
        res.json(postlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const PostsByTags = async (req, res) => {
    try {
        // const taglist = req.body.tags;

        const postlist = await Post.findAll({
            where: {
            },
            order: [
                [req.params.sort, req.params.order]
            ],
            attributes: ['id']
        });
        res.json(postlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const PostsByParent = async (req, res) => {
    try {
        const postlist = await Post.findAll({
            where: {
                parent_id: req.params.id,
            },
            order: [
                [req.params.sort, req.params.order]
            ],
            attributes: ['id']
        });
        res.json(postlist);
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
        // await Post.destroy({
        //     where: {
        //         id: req.params.id
        //     }
        // });
        res.json({
            message: "Post Deleted"
        });

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const editPost = async (req, res) => {
    try {
        // await Post.update(req.body, {
        //     where: {
        //         id: req.body.id
        //     }
        // });
        res.json({
            message: "Post Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}