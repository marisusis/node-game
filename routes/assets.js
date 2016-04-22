var router = require('express').Router();
var path = require('path');

router.get('/',function(req,res) {
  res.status(404).send("Not found.");
});

router.get('/*',function(req,res) {
  res.sendFile(path.resolve('build/'+req.params[0]));
});

module.exports = router;