import { User } from "../models/usersModel.js";

export const createUser = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        // await User.update(req.body, {
        //     where: {
        //         username: req.body.username
        //     }
        // });
        // res.json({
        //     message: "User Updated"
        // });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUserByName = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        res.json({ message: error.message });
    }
}
