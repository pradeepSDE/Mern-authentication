const express = require("express");
const router = express.Router();
const cors = require("cors");
const {test,signup, signin, profile, logout}  = require("../controllers/authControl" );
router.use(
  cors({
    credentials: true,
    origin: "https://mern-authentication-frontend-sooty.vercel.app",
    methods: ["GET", "POST"],
  })
);
router.get("/", test);
router.post("/signin",signin )
router.post('/signup',signup)
router.get('/profile' , profile)
router.get('/logout' , logout)
module.exports = router;
