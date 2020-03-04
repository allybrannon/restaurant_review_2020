const db = require('./conn');

class RestaurantModel {
  constructor(
    id,
    name,
    distance,
    stars,
    category,
    favorite_dish,
    takeout,
    ate_last
  ) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.stars = stars;
    this.category = category;
    this.favorite_dish = favorite_dish;
    this.takeout = takeout;
    this.ate_last = ate_last;
  }

  static async getAllRestaurants() {
    try {
      const response = await db.any(`SELECT * FROM restaurant;`);
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }

  static async getRestaurantById(r_id) {
    try {
      const response = await db.any(
        `SELECT * FROM restaurant WHERE id = ${r_id};`
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }

  static async getReviewsByRestaurantId(r_id) {
    try {
      const response = await db.any(
        `SELECT * FROM review WHERE restaurant_id = ${r_id};`
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }

  static async addReview(r_id, review_title, review_text) {
    try {
      const response = await db.one(
        `INSERT INTO review (reviewer_id, restaurant_id, title, review, stars) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [2, r_id, review_title, review_text, 5]
      );
      return response;
    } catch (error) {
      console.log('ERROR: ', error);
      return error;
    }
  }
}

module.exports = RestaurantModel;
