import express from "express";
import { getUserSavedPosts, savePost } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/saved", getUserSavedPosts);
router.post("/saved", savePost);

router.get("/anothertest", (req, res) => {
  res.status(200).send("User route");
});

export default router;
