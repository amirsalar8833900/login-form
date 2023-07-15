import NavAuth from "./NavAuth";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <Link to="/">home</Link>
      </div>
      <div className="right">
        <NavLink to="/blog">Blog</NavLink>
        <NavAuth/>
      </div>
    </div>
  );
}
