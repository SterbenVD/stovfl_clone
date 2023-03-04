import { Vote } from "../models/votesModel.js";
import { Post } from "../models/postsModel.js";

export const setVote = async (req, res) => {
    try {
        await Vote.create(req.body);
        let updatescore = 5 - req.body.vote_type_id * 2;
        await Post.increment({ score: updatescore }, {
            where: {
                id: req.body.post_id
            }
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getVote = async (req, res) => {
    try {
        const votelist = await Like.findAll({
            where: { user_id: req.params.userid }
        });
        res.json(votelist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const resetVote = async (req, res) => {
    try {
        await Vote.destroy({
            where: {
                user_id: req.body.user_id,
                post_id: req.body.post_id
            }
        });
        res.json({
            message: "Vote Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}