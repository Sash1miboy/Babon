import createError from "../utils/createError.js"
import Chats from "../models/chats.model.js"

export const createChats = async (req, res, next)=>{
    const newChat = new Chats({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller, 
        readByBuyer: !req.isSeller,
    });

    try {
        const savedChat = await newChat.save();
        res.status(201).send(savedChat);
    } catch (err) {
        next(err);
    }
}

export const updateChats = async (req, res, next)=>{

    try {
        const updatedChat = await Chats.findOneAndUpdate(
            {id: req.params.id}, 
            {
                $set: {
                    ...(req.isSeller ? {readBySeller: true} : {readByBuyer: true}),
                },
            },
            {new: true}
        );
        res.status(200).send(updatedChat);
    } catch (err) {
        next(err);
    }
}

export const getSingleChat = async (req, res, next)=>{
    try {
        const chat = await Chats.findOne({id:req.params.id});
        res.status(200).send(chat);
    } catch (err) {
        next(err);
    }
}

export const getChats = async (req, res, next)=>{
    try {
        const chats = await Chats.find(
            req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}
        );
        res.status(200).send(chats);
    } catch (err) {
        next(err);
    }
}