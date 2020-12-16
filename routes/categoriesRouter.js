const express = require('express');
const Controller = require('../controllers/categoriesController');

const router = express.Router();

// Criar categoria
router.get('/admin/categories/new-category', Controller.createNewCategory);
// Salvar categoria
router.post('/categories/save', Controller.saveCategory);
// Listar categorias 
router.get('/admin/categories', Controller.findAllCategory);
// Deletar categoria
router.post('/categories/delete', Controller.removeCategory);
// Editar categoria
router.get('/admin/categories/edit/:id', Controller.editCategory);
// Atualizar catergoria
router.post('categories/update', Controller.updateCategory);

module.exports = router;
