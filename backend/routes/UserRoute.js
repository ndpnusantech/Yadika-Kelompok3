import { createUser, getUserById, getUsers } from "../controllers/UserController.js";
import express from "express";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users", getUserById);
router.post("/users", createUser);

export default router;
