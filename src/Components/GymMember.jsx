import React from "react";
import logo from "../images/user.png";

const GymMember = ({ user = [], onClose }) => {
  return (
    <div className="members">
      
      {/* Close button */}
      <i
        onClick={onClose}
        className="fa-solid fa-xmark"
        style={{ cursor: "pointer" }}
      ></i>

      <h2 className="headMember">Our Members</h2>

      {/* Safety check */}
      {Array.isArray(user) && user.length > 0 ? (
        user.map((curVal, index) => (
          <div key={index}>
            <img className="logo" src={logo} alt="img" />
            <p>{curVal?.name}</p>
            <p>{curVal?.email}</p>
          </div>
        ))
      ) : (
        <p>No members found</p>
      )}
    </div>
  );
};

export default GymMember;