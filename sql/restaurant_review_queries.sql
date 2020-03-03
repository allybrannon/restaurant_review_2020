-- List all the reviews for a given restaurant given a specific restaurant ID.
SELECT
    *
FROM
    review
WHERE
    restaurant_id = 1;

-- List all the reviews for a given restaurant, given a specific restaurant name.
SELECT
    review.review
FROM
    review,
    restaurant
WHERE
    review.restaurant_id = restaurant.id
    AND restaurant.name = 'Strange Taco';

-- equivalent to:
SELECT
    review.review
FROM
    review
    INNER JOIN restaurant ON review.restaurant_id = restaurant.id
WHERE
    restaurant.name = 'Strange Taco';

-- List all the reviews for a given reviewer, given a specific author name.
SELECT
    review.review
FROM
    review
    INNER JOIN reviewer ON review.reviewer_id = reviewer.id
WHERE
    reviewer.name = 'Sean';

-- List all the reviews along with the restaurant they were written for.
-- In the query result, select the restaurant name and the review text.

SELECT
    review.review,
    restaurant.name
FROM
    review,
    restaurant
WHERE
    review.restaurant_id = restaurant.id;

-- List all the reviews along with the restaurant, and the reviewer's name.
-- The result should have the restaurant name, the review text, and the reviewer name.
-- Hint: you might need to do a three-way join - i.e. joining all three tables together.

SELECT
    restaurant.name AS restaurant_name,
    reviewer.name AS reviewer_name,
    review.review
FROM
    restaurant,
    review,
    reviewer
WHERE
    restaurant.id = review.restaurant_id
    AND review.reviewer_id = reviewer.id;

-- equivalent in inner join syntax
SELECT
    restaurant.name AS restaurant_name,
    reviewer.name AS reviewer_name,
    review.review
FROM
    reviewer
    INNER JOIN review ON review.reviewer_id = review.id
    INNER JOIN restaurant ON review.restaurant_id = restaurant.id;

