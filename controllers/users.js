module.exports = {
  getSignup(req, res, next) {
    res.render('auth/signup');
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