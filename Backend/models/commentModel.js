const pool = require('../config/db');

exports.addComment = async (postId, userId, content) => {
  const [result] = await pool.execute(
    'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)',
    [postId, userId, content]
  );
  return result;
};

exports.getCommentsByPostId = async (postId) => {
  const [rows] = await pool.execute(`
    SELECT c.id, c.content, c.created_at, u.username, u.id AS userId
    FROM comments c
    JOIN users u ON c.user_id = u.id
    WHERE c.post_id = ?
    ORDER BY c.created_at ASC
  `, [postId]);
  return rows;
};
