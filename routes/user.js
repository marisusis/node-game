var router = require('express').Router();

router.get('/*',function(req,res) {
  res.status(405).send("User system not functional.");
});

module.exports = router;