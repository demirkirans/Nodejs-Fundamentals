const express = require('express');
const adminData = require('./admin');

const router = express.Router();


//    /users  ==>  GET
router.get('', (req, res) => {
    const usernames = adminData.usernames; //get shared array from admin.js to show users
    console.log('users.js', usernames);
    res.render('users', { 
        prods: usernames,
        path: '/users',
        pageTitle: 'Users'
    });
});

module.exports.router = router;

