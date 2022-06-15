import express, { application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


const app = express()
dotenv.config()

const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB...")
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb disconnected...")
})


mongoose.connection.on("connected", () => {
  console.log("mongoDb connected...")
})


app.get("/users", (req, resp) => {
  resp.send("hello first Node.js request...");
})


app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);



app.listen(8800, () => {
  connect()
  console.log("Connected to backend...")
})