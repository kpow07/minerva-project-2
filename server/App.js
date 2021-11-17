import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import morgan from "morgan";
import connectMongo from "connect-mongo";
import session from "express-session";
import passport from "passport";
import connectDB from "./config/db.js";
import Index from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 6000;

//Load config
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

//use morgan for login only at development stage
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Static folder
//app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", Index);

//Server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
