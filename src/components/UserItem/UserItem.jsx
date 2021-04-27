import React from "react";
import "./UserItem.css";

const UserItem = (props) => {
  const { index, name, email, salariu, picture, isGold } = props;

  return (
    <div className="card">
      <div className="user-text-info">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Salariu: {salariu}</p>
        <p>{isGold ? "⭐ Gold" : "Basic"}</p>
      </div>
      <div className="user-actions">
        <div className="user-picture-holder">
          <img className="user-picture" src={picture} alt="" />
        </div>
        <p
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.removeUser(index)}
        >
          delete
        </p>
      </div>
    </div>
  );
};

export default UserItem;
