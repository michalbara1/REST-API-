const Comment = require('../models/comment.model');
const Post = require('../models/post.model');

// 1. Create a new comment
exports.createComment = async (req, res) => {
  const { content, postId, owner } = req.body;
  try {
    const newComment = new Comment({
      content,
      postId,
      owner,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: 'Error creating comment', error: err.message });
  }
};

// 2. Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments', error: err.message });
  }
};

// 3. Get a comment by ID
exports.getCommentById = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comment', error: err.message });
  }
};

// 4. Update a comment by ID
exports.updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content, owner } = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(commentId, { content, owner }, { new: true });
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json({ message: 'Error updating comment', error: err.message });
  }
};

// 5. Delete a comment by ID
exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting comment', error: err.message });
  }
};

// 6. Get comments by Post ID
exports.getCommentsByPostId = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId });
    if (comments.length === 0) {
      return res.status(404).json({ message: 'No comments found for this post' });
    }
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments', error: err.message });
  }
}