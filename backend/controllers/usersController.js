import { User } from "../models/usersModel.js";
import { Auth } from "../models/authModel.js";
import { Op } from "sequelize";

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "User Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUserByName = async (req, res) => {
    try {
        let arr = req.params.user_name.split("@");
        let iden = arr[arr.length - 1];
        const user = await User.findAll({
            where: {
                id: iden
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getFuzzyUser = async (req, res) => {
    try {
        let user = req.params.id.toString().toLowerCase();
        const userlist = await Auth.findAll({
            where: {
                user_name: {
                    [Op.startsWith]: user
                }
            }
        });
        res.json(userlist);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
