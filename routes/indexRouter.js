const express = require('express');
const Article = require('../models/Article');
const Category = require('../models/Category');

const router = express.Router();

// Listar todos os artigos
router.get('/', (req, res) => {
  Article
    .findAll({
      order: [['id', DEC]],
      limit: 4
    })
    .then(articles => {
      Category.findAll().then(categories => {
        res.render('index', { articles: articles, categories: categories });
      });
    });
});

// 
router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  Article
    .findOne({
      where: { slug: slug }
    })
    .then(article => {
      if (article != undefined) {
        Category.findAll().then(categories => {
          res.render('article', { article: article, categories: categories });
        });
      } else {
        res.redirect('/')
      };
    })
    .catch(error => {
      console.log(error);
    })
});

// Exibir categoria
router.get('/category/:slug', (req, res) => {
  const { slug } = req.params;
  Category
    .findOne({
      where: { slug: slug },
      include: [{ model: Article }]
    })
    .then(category => {
      if (category != undefined) {
        Category
          .findAll()
          .then(categories => {
            res.render('index', { articles: category.articles, categories: categories})
          })
          .catch()

      } else {
        res.redirect('/');
      }
    })
    .catch(err => {
      res.redirect('/');
    })
});

module.exports = router;