import mongoose from 'mongoose';
const { Schema } = mongoose;

const serviceSchema = new Schema({
    userId:{
        type:String,
        require: true,
    },
    title:{
        type:String,
        require: true,
    },
    desc:{
        type:String,
        require: true,
    },
    totalStars:{
        type:Number,
        default: 0,
    },
    starNumber:{
        type:Number,
        default: 0,
    },
    category:{
        type:String,
        require: true,
    },
    price:{
        type:Number,
        require: true,
    },
    coverImage:{
        type:String,
        require: true,
    },
    images:{
        type:[String],
        require: false,
    },
    shortTitle:{
        type:String,
        require: true,
    },
    shortDesc:{
        type:String,
        require: true,
    },
    features:{
        type:[String],
        require: false,
    },
    sales:{
        type:Number,
        default: 0,
    }
},{
    timestamps:true
});

export default mongoose.model("Service", serviceSchema)