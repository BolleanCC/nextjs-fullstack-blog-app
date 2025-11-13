import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
    const comments = await Comment.find({ post: req.params.postId }).populate("user", "username img").sort({ createdAt: -1 });

    res.json(comments);
};


export const addComments = async (req, res) => {
    const clerkUserId = req.auth.userId;
    const postId = req.params.postId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    const newComment = new Comment({ ...req.body, user: user._id, post: postId });
    await newComment.save();

    res.json(newComment);
};
export const deleteComments = async (req, res) => { };
