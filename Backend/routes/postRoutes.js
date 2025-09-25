const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware.verifyToken, postController.createPost);
router.get('/', postController.getPosts);

module.exports = router;
