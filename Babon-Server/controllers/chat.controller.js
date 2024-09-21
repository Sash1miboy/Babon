import Chat from "../models/chat.model.js"
import Chats from "../models/chats.model.js"
import createError from "../utils/createError.js"

export const createChat = async (req, res, next)=>{
    const newMessage = new Chat({
        chatsId: req.body.chatsId,
        userId: req.userId,
        desc: body.desc
    })
    try {
        const savedMessage = await newMessage.save();
        await Chats.findOneAndUpdate({id: req.body.chatsId}, {
            $set:{
                readByBuyer: req.isSeller,
                readBySeller: !req.isSeller,
                lastMessage: req.body.desc
            },
        },
        { new: true }
    );
        res.status(201).send(savedMessage);
    } catch (err) {
        next(err)
    }
}

export const getChat = async (req, res, next)=>{
    try {
        const messages = await Chat.find({chatsId:req.params.id});
        res.status(200).send(messages);   
    } catch (err) {
        next(err)
    }
}