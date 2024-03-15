import express from 'express';
import bodyParser from 'body-parser';
import connection from './database/connection';
import indexRouter from './routes/index-router';
import categoriesRouter from './routes/categories-router';
import articlesRouter from './routes/articles-router';
import usersRouter from './routes/users-router';
import dotenv from 'dotenv';
import session from 'express-session';
import { configDotenv } from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

// config   EJS
app.set('view engine', 'ejs');

// //Express Session
// app.use(session({
//   secret: 'acalkalufaçadakaçkdalauf',
//   cookie: { maxAge: 30000 }
// }));

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
app.use('/', usersRouter);

// // Rotas da Session
// app.get('/session', (req, res) => {
//   req.session.treinamento
// });

// app.get('/leitura', (req, res) => {

// });

// Servidor
app.listen(PORT, () => {
  console.log('Servidor iniciado!');
});
