const pool = require('../config/db');

exports.getProfile = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE id = ?', [req.userId]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch profile', error: err.message });
  }
};

exports.followUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (parseInt(userId) === req.userId) return res.status(400).json({ message: "You can't follow yourself 🤦" });

    await pool.execute('INSERT INTO followers (follower_id, followed_id) VALUES (?, ?)', [req.userId, userId]);
    res.status(201).json({ message: 'Followed user successfully 👍' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to follow user', error: err.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await pool.execute('DELETE FROM followers WHERE follower_id = ? AND followed_id = ?', [req.userId, userId]);
    res.json({ message: 'Unfollowed user successfully 👋' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to unfollow user', error: err.message });
  }
};
