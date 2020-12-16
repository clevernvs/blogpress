const express = require('express');
const Controller = require('../controllers/articlesController');

const router = express.Router();

// Listar artigos
router.get('/admin/articles', Controller.findAllArticles);
// Criar artigo
router.get('/admin/articles/new-article', Controller.newArticle);
// Salvar artigo
router.post('/articles/save', Controller.saveArticle);
// Deletar artigo
router.post('/articles/delete', Controller.removeArticle);
// Editar artigo
router.get('/admin/articles/edit/:id', Controller.editArticle);
// Atualizar artigo
router.post('/articles/update', Controller.updateArticle);
//Paginação de artigos
router.get('/articles/page/:num', Controller.paginationArticles);

module.exports = router;