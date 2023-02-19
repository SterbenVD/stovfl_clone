import { Comment } from "../models/commentsModel.js";

export const createComment = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk({
            where: {
                id: req.params.id,
            }
        });
        res.json(comment[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const CommentsByUser = async (req, res) => {
    try {
        const commentlist = await Comment.findAll({
            where: {
                user_id: req.params.id,
            },
            order: [
                [req.params.sort, req.params.order]
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const CommentsByParent = async (req, res) => {
    try {
        const commentlist = await Comment.findAll({
            where: {
                post_id: req.params.id,
            },
            order: [
                [req.params.sort, req.params.order]
            ],
            attributes: ['id']
        });
        res.json(commentlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteComment = async (req, res) => {
    try {
        await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
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
                id: req.params.id
            }
        });
        res.json({
            message: "Comment Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}