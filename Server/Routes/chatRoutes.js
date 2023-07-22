const express = require('express');
const {
  createChat,
  getChats,
  createGroup,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require('../Controllers/chatControllers.js');
const { authMiddleware } = require('../Middlewares/authMiddleware.js');
const router = express.Router();

router.route('/').post(authMiddleware, createChat);
router.route('/').get(authMiddleware, getChats);
router.route('/group').post(authMiddleware, createGroup);
router.route('/rename').put(authMiddleware, renameGroup);
router.route('/groupremove').put(authMiddleware, removeFromGroup);
router.route('/groupadd').put(authMiddleware, addToGroup);

module.exports = router;
