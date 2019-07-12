const express = require('express');
const router = express.Router();

const {
  getSignup,
  getLogin,
  postSignup,
  postLogin
} = require('../controllers/users');

/* GET signup. */
router.get('/signup', getSignup);

/* POST signup */
router.post('/signup', postSignup);

/* GET login. */
router.get('/login', getLogin);

/* POST signup */
router.post('/login', postLogin);

module.exports = router;
