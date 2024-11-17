const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  try {
    const { title, content, owner } = req.body; 
    const newPost = new Post({
      title,
      content,
      owner,
    });
    await newPost.save();
    res.status(201).json({
      message: 'Post created successfully',
      post: newPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to create post',
      error: error.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to fetch posts',
      error: error.message,
    });
  }
};
exports.getPostById = async (req, res) => {
  const postId = req.params.id; 
  try {
    const post = await Post.findById(postId); 
    if (!post) {
      // If the post isn't found, return a 404 error
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({
      message: 'Post fetched successfully',
      post: post
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to fetch post',
      error: error.message
    });
  }
};