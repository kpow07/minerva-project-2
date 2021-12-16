import express from "express";
import passport from "passport";
const router = express.Router();

const CLIENT_URL = "http://localhost:3000/";

//description: Login successful
router.get("/login/success", (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successful",
        user: req.user,
      });
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

//decsription: login failed
router.get("/login/failed", (req, res) => {
  try{
    res.status(401).json({
      success: false,
      message: "failure",
    });

  }catch(error){
    console.log(error);
    if (error.code === 11000) {
      res.status(409).send("Mentee already exists");
    } else {
      res.sendStatus(500);
    }
  }
});

//@description: Auth with Google
//@routes GET auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@description: Google auth callback
//@routes GET auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate(
    "google",
    {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    }
  )
);

//@decsription Logout user
//@route /auth/logout

router.get("/logout", async (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});
export default router;
