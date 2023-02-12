import { User } from "../models/usersModel.js";
import { Post } from "../models/postsModel.js";
import { Tag } from "../models/tagsModel.js";
import { Comment } from "../models/commentsModel.js";
import { Vote } from "../models/votesModel.js";

async function syncdb() {
    try {
        await User.sync({ alter: true });
        await Post.sync({ alter: true });
        await Comment.sync({ alter: true });
        await Tag.sync({ alter: true });
        await Vote.sync({ alter: true });
    } catch (error) {
        console.error('Unable to sync database: ', error);
    }
}

export default syncdb;