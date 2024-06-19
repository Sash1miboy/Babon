import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    serviceId:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:false,
    },
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    sellerId:{
        type:String,
        require:true,
    },
    buyerId:{
        type:String,
        require:true,
    },
    buyerId:{
        type:String,
        require:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    payment_intent:{
        type:String,
        require:true,
    },
    // serviceToDo:{
    //     type:String,
    //     require:true,
    // },
    // fromDate:{
    //     type:Date,
    //     require:true,
    // },
    // toDate:{
    //     type:Date,
    //     require:true,
    // },
    // info:{
    //     type:String,
    //     require:false,
    // }
},{
    timestamps:true
});

export default mongoose.model("Order", orderSchema)