var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GitHub Comments Lister',
    username: '',
    repoName: '',
    repoURL: ''
  });
});

module.exports = router;
