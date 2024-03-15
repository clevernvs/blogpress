import express from 'express';
import Controller from '../controllers/categoriesController';

const router = express.Router();

// Criar categoria
// router.port('/admin/categories/:id', Controller.create);
router.get('/admin/categories/new-category', Controller.createNewCategory);

// Salvar categoria
// router.post('/categories', Controller.save);
router.post('/categories/save', Controller.saveCategory);

// Listar categorias 
// router.get('/admin/categories', Controller.findAll);
router.get('/admin/categories', Controller.findAllCategory);

// Deletar categoria
// router.delete('/categories/:id', Controller.remove);
router.post('/categories/delete', Controller.removeCategory);

// Editar categoria
// router.get('/admin/categories/edit/:id', Controller.edit);
router.get('/admin/categories/edit/:id', Controller.editCategory);

// Atualizar catergoria
// router.put('categories/', Controller.update);
router.post('categories/update', Controller.updateCategory);

module.exports = router;
