import express, { json } from "express";
import mongoose from "mongoose";
import { config as _config } from "dotenv";
import morgan from "morgan";
import connectMongo from "connect-mongo";
import session from "express-session";
import passport from "passport";
import Pass from "./config/passport.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import apiRouter from "./routes/apiRouter.js";
import multer from "multer";
//Load config
_config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;
const MongoStore = connectMongo(session);

app.use("*", (req, res, next) => {
  console.log(req.originalUrl);
  next();
});
//passport config
Pass(passport);

//connect to database
connectDB();
app.use(json());

//use morgan for logging only at development stage
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Upload files to mentor form
const storage = multer.memoryStorage({
  //use mongo for storage
  destination: function (req, files, callback) {
    callback(null, "");
  },
});
const singleUpload = multer({ storage: storage }).single("file");

app.post("/api/add-mentor", singleUpload, (req, res) => {
  const image = req.file;
  Image.create({ image: image.buffer }); //Mentor.create in the model
});

//Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//Passport middleware
app.use(session({ secret: "anything" }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api", apiRouter);
//description: http://localhost:5000/api/auth
app.use("/auth", authRouter);
console.log(process.env);
//Server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//sets development mode
// $env:NODE_ENV = 'development'
