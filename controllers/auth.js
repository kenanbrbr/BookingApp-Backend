import User from "../models/User.js"
import bcyrpt from "bcyrptjs"

export const register = async (req, res, next) => {
  try {
    const salt = bcyrpt.genSaltSync(10);
    const hash = bcyrpt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    })

    await newUser.save();
    res.status(200).send("User has been created.")
  } catch (err) {
    next(err)
  }
}