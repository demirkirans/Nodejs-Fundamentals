exports.getLogin = (req, res, next) => {
  //let isLoggedIn = req.get('Cookie').split('=')[1];
  console.log(req.session.isLoggedIn);
  console.log("request id is  " + req.sessionID)
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res , next) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  }
  req.session.user = user;
  req.session.isLoggedIn = true; //sets a cookie 

  console.log("ip is", req.ip);
  res.redirect('/');
};

