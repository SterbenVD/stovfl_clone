import { Comment } from "../models/commentsModel.js";
import { Post } from "../models/postsModel.js";
import { Op } from "sequelize";
async function postupdate(comment) {
    const now = new Date().getTime();
    let post = await Post.update({ last_activity_date: now }, {
        where: {
            id: comment.post_id
        }
    });

    if (post.parent_id != "") {
        await Post.update({ last_activity_date: now }, {
            where: {
                id: post.parent_id
            }
        });
    }
}

export const createComment = async (req, res) => {
    try {
        if (req.body.body === "" && req.body.title === "") { throw { message: "Comment cannot be empty" }; }

        const now = new Date().getTime();
        const threshold = now - 30 * 60 * 1000;

        const spamcount = await Comment.count({
            where: {
                user_id: req.body.user_id,
                creation_date: { [Sequelize.Op.gte]: threshold }
            }
        });

        if (spamcount > 30) {
            res.json({ message: 'Spam' });
            return;
        }

        let comment = await Comment.create(req.body);

        await postupdate(comment);

        res.json({
            message: "Comment created"
        });
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
                comment_id: req.params.id,
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
        let comment = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        await postupdate(comment);

        res.json({
            message: "Comment Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}