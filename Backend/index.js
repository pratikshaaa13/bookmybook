/*import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app = express();

import bookRoute from "./route/book_route.js"

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL =process.env.MONGO_URI;
//connect to mongodb
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
    console.log("connected to mongodb")
} catch (error) {
    console.log("Error:",error)
}

// defining route
app.use("/book",bookRoute)
app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})
*/

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import bookRoute from "./route/book_route.js";
import userRouter from "./route/user.route.js"

dotenv.config();

// Middleware to parse JSON (important for POST requests)
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4001;
const URL = "mongodb://localhost:27017/bookstore";


// Connect to MongoDB
mongoose.connect(URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ Error connecting to MongoDB:", error));

// Define routes
app.use("/", bookRoute);
app.use("/user", userRouter);
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
