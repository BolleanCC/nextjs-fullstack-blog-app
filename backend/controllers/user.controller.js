import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
    try {
        const clerkUserId = req.auth().userId;
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
        res.status(200).json(user.savedPosts);
    } catch (error) {
        res.status(500).json("Internal server error");
    }
};

export const savePost = async (req, res) => {
    try {
        const clerkUserId = req.auth().userId;
        const postId = req.body.postId;
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

        const isSaved = user.savedPosts.some((savedPost) => savedPost === postId);

        if (!isSaved) {
            await User.findByIdAndUpdate(user._id, { $push: { savedPosts: postId } });
        } else {
            await User.findByIdAndUpdate(user._id, { $pull: { savedPosts: postId } });
        }
        res.status(200).json(isSaved ? "Post unsaved!" : "Post saved!");
    } catch (error) {
        res.status(500).json("Internal server error");
    }
};