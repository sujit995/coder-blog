import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import './topbar.css';
import { Context } from "../../context/Context";
import Avatar from 'react-avatar';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const [clicked, setClicked] = useState(false);
  const PF = "https://bloggerbackend-54y0.onrender.com/images/";


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <>
      <nav>
        <Link to="/" className="logo">Blogger</Link>
        <div>
          <ul id="navbar" className={!clicked ? "#navbar active" : "#navbar"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/write">Write</Link></li>
            {
              user ?
                <li onClick={handleLogout}><Link to="/">Logout</Link></li>
                :
                <li><Link to="/login">Login</Link></li>
            }

            <li>
              {user ? <Avatar name={user.username} size={40} round="50px" /> : ""}
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-bars" : "fas fa-times"}></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar
