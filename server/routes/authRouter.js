import express from "express";
import passport from "passport";
const router = express.Router();

//@description: Auth with Google
//@routes GET api/auth/google
router.get(
  "auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

//@description: Google auth callback
//@routes GET api/auth/google/callback
router.get(
  "auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/api" }),
  (req, res) => {
    res.redirect("/api");
  }
);

//@decsription Logout user
//@route /auth/logout

router.get("/logout", (req, res) => {
  //With the passport middleware, once we login, we will have a logout on the request object

  req.logout();
  res.redirect("/");
});

export default router;
