import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const jsonData = await response.json();
    console.log(jsonData);

    // clear form
    e.target.reset();

    if (response.status === 200) {
      alert(jsonData.message);
      // navigate("/");
    } else {
      alert(jsonData.message);
    }
  };

  return (
    <>
      <p className="logHead">LogIn</p>

      {/* ❗ class → className fix */}
      <form onSubmit={handleSubmit} className="loginPage">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInput}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
        />

        <button id="logBtn" type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;