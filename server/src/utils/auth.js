const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === 'mock-jwt-token') {
    next();
  } else {
    const err = new Error('Unauthorized');
    err.status = 403;
    next(err);
  }
};

module.exports = { verifyToken };
