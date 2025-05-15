import React, { useEffect, useState } from "react";
import axios from "axios";
import ForumPostCard from "./ForumPostCard";
import "./ForumPostList.css";

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  // Fetch existing posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/forum/posts"); 
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/forum/posts", newPost);
      setPosts([res.data, ...posts]); 
      setNewPost({ title: "", content: "", author: "" }); 
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">💬 Forum</h2>

      {/* New Post Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-6 border">
        <h3 className="text-xl font-semibold mb-3">Create a Post</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="content"
          placeholder="Write your post here..."
          value={newPost.content}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded h-28"
        />
        <input
          type="text"
          name="author"
          placeholder="Your name"
          value={newPost.author}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Post
        </button>
      </form>

      {/* Existing Posts */}
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts yet. Be the first to share!</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded-lg shadow mb-4 border">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <p className="text-sm text-gray-500 mt-1">By: {post.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ForumPage;
