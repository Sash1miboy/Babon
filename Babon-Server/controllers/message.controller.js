import Message from "../models/message.model.js"
import Chats from "../models/chats.model.js"

export const createMessage = async (req, res, next)=>{
    const newMessage = new Message({
        messageId: req.body.messageId,
        userId: req.userId,
        desc: req.body.desc
    });
    try {
        const savedMessage = await newMessage.save();
        await Chats.findOneAndUpdate({id: req.body.messageId}, {
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

export const getMessage = async (req, res, next)=>{
    try {
        const messages = await Message.find({ messageId: req.params.id });
        res.status(200).send(messages);   
    } catch (err) {
        next(err)
    }
}