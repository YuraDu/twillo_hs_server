import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import dotenv from "dotenv";
import callersRouter from "./routers/callers.js";


// Create an Express app
const app = express();

dotenv.config();

app.use(cors());


const PORT = process.env.PORT || 3000;

// Set strictQuery option to false
mongoose.set("strictQuery", false);

console.log(process.env.CONNECTION_URL);

app.use("/callers", callersRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Callers.insertMany(callers)
    // .then(() => {
    //     console.log("Callers Inserted")
    // })
    // .catch((error) => {
    //     console.log("Failed to insert", error)
    // })
    // // Start the server after successful connection
    app.listen(PORT, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch(error => {
    console.error("Failed to connect to MongoDB", error);
  });

// Define routes and middleware for your application
// ...

// Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
