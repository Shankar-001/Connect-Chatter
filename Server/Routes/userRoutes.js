const express = require('express');
const {
  registerUser,
  loginUser,
  allUsers,
} = require('../Controllers/userControllers.js');
const { authMiddleware } = require('../Middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', registerUser);
router.get('/', authMiddleware, allUsers);
router.post('/login', loginUser);

module.exports = router;
