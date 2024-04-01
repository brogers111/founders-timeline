const express = require("express");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  const locals = {
    title: "Founders Timeline",
    description:
      "A timeline highlighting successful founders throughout history.",
  };

  res.render("index", { locals });
});

router.get("/timeline", (req, res) => {
  res.render("timeline");
});

router.get("/founder-details", (req, res) => {
  res.render("founderDetails");
});

module.exports = router;
