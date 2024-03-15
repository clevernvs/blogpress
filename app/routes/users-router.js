import express from 'express';
import Controller from '../controllers/usersController';

const router = express.Router();

// Listar usuarios
router.get('/admin/users', Controller.allUsers);

// Página para criar o usuário
router.get('/admin/users/create', Controller.screenCreateUser);

// Criar usuario
router.post('/users/create', Controller.create);

// Página para fazer o login
router.get('/login', Controller.screenLogin);

// Efetuar o login
router.post('/authenticate', Controller.login);

// Efetuar o logout
router.post('/logout', Controller.logout);

module.exports = router;