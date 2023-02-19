import { User } from "../models/usersModel.js";
import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";

let secretpassword = "False hopes are more dangerous than fears";
export const checkToken = async (req, res, next) => {
    try {
        let salt = sha256(secretpassword);
        let token = req.token;
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
            req.json({
                user_name: decodedToken.user_name
            });
            next();
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
        const pass = await Auth.findAll({
            where: {
                user_name: req.body.user_name
            }
        })
        const user = await User.findAll({
            where: {
                id: pass[0].id
            }
        })
        if (pass[0].password === sha256(req.body.password + user[0].creation_date)) {
            let token = jwt.sign({ username: user[0].username }, secretpassword);
            res.json({
                username: user[0].username,
                token: token,
                outcome: "Success",
            });
        }
        else {
            res.json({ outcome: "Fail" }); 
        }
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}