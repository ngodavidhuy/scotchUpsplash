const express = require('express');
const axios = require('axios');
const config = require('universal-config');
const router = express.Router();

router.get('/feed', function(req, res, next) {
  let client_id = config.get("UNSPLASH:accessKey");
  let count = config.get("UNSPLASH:fetchCount");
  axios.get(`https://api.unsplash.com/photos/random?client_id=${client_id}&count=${count}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;