const express = require('express');
const router = express.Router();

const {
  getSignup,
  getLogin
} = require('../controllers/users');

/* GET signup. */
router.get('/signup', getSignup);

/* GET login. */
router.get('/login', getLogin);

module.exports = router;
