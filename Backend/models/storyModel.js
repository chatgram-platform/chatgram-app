const pool = require('../config/db');

exports.createStory = async (userId, content) => {
  const [result] = await pool.execute(
    'INSERT INTO stories (user_id, content) VALUES (?, ?)',
    [userId, content]
  );
  return result;
};

exports.getAllStories = async () => {
  const [rows] = await pool.execute(`
    SELECT s.id, s.content, s.created_at, u.username, u.id AS userId
    FROM stories s
    JOIN users u ON s.user_id = u.id
    ORDER BY s.created_at DESC
  `);
  return rows;
};
