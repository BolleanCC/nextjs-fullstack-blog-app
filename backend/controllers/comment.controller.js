import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
    const comments = await Comment.find({ post: req.params.postId }).populate("user", "username img").sort({ createdAt: -1 });

    res.json(comments);
};


export const addComments = async (req, res) => {
    try {
        const clerkUserId = req.auth().userId;
        const postId = req.params.postId;

        if (!clerkUserId) {
            return res.status(401).json("Not authenticated!");
        }

        let user = await User.findOne({ clerkUserId });
        if (!user) {
            // Auto-create user if not exists
            user = new User({
                clerkUserId,
                username: req.auth().sessionClaims?.email || clerkUserId,
                email: req.auth().sessionClaims?.email || `${clerkUserId}@placeholder.com`,
                savedPosts: []
            });
            await user.save();
        }

        const newComment = new Comment({ ...req.body, user: user._id, post: postId });
        const savedComment = await newComment.save();

        setTimeout(() => {
            res.status(201).json(savedComment);
        }, 3000);
    } catch (error) {
        res.status(500).json("Internal server error");
    }
};


export const deleteComments = async (req, res) => {
    try {
        const clerkUserId = req.auth().userId;
        const id = req.params.id;

        if (!clerkUserId) {
            return res.status(401).json("Not authenticated!");
        }

        const user = await User.findOne({ clerkUserId });
        if (!user) {
            return res.status(404).json("User not found!");
        }

        const deletedComment = await Comment.findOneAndDelete({ _id: id, user: user._id });

        if (!deletedComment) {
            return res.status(403).json("You can delete only your comments!");
        }

        res.status(200).json("Comment has been deleted");
    } catch (error) {
        res.status(500).json("Internal server error");
    }
};
