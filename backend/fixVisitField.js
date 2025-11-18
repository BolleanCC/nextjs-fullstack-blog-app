import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Post from "./models/post.model.js";

const fixVisitField = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");

    // Update all posts where visit is not a number
    const result = await Post.updateMany(
      {},
      [
        {
          $set: {
            visit: {
              $cond: {
                if: { $eq: [{ $type: "$visit" }, "bool"] },
                then: 0,
                else: { $ifNull: ["$visit", 0] }
              }
            }
          }
        }
      ]
    );

    console.log(`Fixed ${result.modifiedCount} posts`);
    console.log("All posts have been updated successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error fixing visit field:", error);
    process.exit(1);
  }
};

fixVisitField();
