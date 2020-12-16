const Article = require('../models/Article');
const Category = require('../models/Category');
const slugify = require('slugify');


// Listar artigos
const findAllArticles = async (req, res) => {
  Article
    .findAll({
      include: [{ model: Category }]
    })
    .then(articles => {
      res.render('admin/articles/index', { articles: articles });
    });
};

// Criar artigo
const newArticle = async (req, res) => {
  Category.findAll(categories => {
    res.render('/admin/articles/new-article', { categories: categories });
  });
};

// Salvar artigo
const saveArticle = async (req, res) => {
  // const title = req.body.title;
  // const body = req.body.body;
  // const category = req.body.category;

  const { title, body, category } = req.body;

  Article
    .create({
      title: title,
      slug: slugify(title),
      body: body,
      categoryid: category
    })
    .then(() => {
      res.redirect('/admin/articles');
    });
};

// Deletar artigo
const removeArticle = async (req, res) => {
  const id = req.body.id;

  if (id != undefined) {
    if (!isNaN(id)) {
      Article
        .destroy({
          where: { id: id }
        })
        .then(() => {
          res.redirect('/admin/articles');
        });
    } else {
      res.redirect('/admin/articles');
    }
  } else {
    res.redirect('/admin/articles');
  }
};

// Editar artigo
const editArticle = async (req, res) => {
  const id = req.params.id;

  Article
    .findByPk(id)
    .then(article => {
      if (article != undefined) {
        Category
          .findAll()
          .then(categories => {
            res.render('admin/articles/edit-article', { categories: categories })
          });
      } else {
        res.redirect('/');
      }
    })
    .catch(err => {
      res.redirect('/');
    });

};

// Atualizar artigo
const updateArticle = async (req, res) => {
  const { id, title, body, category } = req.body;

  Article
    .update({
      title: title,
      body: body,
      categoryId: category,
      slug: slugify(title)
    }, {
      where: { id: id }
    })
    .the(() => {
      res.redirect('admin/articles');
    })
    .catch(err => {
      res.redirect('/');
    });
};

// Paginação de artigos
const paginationArticles = async (req, res) => {
  const page = req.params.num;
  const offset = 0;

  IsNaN(page) || page == 1 ? offset = 0 : offset = (parseInt(page) - 1) * 4;

  Article
    .findAndCountAll({
      limit: 5,
      offset: offset,
      order: [['id', DEC]]
    })
    .then(articles => {
      const next;
      offset + 4 >= articles.count ? next = false : next = true;

      const result = {
        page: parseInt(page),
        next: next,
        articles: articles,
      };

      Category
        .findAll()
        .then(categories => {
          res.render('admin/articles/page', { result: result, categories: categories });
        });

      res.json(result);
    })
    .catch();
};



module.exports = {
  findAllArticles,
  newArticle,
  saveArticle,
  removeArticle,
  editArticle,
  paginationArticles
};