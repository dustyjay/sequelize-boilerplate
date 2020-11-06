module.exports = {
  getServices(req, res, next) {
    return res.status(200).json({ message: 'Welcome to Express API template' });
  }
};
