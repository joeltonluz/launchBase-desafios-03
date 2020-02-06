const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const data = require('./data');

server.use(express.static('public'));

server.set("view engine","njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => {
  return res.render('index');
});

server.get('/about', (req, res) => {
  return res.render('about');
});

server.get('/courses', (req, res) => {
  return res.render('courses', { courses: data });
});

server.get('/courses/:name', (req, res,next) => {
  const { name } = req.params;

  const course = data.find((course) => {
    return course.name == name;
  })

  if (!course) {
    return res.status(404).render('not-found');
  }
  return res.render('course', { course });
});

server.use((req, res, next) => {
  res.status(404).render('not-found');
});

server.listen(5500,() => {
  console.log('server is running on port: 5500');
});