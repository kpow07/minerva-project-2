import { Router } from "express";
import { createMentor } from "../models/mentors.js";
//

const router = Router();

//@description: Login/Landing Page
//@routes GET/
// router.get("/", (req, res) => {
//   //res.sendFile(__dirname + "/login.html");
//   res.send("Login page");
// });

//@description: Main Page
//@routes GET/
router.get("/mainPage", (req, res) => {
  res.send("Main Page");
});

router.get("/minerva", (rer, res) => {
  res.send("");
});

//trying to post data from form input
router.post("/add-mentor", async (req, res) => {
  let mentor = req.body;
  try {
    let newMentor = await createMentor(mentor);
    console.log("Added Mentor", newMentor);
    res.send(newMentor);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentor " + mentorToAdd.name + " already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

export default router;