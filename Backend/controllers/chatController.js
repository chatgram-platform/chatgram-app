const pool = require('../config/db');

exports.sendMessage = async (req, res) => {
  try {
    const { recipientId, content } = req.body;
    if (!content) return res.status(400).json({ message: 'Message cannot be empty ✉️' });

    await pool.execute('INSERT INTO messages (sender_id, recipient_id, content) VALUES (?, ?, ?)', [req.userId, recipientId, content]);
    res.status(201).json({ message: 'Message sent successfully 📬' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message', error: err.message });
  }
};

exports.getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await pool.execute(`
      SELECT * FROM messages
      WHERE (sender_id = ? AND recipient_id = ?) OR (sender_id = ? AND recipient_id = ?)
      ORDER BY created_at ASC
    `, [req.userId, userId, userId, req.userId]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch chat history', error: err.message });
  }
};
