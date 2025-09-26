const pool = require('../config/db');

exports.createStory = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: 'Story cannot be empty 📝' });
     console.log("content stories:",content);
    await pool.execute('INSERT INTO stories (user_id, content) VALUES (?, ?)', [req.userId, content]);
    res.status(201).json({ message: 'Story created successfully 🌟' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create story', error: err.message });
  }
};

exports.getStories = async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT s.id, s.content, u.username
      FROM stories s
      JOIN users u ON s.user_id = u.id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch stories', error: err.message });
  }
};
