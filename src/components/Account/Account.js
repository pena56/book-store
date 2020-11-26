import React, { useState } from "react";
import "./Account.css";
import signin from "../../imgs/signin.svg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Account() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="account__container">
      <div className="account">
        <div
          className="account__banner"
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#f3f3f3",
            backgroundSize: "cover",
            backgroundImage: `url(${signin})`,
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="account__form">
          <div className="account__details">
            <div className="account__brand">
              <Link to="/">
                Book<span>Store</span>
              </Link>
            </div>
            <h3 className="account__desc">Sign into your BookStore Account.</h3>
            <p className="account__terms">
              By Signing in you agree to BookStore's Conditions of Use and Sale.
              Please see our Privacy Notice and Cookie Notice{" "}
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="account__input"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="account__input"
              type="password"
              placeholder="Password"
            />
            <p className="account__forgot">Forgot Password?</p>
            <button onClick={login} className="account__button">
              Sign In
            </button>
            <p className="account__create">
              Don't have an Account?{" "}
              <span onClick={register}>Create an Account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
