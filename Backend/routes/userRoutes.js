const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware.verifyToken, userController.getProfile);
router.post('/follow/:userId', authMiddleware.verifyToken, userController.followUser);
router.post('/unfollow/:userId', authMiddleware.verifyToken, userController.unfollowUser);

module.exports = router;
