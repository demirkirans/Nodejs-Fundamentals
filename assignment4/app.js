const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//get route handlers 

const adminData = require('./routes/admin');
const usersData = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use('/users', usersData.router);

//404
app.use( (req, res, next) => {
    res.status(404).render('404', {pageTitle: '404', path: req.url});
});

app.listen(3000);