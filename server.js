// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const pageNotFoundRouter = require('./routes/pageNotFound');
const path = require('path');

// const routes = require('./routes');

const app = express();

// app.engine('hbs', expressHandlebars.engine({
//   layoutsDir: 'views/layouts/',
//   defaultLayout: 'main-layout',
//   extname: 'hbs'
// }));
app.set('views engine', 'ejs');
// app.set('views engine', 'hbs');
// app.set('views engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/bye', (req, res, next) => {
  res.send('<h1>Good Bye! Visit again.</h1>');
});

app.use(adminRoutes);

app.use(shopRouter);

app.use(pageNotFoundRouter);
// const server = http.createServer(app);

// server.listen(5000);
app.listen(5000);