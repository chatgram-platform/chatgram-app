const pool = require('../config/db');

exports.getUserById = async (id) => {
  const [rows] = await pool.execute('SELECT id, username, email FROM users WHERE id = ?', [id]);
  return rows[0];
};
