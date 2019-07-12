module.exports = {
  getSignup(req, res, next) {
    res.render('auth/signup');
  },

  getLogin(req, res, next) {
    res.render('auth/login');
  }
}