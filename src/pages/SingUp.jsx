import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate()

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate("/login")

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login">
        <form onSubmit={signUp}>
          <h1>Register</h1>
          <p>
            Already a user? <Link to="/login">Log in</Link>
          </p>

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="enter yout email"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter your password"
          />

          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}

