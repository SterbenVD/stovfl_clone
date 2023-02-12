import User from "../models/userModel.js";
import sha1 from 'js-sha1';
import jwt from "jsonwebtoken";

let secretpassword = "Never gonna give you up,Never gonna let you down,Never gonna run around and desert you";

export const checkToken = async (req, res) => {
    try {
        // let token = req.body.token;
        // if (!token) {
        //     res.json({
        //         success: false,
        //         message: "Error! Token was not provided."
        //     });
        // }
        // const decodedToken = jwt.verify(token, secretpassword);
        // const user = await User.findAll({
        //     where: {
        //         id: decodedToken.username
        //     }
        // })
        // if (!user) {
        //     res.json({
        //         success: false
        //     });

        // }
        // else {
        //     res.json({
        //         success: true,
        //         username: decodedToken.username
        //     });
        // }
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