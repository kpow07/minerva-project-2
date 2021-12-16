import { Router } from "express";
import {
  createMentor,
  findMentorById,
  listMentorsFilterField,
  listMentorsFilterCity,
  listMentorsFilterFieldCity,
  listMentors,
  updateMentor,
  removeMentor,
} from "../models/mentors.js";
import {
  createBio,
  listBios,
  findBioById,
  updateBio,
  listBiosFilterField,
  listBiosFilterFieldCanadian,
  listBiosFilterCanadian,
  removeBio,
} from "../models/bios.js";
import {
  createMentee,
  updateMentee,
  // removeMentee,
  // findMenteeById,
} from "../models/mentees.js";

import User from "../models/user.js";

import {
  createComment,
  findCommentsByMentorId,
  addToCommentChildren,
  findCommentsById,
  // findCommentsByParentId,
  findCommentsByCommentArray,
} from "../models/comments.js";
import cloudinary from "../utilities/cloudinary.js";
import upload from "../utilities/multer.js";

const router = Router();

/////////////////////////MENTOR ENDPOINTS //////////////////////////////////////////
//trying to post data from form input
router.post("/add-mentor", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  let mentor = JSON.parse(req.body.fileProps);
  mentor.avatar = result.secure_url;
  mentor.cloudinary_id = result.public_id;

  try {
    let newMentor = await createMentor(mentor);
    res.send(newMentor);
    console.log("Added Mentor", newMentor);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentor already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

//gets a list of all mentors from all fields
router.get("/get-mentors", async (req, res) => {
  try {
    let mentorsList = await listMentors();
    // console.log(`FROM API's ${mentorsList}`);
    res.json(mentorsList);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});
//gets a mentor using the mentor id from the request
router.get("/get-mentor/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let foundInfo = await findMentorById(id);
    // console.log(`FOUND INFO FROM API ROUTER ${foundInfo}`);
    res.send(foundInfo);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

// router.post("/update-mentor/:id", async (req, res) => {
//   let id = req.params.id;
//   let updatedMentor = req.body;
//   console.log("updating mentor with id:", id, "with", updatedMentor);
//   let mentor = await updateMentor(id, updatedMentor);
//   res.send(mentor);
// });
// Updates a mentor using id from the url
router.put("/update-mentor/:id", upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;
    let result;

    //get mentor from database
    const mentor = await findMentorById(id);

    //If there is a new image from mentor
    if (req.file) {
      // Delete old image from cloudinary
      await cloudinary.uploader.destroy(mentor.cloudinary_id);

      // Upload new image to cloudinary
      result = await cloudinary.uploader.upload(req.file.path);
    }

    //update mentor based on new info
    const data = JSON.parse(req.body.fileProps);
    data.avatar = result?.secure_url || mentor.avatar;
    data.cloudinary_id = result?.public_id || mentor.cloudinary_id;

    //update mentor
    const updatedMentor = await updateMentor(id, data, {
      new: true,
      useFindAndModify: false,
    });
    res.send(updatedMentor);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

//---------------------------------------------Michelle's Delete Test--------------------------

router.delete("/delete-mentor/:id", async (req, res) => {
  console.log("FROM API ROUTER %%%%%%%%%%%%%%%%%%%%%%%%%%");
  let id = req.params.id;
  console.log("FROM API ROUTER deleting Mentor:", id);
  let deletedMentor = await removeMentor(id);
  res.send(deletedMentor);
});

//filter mentors based on the field
router.get("/filter-mentors-field", async (req, res) => {
  try {
    let field = req.query.field;
    let mentorsList = await listMentorsFilterField(field);
    console.log(`Filtering Mentors in the ${field} field`);
    res.json(mentorsList);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

router.get("/filter-mentors-all", async (req, res) => {
  try {
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

    res.json(mentorsList);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
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
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});
//gets a list of all mentees
// router.get("/get-mentees", async (req, res) => {
//   let menteeList = await listMentees();
//   console.log(menteeList);
//   res.send(menteeList);
// });
//gets a mentee using id from the request
// router.get("/get-mentee/:id", async (req, res) => {
//   let id = req.params.id;
//   let foundInfo = await getMentee(id);
//   res.send(foundInfo);
// });
//updates mentee using id from the url
router.post("/update-mentee/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedMentee = req.body;
    console.log(`updating mentee ${id}: ${updatedMentee}`);
    let mentee = await updateMentee(id, updatedMentee);
    res.send(mentee);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

// router.get("/add-favorite", async (req,res)=>{
//   let mentorId=req.query.mentorId;
//   let id = req.query.id;
//   console.log(`trying to add mentor to mentee favs , ${mentorId, id}`)
//   let updatedUser =  await addToUserFavorites(mentorId, id)
//   res.send(updatedUser);
// })

router.post("/update-favorite", async (req, res) => {
  try {
    let newUser = req.body;
    await User.findOneAndUpdate({ _id: newUser._id }, newUser);
    res.send("SUCCESS ADDING TO USER FAVOURITES");
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

// router.get("/remove-favorite", async (req, res) => {
//   let mentorId = req.query.mentorId;
//   let id = req.query.id;
//   console.log(`trying to remove mentor from user favs , ${mentorId}, ${id}`);
//   let user = await User.findOne({ _id: id });
//   let index = await user.favorites.indexOf(mentorId);
//   console.log("FROM ROUTER INDEX OF REMOVABLE", index);
//   // let updatedUser = await user.favorites.pull(index);
//   let updatedUser = await User.findOneAndUpdate(
//     { _id: id },
//     { $pull: { favorites: mentorId } }
//   );
//   console.log("UPDATED USER", updatedUser);
//   // console.log("USER", user);
//   updatedUser.save();
//   res.send("SUCCESS REMOVING MENTOR FROM USER FAVOURITES");
// });

router.get("/get-user", async (req, res) => {
  try {
    let favouriteAnswer;
    let userId = req.query.userId;
    let mentorId = req.query.mentorId;
    // console.log("from API ROUTER", userId);
    let user = await User.findOne({ _id: userId });
    let answer = await user.favorites.indexOf(mentorId);
    if (answer > -1) {
      favouriteAnswer = "true";
    } else {
      favouriteAnswer = "false";
    }
    console.log("from the API ROUTER FAVORITES", answer);
    res.send(favouriteAnswer);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

router.get("/get-favs", async (req, res) => {
  try {
    let user = req.user;
    // console.log(user)
    let favs = user.favorites;
    res.json(favs);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});
//---------------------------------------------Michelle's Delete Test--------------------------

// router.delete("/delete-mentee/:id", async (req, res) => {
//   console.log("FROM API ROUTER %%%%%%%%%%%%%%%%%%%%%%%%%%");
//   let id = req.params.id;
//   console.log("FROM API ROUTER deleting Mentor:", id);
//   let deletedMentee = await removeMentee(id);
//   res.send(deletedMentee);
// });

//////////////////////////////////////////ENDPOINTS FOR "ENCYCLOPEDIA OF STEM WOMEN"///////////////
//adds a bio from the Bio form
router.post("/add-bio", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  let bio = JSON.parse(req.body.fileProps);
  bio.avatar = result.secure_url;
  bio.cloudinary_id = result.public_id;

  try {
    let newBio = await createBio(bio);
    console.log("Added Library Bio: ", newBio);
    res.send(newBio);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Bio already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

//gets a list of ALL bios from the encyclopedia of women
router.get("/get-bios", async (req, res) => {
  try {
    let biosList = await listBios();
    res.send(biosList);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

// get a bio from the id in the server request
router.get("/get-bio/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let foundBio = await findBioById(id);
    res.send(foundBio);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

router.put("/add-bio/:id", upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;
    let result;

    //get mentor from database
    const bio = await findBioById(id);

    //If there is a new image from mentor
    if (req.file) {
      // Delete old image from cloudinary
      await cloudinary.uploader.destroy(bio.cloudinary_id);

      // Upload new image to cloudinary
      result = await cloudinary.uploader.upload(req.file.path);
    }

    //update mentor based on new info
    const data = JSON.parse(req.body.fileProps);
    data.avatar = result?.secure_url || bio.avatar;
    data.cloudinary_id = result?.public_id || bio.cloudinary_id;

    //update mentor
    const updatedBio = await updateBio(id, data, {
      new: true,
      useFindAndModify: false,
    });
    res.send(updatedBio);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Bio already exists");
    } else {
      res.sendStatus(500);
    }
  }
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

router.delete("/delete-bio/:id", async (req, res) => {
  console.log("FROM API ROUTER %%%%%%%%%%%%%%%%%%%%%%%%%%");
  let id = req.params.id;
  console.log("FROM API ROUTER deleting BIO:", id);
  let deletedBio = await removeBio(id);
  res.send(deletedBio);
});
/////////////////////////////ENDPOINTS FOR ALL COMMENTS///////////////////
router.post("/add-comment", async (req, res) => {
  let comment = req.body;
  try {
    let newComment = await createComment(comment);
    await addToCommentChildren(newComment.commentParentId, newComment._id);
    res.send(newComment);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("something");
    } else {
      res.sendStatus(500);
    }
  }
});
// router.get("/add-to-children-array", async (req, res) => {
//   let parentId = req.query.parentId;
//   let currentCommentId = req.query.currentCommentId;
//   let updatedParentComment = await addToCommentChildren(
//     parentId,
//     currentCommentId
//   );
//   res.send(updatedParentComment);
// });

// router.get("/get-comment-children", async (req, res) => {
//   let parentId = req.query.parentId;
//   let childrenComments = await findCommentsByParentId(parentId);
//   console.log("AAPPII these are the children of the comment", childrenComments);
//   res.send(childrenComments);
// });

router.get("/get-comment-children", async (req, res) => {
  let parentId = req.query.parentId;
  let childrenComments = await findCommentsByCommentArray(parentId);
  console.log("AAPPII these are the children of the comment", childrenComments);
  res.send(childrenComments);
});

router.get("/get-comments", async (req, res) => {
  let id = req.query.id;
  let commentsList = await findCommentsById(id);
  res.json(commentsList);
});

router.get("/get-mentor-comments", async (req, res) => {
  let mentorId = req.query.mentorId;
  let commentList = await findCommentsByMentorId(mentorId);
  console.log("the comments by mentor id is: >>>>>>>>>>>>>>>>>", commentList);
  res.send(commentList);
});

router.use("*", (req, res, next) => {
  console.log("path is " + req.originalUrl);
  next();
});

export default router;
// router.get("/add-favorite", async (req, res) => {
//   let mentorId = req.query.mentorId;
//   let id = req.query.id;
//   console.log(`trying to add mentor to mentee favs , ${(mentorId, id)}`);
//   let updatedUser = await User.findOneAndUpdate(
//     { _id: id },
//     { $push: { favorites: mentorId } }
//   );
//   updatedUser.save();
//   res.send("SUCCESS ADDING TO USER FAVOURITES");
// });
