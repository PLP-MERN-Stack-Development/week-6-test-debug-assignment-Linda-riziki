const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === 'password123') {
    return res.status(200).json({ message: 'Login successful', token: 'mock-jwt-token' });
  }

  const err = new Error('Invalid credentials');
  err.status = 401;
  next(err);
};

module.exports = { loginUser };
