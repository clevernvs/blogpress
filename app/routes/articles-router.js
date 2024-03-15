import express from 'express';
import Controller from '../controllers/articlesController';
import adminAuth from '../middlewares/adminAuth';

const router = express.Router();

// Listar artigos
router.get('/admin/articles', adminAuth, Controller.findAllArticles);

// Criar artigo
router.get('/admin/articles/new-article', adminAuth, Controller.newArticle);

// Salvar artigo
router.post('/articles/save', adminAuth, Controller.saveArticle);

// Deletar artigo
router.post('/articles/delete', adminAuth, Controller.removeArticle);

// Editar artigo
router.get('/admin/articles/edit/:id', adminAuth, Controller.editArticle);

// Atualizar artigo
router.post('/articles/update', adminAuth, Controller.updateArticle);

//Paginação de artigos
router.get('/articles/page/:num', Controller.paginationArticles);

module.exports = router;