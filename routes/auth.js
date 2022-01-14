const router = require('express').Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
  const user = new User({})
  user.save()
  res.send('Hey! auth')
})

router.get('/', (req, res) => {
  res.send('Hey! auth')
})

module.exports = router;