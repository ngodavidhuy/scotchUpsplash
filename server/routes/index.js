const express = require('express');
const axios = require('axios');
const config = require('../../config').upsplash
const router = express.Router();

const API_root = "https://api.unsplash.com";
const count = 18;


router.get('/feed', function(req, res, next) {
  axios.get(`${API_root}/photos/random?client_id=${config.accessKey}&count=${count}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;