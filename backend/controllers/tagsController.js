import { Tag } from "../models/tagsModel.js";
import { Op } from "sequelize";

export const getTrending = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const suggestTags = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getFuzzyTag = async (req, res) => {
    try {
        let tag = req.params.id.toString().toLowerCase();
        console.log(tag);
        const taglist = await Tag.findAll({
            where: {
                tag_name: {
                    [Op.startsWith]: tag
                }
            }
        });

        res.json(taglist);
    } catch (error) {
        res.json({ message: error.message });
    }
}