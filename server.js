// require dependencies
const express = require('express');
// const databasePath = path.join(__dirname, "/db/db.json");
// uuid generates random ids
const routes = require("./routes");
// set up express app
const app = express();
const PORT = process.env.PORT || 3001;
//express middleware
app.use(express.urlencoded({ extended: true }));
//body parsing
app.use(express.json());
app.use(express.static("public"));
// notes.html
app.use(routes);
// return all saved notes in database as JSON
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("APP listening on: http://localhost:" + PORT);
});

