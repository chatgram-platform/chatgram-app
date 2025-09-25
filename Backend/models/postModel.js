const pool = require('../config/db');

exports.createPost = async (userId, content) => {
  const [result] = await pool.execute(
    'INSERT INTO posts (user_id, content) VALUES (?, ?)',
    [userId, content]
  );
  return result;
};

exports.getAllPosts = async () => {
  const [rows] = await pool.execute(`
    SELECT p.id, p.content, p.created_at, u.username, u.id AS userId
    FROM posts p
    JOIN users u ON p.user_id = u.id
    ORDER BY p.created_at DESC
  `);
  return rows;
};
