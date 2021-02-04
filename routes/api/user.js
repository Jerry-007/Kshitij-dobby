const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userSchema");

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post("/signup", async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
  });
  User.register(user, req.body.password)
    .then((i) => res.json(i.username))
    .catch((err) => res.status(400).json(err));
});

router.post("/signin", passport.authenticate("local"), (req, res) => {
  res.json({ auth: true, name: req.user.username, id: req.user._id });
  return;
});

router.get("/signout", (req, res) => {
  req.logout();
  res.json({ auth: false });
  return;
});

router.get("/check", (req, res) => {
  if (req.isAuthenticated())
    res.json({ auth: true, name: req.user.username, id: req.user._id });
  else res.json({ auth: false });
  return;
});

module.exports = router;
