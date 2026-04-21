import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GymMember from "./GymMember";

const Navbar = () => {
  const API = "http://localhost:8000/users";

  const [member, setMember] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const showUser = async () => {
    try {
      setLoading(true);

      const users = await fetch(API);

      if (!users.ok) {
        throw new Error("API response failed");
      }

      const jsonData = await users.json();
      setMember(jsonData);
    } catch (error) {
      console.log("Error fetching users:", error);
      setMember([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ TOGGLE FIX (MAIN FIX)
  const showMem = async () => {
    if (show) {
      setShow(false);   // 👉 close if already open
      return;
    }

    await showUser();   // fetch data only when opening
    setShow(true);      // open modal
  };

  const closeMem = () => {
    setShow(false);
  };

  return (
    <nav>
      <div className="logo">
        <h1>Fine Fit Studio</h1>
      </div>

      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/trainer">Trainer</NavLink>
        <NavLink to="/program">Program</NavLink>
        <NavLink to="/slider">Slider</NavLink>

        <div className="btns">
          <button className="signupNav">
            <NavLink to="/signup">SignUp</NavLink>
          </button>

          <button className="loginNav">
            <NavLink to="/login">LogIn</NavLink>
          </button>

          <button className="memberBtn" onClick={showMem}>
            {loading ? "Loading..." : "Members"}
          </button>
        </div>
      </ul>

      {show && (
        <GymMember
          user={member}
          onClose={closeMem}
        />
      )}

      <i id="bar" className="fa-solid fa-bars"></i>
    </nav>
  );
};

export default Navbar;