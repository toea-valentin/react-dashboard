import React from "react";
import "./PostItem.css";

const PostItem = (props) => {
  const { title, body } = props.data;

  return (
    <div className="card">
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostItem;
