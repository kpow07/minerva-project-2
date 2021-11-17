import express from "express";
const router = express.Router();

//@description: Login/Landing Page
//@routes GET/
router.get("/", (req, res) => {
  //res.sendFile(__dirname + "/login.html");
  res.send("Login page");
});

//@description: Main Page
//@routes GET/
router.get("/mainPage", (req, res) => {
  res.send("Main Page");
});

export default router;
