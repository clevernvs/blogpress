import { create, findAll, destroy, findByPk, update } from '../models/Category';
import slugify from 'slugify';

// Criar categoria
const createNewCategory = async (req, res) => {
  res.render('admin/categories/new-category');
};

// Salvar categoria
const saveCategory = async (req, res) => {
  const title = req.body.title;
  if (title !== undefined) {
    create({
      title: title,
      slug: slugify(title)
    })
      .then(() => {
        res.redirect('/admin/categories');
      })
  } else {
    res.redirect('/admin/categories/new-category');
  }
};

// Listar Categorias
const findAllCategory = async (req, res) => {
  findAll().then(categories => {
    res.render('/admin/categories/index', { categories: categories });
  });
};

// Deletar categoria
const removeCategory = async (req, res) => {
  const id = req.body.id;
  try {
    if (id != undefined) {
      if (!isNaN(id)) {
        destroy({
          where: { id: id }
        })
          .then(() => {
            res.redirect('/admin/categories');
          });
      } else {
        res.redirect('/admin/categories');
      }
    } else {
      res.redirect('/admin/categories');
    }
  } catch (error) {
    console.log(error);
  }
};

// Editar catergoria
const editCategory = async (req, res) => {
  const id = req.body.id;

  if (isNaN(id)) {
    res.redirect('/admin/categories');
  }

  findByPk(id).then(category => {
    if (category != undefined) {
      res.render('admin/categories/edit-category', { category: category });
    } else {
      res.redirect('/admin/categories');
    }
  });
};

// Atualizar categoria
const updateCategory = async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;

  update({
    title: title,
    slug: slugify(title)
  }, {
    where: { id: id }
  })
    .then(() => {
      res.redirect('/admin/categories');
    })
};


export default {
  createNewCategory,
  saveCategory,
  findAllCategory,
  removeCategory,
  editCategory,
  updateCategory
};