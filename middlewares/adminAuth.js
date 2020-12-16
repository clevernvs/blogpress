function adminAuth(req, res, next) {
  if (req.session.user != undefinded) {
    next();
  } else {
    res.redirect('/login');    
  }
};

module.exports = { adminAuth };