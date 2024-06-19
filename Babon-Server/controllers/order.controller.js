import Order from "../models/order.model.js"
import Service from "../models/service.model.js"

export const createOrder = async (req, res, next)=>{
    try {

        const service = await Service.findById(req.params.serviceId);

        const newOrder = new Order({
            serviceId: service._id,
            img: service.coverImage,
            title: service.title,
            buyerId: req.userId,
            sellerId: service.userId,
            price: service.price,
            payment_intent: "temporary",
        });

        await newOrder.save();
        res.status(200).send("Successful!")
        
    } catch (err) {
        next(err)
    }
}

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
    try {

    } catch (err) {
        next(err)
    }
}