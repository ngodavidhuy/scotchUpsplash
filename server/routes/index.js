const express = require('express');
const router = express.Router();

router.get('/feed', (req, res, next) => {
  console.log('hi');
});

module.exports = router;