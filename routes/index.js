const express = require('express'),
  router = express.Router(),
  restaurantModel = require('../models/restaurantModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await restaurantModel.getAllRestaurants();

  res.render('template', {
    locals: {
      title: 'Express',
      data: data
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
