import { Router } from "express";
import {
  createMentor,
  findMentorById,
  listMentors,
} from "../models/mentors.js";
import { createBio, listBios, findBioById } from "../models/bios.js";
import { createMentee, findMenteeById } from "../models/mentees.js";

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

//trying to post data from mentee for to the db

router.post("/add-mentee", async (req, res) => {
  let mentee = req.body;
  try {
    let newMentee = await createMentee(mentee);
    console.log("Added Mentee", newMentee);
    res.send(newMentee);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee " + menteeToAdd.name + " already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

router.get("/get-mentees", async (req, res) => {
  let menteeList = await listMentees();
  console.log(menteeList);
  res.send(menteeList);
});

router.get("/get-mentee/:id", async (req, res) => {
  let id = req.params.id;
  let foundInfo = await getMentee(id);
  res.send(foundInfo);
});

router.post("/add-bio", async (req, res) => {
  let bio = req.body;
  try {
    let newBio = await createBio(bio);
    console.log("Added Library Bio: ", newBio);
    res.send(newBio);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Bio for " + bioToAdd.name + " already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

router.get("/get-bios", async (req, res) => {
  let biosList = await listBios();
  res.send(biosList);
});

router.get("/get-bio/:id", async (req, res) => {
  let id = req.params.id;
  let foundBio = await findBioById(id);
  res.send(foundBio);
});
router.get("/get-mentors", async (req, res) => {
  let mentorsList = await listMentors();
  console.log(mentorsList);
  res.send(mentorsList);
});

router.get("/get-mentor/:id", async (req, res) => {
  let id = req.params.id;
  let foundInfo = await getMentor(id);
  res.send(foundInfo);
});

export default router;






