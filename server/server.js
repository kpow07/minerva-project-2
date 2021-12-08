import express, { json } from "express";
import mongoose from "mongoose";
import { config as _config } from "dotenv";
import morgan from "morgan";
import connectMongo from "connect-mongo";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import Pass from "./config/passport.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import apiRouter from "./routes/apiRouter.js";

//Load config
_config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5001;
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

//Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//Passport middleware
app.use(session({ secret: "anything" }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api", apiRouter);
//description: http://localhost:5001/api/auth
app.use("/auth", authRouter);
//Server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//sets development mode
// $env:NODE_ENV = 'development'
