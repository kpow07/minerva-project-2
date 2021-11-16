import express from "express";
const router = express.Router();

//@description: Login/Landing Page
//@routes GET/
router.get("/", (req, res) => {
  //res.sendFile(__dirname + "/login.html");
  res.send("Homepage");
});

export default router;
