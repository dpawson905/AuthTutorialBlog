const User = require('../models/user');
const Token = require('../models/token');

module.exports = {
  getSignup(req, res, next) {
    res.render("auth/signup", {
      url: "signup",
      userInfo: {
        firstName: "",
        lastName: "",
        email: "",
        username: ""
      }
    });
  },

  async postSignup(req, res, next) {
    res.send('Placeholder until code is implemented');
  },

  getLogin(req, res, next) {
    res.render('auth/login');
  },

  async postLogin(req, res, next) {
    res.send('Placeholder until code is implemented');
  }
}