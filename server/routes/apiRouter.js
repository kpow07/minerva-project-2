import { Router } from "express";
import {
  createMentor,
  findMentorById,
  listMentorsFilterField,
  listMentorsFilterCity,
  listMentorsFilterFieldCity,
  listMentors,
  updateMentor,
} from "../models/mentors.js";
import {
  createBio,
  listBios,
  findBioById,
  updateBio,
  listBiosFilterField,
  listBiosFilterFieldCanadian,
  listBiosFilterCanadian,
} from "../models/bios.js";
import {
  createMentee,
  findMenteeById,
  updateMentee,
} from "../models/mentees.js";

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
/////////////////////////MENTOR ENDPOINTS //////////////////////////////////////////
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
//gets a list of all mentors from all fields
router.get("/get-mentors", async (req, res) => {
  let mentorsList = await listMentors();
  console.log(`FROM API's ${mentorsList}`);
  res.json(mentorsList);
});
//gets a mentor using the mentor id from the request
router.get("/get-mentor/:id", async (req, res) => {
  let id = req.params.id;
  let foundInfo = await getMentor(id);
  res.send(foundInfo);
});
// updates a mentor using id from the url
router.post("/update-mentor/:id", async (req, res) => {
  let id = req.params.id;
  let updatedMentor = req.body;
  console.log(`updating mentor ${id}: ${updatedMentor}`);
  let mentor = await updateMentor(id, updatedMentor);
  res.send(mentor);
});

//filter mentors based on the field
router.get("/filter-mentors-field", async (req, res) => {
  let field = req.query.field;
  let mentorsList = await listMentorsFilterField(field);
  console.log(`Filtering Mentors in the ${field} field`);
  res.json(mentorsList);
});

router.get("/filter-mentors-all", async (req, res) => {
  let mentorsList;
  let field = req.query.field;
  let city = req.query.city;
  if ((field !== "allFields" && city === "nothing") || city === "") {
    mentorsList = await listMentorsFilterField(field);
  } else if (field !== "allFields" && city !== "nothing") {
    mentorsList = await listMentorsFilterFieldCity(field, city);
  } else if (field === "allFields" && city === "nothing") {
    mentorsList = await listMentors();
  } else if (field === "allFields" && city !== "nothing") {
    mentorsList = await listMentorsFilterCity(city);
  }
  console.log(
    `FROM API ROUTER: filtering Mentors where city = ${city} who are in the ${field} field }`
  );
  console.log(mentorsList);
  res.json(mentorsList);
});
//////////////////////////////////MENTEE ENDPOINTS /////////////////////////////////

// });
// adds mentee from form information (body) and posts to database
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
//gets a list of all mentees
router.get("/get-mentees", async (req, res) => {
  let menteeList = await listMentees();
  console.log(menteeList);
  res.send(menteeList);
});
//gets a mentee using id from the request
router.get("/get-mentee/:id", async (req, res) => {
  let id = req.params.id;
  let foundInfo = await getMentee(id);
  res.send(foundInfo);
});
//updates mentee using id from the url
router.post("/update-mentee/:id", async (req, res) => {
  let id = req.params.id;
  let updatedMentee = req.body;
  console.log(`updating mentee ${id}: ${updatedMentee}`);
  let mentee = await updateMentee(id, updatedMentee);
  res.send(mentee);
});

//////////////////////////////////////////ENDPOINTS FOR "ENCYCLOPEDIA OF STEM WOMEN"///////////////
//adds a bio from the Bio form
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
//gets a list of ALL bios from the encyclopedia of women
router.get("/get-bios", async (req, res) => {
  let biosList = await listBios();
  res.send(biosList);
});
// get a bio from the id in the server request
router.get("/get-bio/:id", async (req, res) => {
  let id = req.params.id;
  let foundBio = await findBioById(id);
  res.send(foundBio);
});
//updates bio using is from the url
router.post("/add-bio/:id", async (req, res) => {
  let id = req.params.id;
  let updatedBio = req.body;
  console.log(`updating bio ${id}: ${updatedBio}`);
  let bio = await updateBio(id, updatedBio);
  res.send(bio);
});
//filter mentors based on the field
router.get("/filter-bios-field", async (req, res) => {
  let field = req.query.field;
  let mentorsList = await listBiosFilterField(field);
  console.log(`Filtering Mentors in the ${field} field`);
  res.send(mentorsList);
});
//filter mentors based on city
// router.get("/filter-bios-canadian", async (req, res) => {
//   let canadian = req.query.canadian;
//   let mentorsList = await listBiosFilterCanadian(canadian);
//   console.log(`Filtering mentors where canadian is ${canadian}`);
//   res.send(mentorsList);
// });

router.get("/filter-bios-all", async (req, res) => {
  let biosList;
  let field = req.query.field;
  let canadian = req.query.canadian;
  if (field !== "allFields" && canadian === "nothing") {
    biosList = await listBiosFilterField(field);
  } else if (field !== "allFields" && canadian === "true") {
    biosList = await listBiosFilterFieldCanadian(field, "true");
  } else if (field === "allFields" && canadian === "nothing") {
    biosList = await listBios();
  } else if (field === "allFields" && canadian === "true") {
    biosList = await listBiosFilterCanadian("true");
  }
  console.log(
    `FROM API ROUTER: filtering bios where canadian = ${canadian} who are in the ${field} field }`
  );
  console.log(biosList);
  res.json(biosList);
});

export default router;
