const express = require('express');

const path = require('path')// path.join(__dirname + ...)

const router = express.Router();
const usernames = [];

//      /admin/add-name  ==>  GET
router.get('/add-name', (req, res) => {
    res.render('add-name', {
        pageTitle: 'add-name',
        path: '/admin/add-name'
    })
});

//      /admin/add-name  ==> POST
router.post('/add-name', (req, res) => {
    console.log('admin.js', req.body);
    usernames.push({username: req.body.username});
    res.redirect('/users');
});


module.exports.router = router;
module.exports.usernames = usernames;


