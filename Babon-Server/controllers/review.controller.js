import createError from "../utils/createError.js";
import Review from "../models/review.model.js"
import Service from "../models/service.model.js"

export const createReview = async (req, res, next)=>{
    if(req.isSeller) 
        return next(createError(403, "Sellers can't create a review!"))

    const newReview = new Review ({
        userId: req.userId,
        serviceId: req.body.serviceId,
        desc: req.body.desc,
        star: req.body.star,
    });

    try {
        const review = await Review.findOne({
            serviceId: req.body.serviceId, 
            userId: req.userId,
        });

        if(review) return next(createError(403, "You already created a reviews for this service!"));

        const savedReview = await newReview.save();
        await Service.findByIdAndUpdate(req.body.serviceId, {
            $inc: {totalStars: req.body.star, starNumber: 1},
        });
        res.status(201).send(savedReview);
    } catch (err) {
        next(err);
    }
};

export const getReviews = async (req, res, next)=>{
    try {
        const reviews = await Review.find({serviceId: req.params.serviceId})
        res.status(200).send(reviews);
    } catch (err) {
        next(err);
    }
}

export const deleteReview = async (req, res, next)=>{
    try {
        
    } catch (err) {
        next(err);
    }
}