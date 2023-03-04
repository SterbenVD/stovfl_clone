import { Tag } from "../models/tagsModel.js";
import { Op } from "sequelize";

export const getTrending = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const getFuzzyTag = async (req, res) => {
    try {
        let checker = ['[', '$', '&', '+', ':', ';', '=', '?', '@', '#', '|', '\'', '<', '>', '.', '^', '*', '(', ')', '%', '!', '-', ']'];
        let tag = req.query.tag.toString().toLowerCase();
        checker.map(ele => {
            tag = tag.replaceAll(ele, "\\" + ele)
          });
        console.log(tag);
        const taglist = await Tag.findAll({
            where: {
                tag_name: {
                    [Op.regexp]: tag
                }
            }
        });

        res.json(taglist);
    } catch (error) {
        res.json({ message: error.message });
    }
}