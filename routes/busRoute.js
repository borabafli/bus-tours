const express = require("express");

const router = express.Router();

const busControllers = require("../controllers/home-controller");


router.get("/", function (req, res) {
    res.redirect("/posts");
  });

router.get("/message-details", homeControllers.getMessageDetails);