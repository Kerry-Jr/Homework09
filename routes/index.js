const router = require("express").Router();
const path = require('path');
const apiRoutes = require("./apiRoutes");

router.use("/api",apiRoutes);

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;