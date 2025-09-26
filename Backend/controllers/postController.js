const pool = require('../config/db');
const { validatePostContent } = require('../utils/validators');

exports.createPost = async (req, res) => {
  try {
    const { content,title } = req.body;
    validatePostContent(content,title);
    await pool.execute('INSERT INTO posts (user_id, content,title) VALUES (?, ?,?)', [req.userId, content,title]);
    res.status(201).json({ message: 'Post created successfully ✨' });
  } catch (err) {
    res.status(400).json({ message: 'Post creation failed', error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT p.id, p.content, u.username, u.id AS userId
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch posts', error: err.message });
  }
};
