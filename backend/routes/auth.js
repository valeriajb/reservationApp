import express from "express"
import {loginUser,registerUser} from '../controllers/auth.js';
const router = express.Router();

router.post("/register", registerUser);
router.get("/login", loginUser);


export default router