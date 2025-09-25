const express = require('express');
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/send', authMiddleware.verifyToken, chatController.sendMessage);
router.get('/:userId', authMiddleware.verifyToken, chatController.getChatHistory);

module.exports = router;
