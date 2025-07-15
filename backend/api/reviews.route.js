import express from "express";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();

// route for GET /api/v1/reviews
router.route("/").get((req, res) => res.send("hello!"));

// Other API routes
router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews);
router.route("/new").post(ReviewsCtrl.apiPostReview);
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview);

export default router;
