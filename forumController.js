
// Create a new forum post
const ForumPost = require('../models/ForumPost');

exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPost = new ForumPost({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all forum posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
