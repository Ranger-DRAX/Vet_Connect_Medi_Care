import React from "react";
import "./ForumCard.css"; // create a separate CSS file if needed

const ForumCard = ({ post }) => {
  return (
    <div className="forum-card">
      <div className="forum-content">
        <h3 className="forum-title">{post.title}</h3>
        <p className="forum-text">{post.content}</p>
      </div>

      <div className="forum-footer">
        <p className="forum-author">Posted by: <strong>{post.author}</strong></p>
        <p className="forum-date">
          {new Date(post.createdAt).toLocaleDateString()} • {new Date(post.createdAt).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default ForumCard;
