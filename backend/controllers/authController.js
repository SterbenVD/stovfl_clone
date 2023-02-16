import { User } from "../models/usersModel.js";
import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";

let secretpassword = "Never gonna give you up,Never gonna let you down,Never gonna run around and desert you";

export const checkToken = async (req, res) => {
    try {
        let salt = sha256(secretpassword);
        let token = req.body.token;
        if (!token) {
            res.json({
                success: false,
                message: "Error! Token was not provided."
            });
        }
        const decodedToken = jwt.verify(token, salt);
        const user = await Auth.findAll({
            where: {
                user_name: decodedToken.user_name
            }
        })
        if (!user) {
            res.json({
                success: false
            });

        }
        else {
            res.json({
                success: true,
                user_name: decodedToken.user_name
            });
        }
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const authUser = async (req, res) => {
    try {

    }
    catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const storePassword = async (req, res) => {
    try {

    }
    catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}