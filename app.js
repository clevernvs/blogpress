const express = require('express');
const bodyParser = require('body-parser');
// const connection = require("./database/connection");
const indexRouter = require('./routes/indexRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const articlesRouter = require('./routes/articlesRouter');

const app = express();

// EJS
app.set('view engine', 'ejs');

// Arquivos Estáticos
app.use(express.static('public')); 

// Body-parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
// Conexção DB
connection
  .authenticate()
  .then(() => {
    console.log("Connect Database sucess!");
  })
  .catch((err) => {
    console.log(err);
  });
*/

// Rotas
app.use('/', indexRouter);
app.use('/', categoriesRouter);
app.use('/', articlesRouter);

// Servidor
app.listen(3000, () => {
  console.log('Servidor iniciado!');
});
