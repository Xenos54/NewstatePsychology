var express = require('express');
var router = express.Router();

/* GET french page. */
router.get('/', function(req, res) {
  res.render('french', { title: 'Newstate-Psychology' });
});

module.exports = router;
