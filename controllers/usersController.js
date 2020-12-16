const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Listar todos os usuários
const allUsers = async (req, res) => {
  User
    .findAll()
    .then(users => {
      res.render('admin/users/index', { users: users });
    })
};

// Página para criar o usuário
const screenCreateUser = async (req, res) => {
  res.render('admin/users/create');
};

// Criar usuário
const create = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User
    .findOne({
      where: { email: email }
    })
    .then(() => {
      if (user == undefined) {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        User
          .create({
            email: email,
            password: hash
          })
          .then(() => {
            res.redirect('/');
          })
          .catch((err) => {
            res.redirect('/');
          });
      } else {
        res.redirect('/admin/user/create');
      }
    });

};

// Página para fazer o login 
const screenLogin = async (req, res) => {
  res.render('admin/users/login');
};

// Efetuar o login 
const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User
    .findOne({
      where: { email: email }
    })
    .then(user => {
      if (user != undefined) {
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (isCorrect) {
          req.session.user = { id: user.id, email: user.email };          
          res.redirect('/admin/articles');
        } else {
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    })
};

// Efetuar o logout
const logout = async (req, res) => {
  req.session.user = undefined;
  res.redirect('/');
};


module.exports = {
  allUsers,
  screenCreateUser,
  create,
  screenLogin,
  login,
  logout
};