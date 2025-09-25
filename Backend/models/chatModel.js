const pool = require('../config/db');

exports.sendMessage = async (senderId, recipientId, content) => {
  const [result] = await pool.execute(
    'INSERT INTO messages (sender_id, recipient_id, content) VALUES (?, ?, ?)',
    [senderId, recipientId, content]
  );
  return result;
};

exports.getChatHistory = async (userId1, userId2) => {
  const [rows] = await pool.execute(`
    SELECT *
    FROM messages
    WHERE (sender_id = ? AND recipient_id = ?) OR (sender_id = ? AND recipient_id = ?)
    ORDER BY created_at ASC
  `, [userId1, userId2, userId2, userId1]);
  return rows;
};
