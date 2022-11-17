//1. Crear a depencia de express
const express = require('express');
const {getAllReviews,getSingleReview,createReview,updateReview,deleteReview} = require ('../Controllers/ReviewController')

const router = express.Router();

router.route('/').get(getAllReviews).post(createReview)

router.route('/:id').get(getSingleReview).put(updateReview).delete(deleteReview)

module.exports = router