const express = require('express'),
  router = express.Router(),
  restaurantModel = require('../models/restaurantModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await restaurantModel.getAllRestaurants();

  res.render('template', {
    locals: {
      title: 'Restaurant List',
      data: data
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

/* We want to load ane entirely different partial for a single restaurant,
so we can add a new router.get() method, rather than going into conditional hell */

router.get('/:r_id', async function(req, res, next) {
  const { r_id } = req.params;
  const data = await restaurantModel.getRestaurantById(r_id);
  const reviewList = await restaurantModel.getReviewsByRestaurantId(r_id);

  res.render('template', {
    locals: {
      title: data[0].name,
      data: data,
      reviewList: reviewList
    },
    partials: {
      partial: 'partial-single'
    }
  });
});

router.post('/', async function(req, res) {
  const { restaurant_id, review_title, review_text } = req.body;
  const idAsInt = parseInt(restaurant_id);

  const postData = await restaurantModel.addReview(
    idAsInt,
    review_title,
    review_text
  );
  console.log(postData);
  res.sendStatus(200);
});

module.exports = router;
