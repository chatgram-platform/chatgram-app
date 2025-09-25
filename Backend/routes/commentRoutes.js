const express = require('express');
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/:postId', authMiddleware.verifyToken, commentController.addComment);

module.exports = router;
