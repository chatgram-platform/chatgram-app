const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

exports.register = async (req, res) => {
  try {

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
          await pool.execute(
      'INSERT INTO users (user_name, email, password_hash) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    } catch (error) {
       console.log("error in register route:",error)
    }

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(400).json({ message: 'User not found' });

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, message: `Welcome back, ${user.username}! 🎉` });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
