const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hey! auth')
})

module.exports = router;