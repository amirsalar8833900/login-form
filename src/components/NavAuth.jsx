import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";


export default function NavAuth() {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user sign out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authUser === null ? (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/singup">Sing Up</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/" onClick={userSignOut}>
            Sign Out
          </NavLink>
        </>
      )}
    </>
  );
}
