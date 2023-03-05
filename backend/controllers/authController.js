import { User } from "../models/usersModel.js";
import { Auth } from "../models/authModel.js";
import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";
import { max } from "../config/sync.js";

let secretpassword = "False hopes are more dangerous than fears";
let salt = sha256(secretpassword);
export const checkToken = async (req, res, next) => {
  try {
    let token = req.body.token;
    if (!token) {
      res.json({
        success: false,
        message: "Error! Token was not provided.",
      });
    } else {
      const decodedToken = jwt.verify(token, salt);
      console.log(decodedToken)
      const user = await Auth.findAll({
        where: {
          user_name: decodedToken.username,
        },
      });
      if (!user) {
        res.json({
          success: false,
        });
      } else {
        req.body.user_name=decodedToken.username
        next();
      }
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const authUser = async (req, res) => {
  try {
    // let checker = [
    //   "[",
    //   "$",
    //   "&",
    //   "+",
    //   ":",
    //   ";",
    //   "=",
    //   "?",
    //   "@",
    //   "#",
    //   "|",
    //   "'",
    //   "<",
    //   ">",
    //   ".",
    //   "^",
    //   "*",
    //   "(",
    //   ")",
    //   "%",
    //   "!",
    //   "-",
    //   "]",
    // ];
    // for (var element in req.query) {
    //   checker.map((ele) => {
    //     element = element.replaceAll(ele, "\\" + ele);
    //   });
    // }
    const passlist = await Auth.findAll({
      where: {
        user_name: req.query.user_name,
      },
    });
    const pass = passlist[0].dataValues;
    const userlist = await User.findAll({
      where: {
        id: pass.id,
      },
    });
    const user = userlist[0].dataValues;
    let enpass = sha256(req.query.password + user.creation_date);

    if (pass.pass === enpass) {
      let token = jwt.sign({ username: pass.user_name }, salt);
      res.json({
        username: pass.username,
        token: token,
        outcome: "Success",
      });
    } else {
      res.json({ outcome: "Fail" });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const date = new Date();
    let max_val = await User.max("id");
    req.body.id = 1 + max_val;
    req.body.creation_date = date.toISOString();
    let password = sha256(req.body.password + req.body.creation_date); //salted hash
    delete req.body.password;
    let user = await User.create(req.body);
    let username = req.body.display_name + "@" + user.id;
    username = username.replace(/\s+/g, "");
    await Auth.create({
      id: req.body.id,
      user_name: username,
      pass: password,
    });
    let token = jwt.sign({ user_name: username }, salt);
    res.json({
      user_name: username,
      token: token,
      success: true,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
