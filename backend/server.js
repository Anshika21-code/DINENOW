import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

import app from "./app.js";

const PORT = process.env.PORT || 5000;

// 👇 Root route abhi app.js me already hai
app.listen(PORT, () => {
  console.log(`🔥 Server is running on port ${PORT}`);
});
