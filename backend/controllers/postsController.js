import { Sequelize } from "sequelize";
import { Post } from "../models/postsModel.js";
import { Op } from "sequelize";
export const createPost = async (req, res) => {
  try {
    if (req.body.body === "" && req.body.title === "") {
      throw { message: "Post cannot be empty" };
    }

    const now = new Date().getTime();
    const threshold = now - 30 * 60 * 1000;

    const spamcount = await Post.count({
      where: {
        owner_user_id: req.body.owner_user_id,
        creation_date: { [Sequelize.Op.gte]: threshold },
      },
    });

    if (spamcount > 30) {
      res.json({ message: "Spam" });
      return;
    }

    let post = await Post.create(req.body);

    if (post.parent_id != "") {
      await Post.update(
        { last_activity_date: now },
        {
          where: {
            id: post.parent_id,
          },
        }
      );
    }

    res.json({
      message: "Post created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(post[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const PostsByUser = async (req, res) => {
  try {
    const postlist = await Post.findAll({
      where: {
        owner_user_id: req.params.id,
        post_type_id: req.params.post_type,
      },
      order: [[req.params.sort, req.params.order]],
      attributes: ["id"],
    });
    res.json(postlist);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const PostsByTags = async (req, res) => {
  try {
    console.log(req.params.tags)
    let checker = ['[', '$', '&', '+', ':', ';', '=', '?', '@', '#', '|', '\'', '<', '>', '.', '^', '*', '(', ')', '%', '!', '-', ']'];
    let taglist = req.query.tags.toLowerCase().split(",");
    taglist = taglist.map(element => {
      element = "<" + element + ">";
      checker.map(ele => {
        element = element.replaceAll(ele, "\\" + ele)
      });
      return element;
    });
    console.log(taglist);
    const postlist = await Post.findAll({
      where: {
        tags: {
          [Op.regexp]: { [Op.all]: taglist }
        },
      },
      order: [[req.params.sort, req.params.order]],
      attributes: ["id"],
    });
    res.json(postlist);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const PostsByParent = async (req, res) => {
  try {
    const postlist = await Post.findAll({
      where: {
        parent_id: req.params.id,
      },
      order: [[req.params.sort, req.params.order]],
      attributes: ["id"],
    });
    res.json(postlist);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const trendingPosts = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Post Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  try {
    let post = await Post.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    if (post.parent_id != "") {
      await Post.update(
        { last_activity_date: now },
        {
          where: {
            id: post.parent_id,
          },
        }
      );
    }

    res.json({
      message: "Post Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
