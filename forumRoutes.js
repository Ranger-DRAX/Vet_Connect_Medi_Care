const express = require('express');
const router = express.Router();

const forumController = require('../controllers/forumController');

router.post('/posts', forumController.createPost);

// GET: Get all forum posts
router.get('/posts', forumController.getAllPosts);

module.exports = router;