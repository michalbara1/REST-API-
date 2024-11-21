const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

// 1. Create a new comment
router.post('/', commentController.createComment);

// 2. Get all comments
router.get('/', commentController.getAllComments);

// 3. Get a comment by ID
router.get('/:commentId', commentController.getCommentById);

// 4. Update a comment by ID
router.put('/:commentId', commentController.updateComment);

// 5. Delete a comment by ID
router.delete('/:commentId', commentController.deleteComment);

// 6. Get comments by post ID
router.get('/post/:postId', commentController.getCommentsByPostId);

module.exports = router;