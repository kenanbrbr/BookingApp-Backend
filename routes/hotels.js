import express, { Router } from "express";
import Hotel from '../models/Hotel.js';
import { createError } from "../utils/error.js";

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

router.put("/:id", async (req, resp) => {

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    resp.status(200).json(updatedHotel);
  } catch (err) {
    resp.status("500").json(err)
  }
})
//delete
router.delete("/:id", async (req, resp) => {

  try {
    await Hotel.findByIdAndDelete(req.params.id);
    resp.status(200).json("Hotel has been deleted...");
  } catch (err) {
    resp.status("500").json(err)
  }
})
//get
router.get("/:id", async (req, resp) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    resp.status(200).json(hotel);
  } catch (err) {
    resp.status("500").json(err)
  }
})
//getAll

router.get("/", async (req, resp, next) => {

  // const failed = true;
  // const err = new Error();
  // err.status = 404;
  // err.message = "Sorry not found!";
  // if (failed) return next(createError(401,"You are not authenticated!"));

  try {
    const hotels = await Hotel.find();
    resp.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
})

export default router