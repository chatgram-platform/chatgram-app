const pool = require('../config/db');

exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: 'Comment cannot be empty ✍️' });

    await pool.execute('INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)', [postId, req.userId, content]);
    res.status(201).json({ message: 'Comment added successfully 💬' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment', error: err.message });
  }
};
