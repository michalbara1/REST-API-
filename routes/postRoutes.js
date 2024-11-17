const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/posts', postController.createPost);

router.get('/posts', postController.getAllPosts);

router.get('/posts/:id', postController.getPostById);

module.exports = router;
