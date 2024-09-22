import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import serviceRoute from "./routes/service.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import messageRoute from "./routes/message.route.js";
import chatsRoute from "./routes/chats.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () =>{
  try {
      await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!")
    } catch (error) {
      handleError(error);
    }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173", credentials:true}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/services", serviceRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);
app.use("/api/messages", messageRoute);
app.use("/api/chats", chatsRoute);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";

  return res.status(errorStatus).send(errorMessage); 
})

app.listen(8800, ()=>{
  connect()
    console.log("Backend server is running!")
})