import Post from "../models/postModel.js";

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