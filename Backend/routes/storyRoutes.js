const express = require('express');
const storyController = require('../controllers/storyController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware.verifyToken, storyController.createStory);
router.get('/', storyController.getStories);

module.exports = router;
