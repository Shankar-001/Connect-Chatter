const express = require('express');
const {
  allMessage,
  sendMessage,
} = require('../Controllers/messageControllers.js');
const { authMiddleware } = require('../Middlewares/authMiddleware.js');
const router = express.Router();

router.route('/:chatId').get(authMiddleware, allMessage);
router.route('/').post(authMiddleware, sendMessage);

module.exports = router;
