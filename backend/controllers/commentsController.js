import { Comment } from "../models/commentsModel.js";

export const createComment = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findAll({
            where: {
                id: req.params.id,
            }
        });
        res.json(comment[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const UserCommentsByTime = async (req, res) => {
    try {
        const commentlist = await Comment.findAll({
            where: {
                owner_user_id: req.params.id,
            },
            order: [
                ['creation_date', 'DESC']
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const UserCommentsByScore = async (req, res) => {
    try {
        const commentlist = await Comment.findAll({
            where: {
                owner_user_id: req.params.id,
            },
            order: [
                ['score', 'DESC']
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const TagCommentsByTime = async (req, res) => {
    try {
        const taglist = req.body.tags;

        const commentlist = await Comment.findAll({
            where: {
            },
            order: [
                ['creation_date', 'DESC']
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const TagCommentsByScore = async (req, res) => {
    try {
        const taglist = req.body.tags;

        const commentlist = await Comment.findAll({
            where: {
            },
            order: [
                ['score', 'DESC']
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const ParentCommentsByTime = async (req, res) => {
    try {
        const commentlist = await Comment.findAll({
            where: {
                parent_id: req.params.id,
            },
            order: [
                ['creation_date', 'DESC']
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const ParentCommentsByScore = async (req, res) => {
    try {
        const commentlist = await Comment.findAll({
            where: {
                parent_id: req.params.id,
            },
            order: [
                ['score', 'DESC']
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const trendingComments = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteComment = async (req, res) => {
    try {
        // await Comment.destroy({
        //     where: {
        //         id: req.params.id
        //     }
        // });
        res.json({
            message: "Comment Deleted"
        });

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const editComment = async (req, res) => {
    try {
        await Comment.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json({
            message: "Comment Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}