const express = require("express");
const router = express.Router();
const fs = require("fs");
const { formatDate, getOrdinalSuffix } = require("../../public/js/utils");

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
  // Read existing data from founderDetails.json
  fs.readFile("./founderDetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading file");
    }

    const foundersArray = JSON.parse(data);

    const locals = {
      foundersArray,
      formatDate,
      getOrdinalSuffix,
    };

    res.render("timeline", locals);
  });
});

router.get("/upload-founder", (req, res) => {
  res.render("uploadFounder");
});

// POST route to handle form submission
router.post("/add-founder", (req, res) => {
  const newFounder = {
    born: req.body.born,
    died: req.body.died,
    company: req.body.company,
    name: req.body.name,
    photo: req.body.photo,
    attributes: {
      Childhood: req.body.childhood,
      "Personality Traits": req.body.personality,
      "Business Practices": req.body.business,
      "Unique Strategies": req.body.strategies,
      Legacy: req.body.legacy,
    },
  };

  // Read existing data from founderDetails.json
  fs.readFile("./founderDetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading file");
    }

    let foundersArray = JSON.parse(data);

    // Add new founder to the array
    foundersArray.push(newFounder);

    // Write updated data back to founderDetails.json
    fs.writeFile(
      "./founderDetails.json",
      JSON.stringify(foundersArray, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error writing file");
        }
        res.redirect("/timeline");
      }
    );
  });
});

module.exports = router;
