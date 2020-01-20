const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('recipes');
});

router.get('/recipe/:id', (req, res, next) => {
  res.send('recipes');
});

module.exports = router;
