import Order from "../models/order.model.js";
import Service from "../models/service.model.js";
import Stripe from "stripe";

export const getOrders = async (req, res, next)=>{
    try {
        const orders = await Order.find({
            ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}),
            isCompleted:true,
        });

        res.status(200).send(orders);
    } catch (err) {
        next(err)
    }
}

export const intent = async (req, res, next)=>{
    const stripe = new Stripe(
        process.env.STRIPE
    );

    const service = await Service.findById(req.params.id)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: service.price * 100,
        currency: "idr",
        automatic_payment_methods: {
          enabled: true,
        },
    });

    const newOrder = new Order({
        serviceId: service._id,
        img: service.coverImage,
        title: service.title,
        buyerId: req.userId,
        sellerId: service.userId,
        price: service.price,
        payment_intent: paymentIntent.id,
    });

    await newOrder.save();

    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    })
}

export const confirm = async (req, res, next)=>{
    try {
        const orders = await Order.findOneAndUpdate(
        {
            payment_intent: req.body.paymentIntent
        }, 
        {
            $set:{
            isCompleted: true,
            },
        }
    );

        res.status(200).send("Order have been confirmed!");
    } catch (err) {
        next(err)
    }
}