import express, { Router } from "express";
import Hotel from '../models/Hotel.js';

const router = express.Router();

//create

router.post("/", async (req, resp) => {

  const newHotel = new Hotel(req.body)

  try {
    const savedHotel = await newHotel.save();
    resp.status(200).json(savedHotel);
  } catch (err) {
    resp.status("500").json(err)
  }
})
//update
//delete
//get
//getAll

export default router