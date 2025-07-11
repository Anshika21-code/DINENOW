import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    dbName: "RESTAURANT_BOOKING",
  })
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.error(`❌ Database connection failed: ${err.message}`);
  });
};
