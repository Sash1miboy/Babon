import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    messageId:{
        type:String,
        require: true,
    },
    userId:{
        type:String,
        require: true,
    },
    desc:{
        type:String,
        require: true,
    }
},{
    timestamps:true
});

export default mongoose.model("Message", messageSchema)