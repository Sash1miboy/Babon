import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    },
    dateOfBirth:{
        type:Date,
        required: true
    },
    country:{
        type:String,
        required: false
    },
    userDesc:{
        type:String,
        required: false
    },
    isSeller:{
        type:Boolean,
        default: false
    },
    img:{
        type:String,
        required: false
    }
},{
    timestamps:true
});

export default mongoose.model("User", userSchema)