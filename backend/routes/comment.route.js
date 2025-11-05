import express from "express";
import {
  getPostComments,
  deleteComments,
  addComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/:postId", addComments);
router.delete("/:id", deleteComments);

export default router;
