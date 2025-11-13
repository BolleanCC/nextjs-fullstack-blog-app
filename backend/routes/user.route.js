import express from "express";
import { getUserSavedPosts, savePost } from "../controllers/user.controller.js";
import { requireAuth } from "@clerk/express";
const router = express.Router();

router.get("/saved", requireAuth(), getUserSavedPosts);
router.patch("/saved", requireAuth(), savePost);

router.get("/anothertest", (req, res) => {
  res.status(200).send("User route");
});

export default router;
