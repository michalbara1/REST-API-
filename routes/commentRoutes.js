const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');  // Adjust path to your controller

router.post('/comments', commentController.createComment);

router.get('/comments', commentController.getAllComments);

router.get('/comments/posts/:postId', commentController.getCommentsByPost);

module.exports = router;
