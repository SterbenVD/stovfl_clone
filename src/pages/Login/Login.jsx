import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";
import hidePwdImg from "/hide.svg";
import showPwdImg from "/show.svg";
import { Link } from "react-router-dom";

export default function Login() {
  const [style, setStyle] = useState(styles.no_error);
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <img src="/favicon.png" />
        </div>
        <div className={styles.sub_main}>
          <h2 className={styles.h2_css}>Welcome Back</h2>

          <form className="login-form">
            <label className={styles.label_css} htmlFor="email">
              email
            </label>
            <input
              className={styles.input_css}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label className={styles.label_css} htmlFor="password">
              password
            </label>
            <div className={styles.pwd_container}>
              <input
                className={styles.input_css}
                name="pwd"
                placeholder="Enter Password"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
            </div>
          </form>
          <button
            className={styles.button_css}
            onClick={() => setStyle(styles.error)}
          >
            Log In
          </button>
          <div className={style}>Invalid email or password</div>
          <h4 className={styles.h4_css}>Don't have an account ?</h4>
          <Link to='/register' className={styles.linkstyle}><button
            className={styles.butt}
            type="Sign In"
            onClick={() => setStyle(styles.no_error)}
          >
            Register
          </button></Link>
        </div>
      </div>
    </>
  );
}
