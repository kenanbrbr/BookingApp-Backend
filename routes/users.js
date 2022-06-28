import express, { Router } from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();


router.get("/checkauthentication", verifyToken,(req,res,next)=>{
res.send("hello user , you are authenticated.")
})

//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/:id", getUser);

//getAll
router.get("/", getUsers);

export default router