import express from "express";
import passport from "passport";
const router = express.Router();

const CLIENT_URL = "http://localhost:3000/";

//description: Login successful
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

//decsription: login failed
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
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
    /*
    (req, res) => {
      res.redirect(CLIENT_URL);
    } */
  )
);

//@decsription Logout user
//@route /auth/logout

router.get("/logout", async (req, res) => {
  //With the passport middleware, once we login, we will have a logout on the request object

  req.logout();
  res.redirect(CLIENT_URL);
});

export default router;
