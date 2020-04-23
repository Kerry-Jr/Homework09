const router = require("express").Router();
const fs = require('fs');



router.get("/notes", function (req, res) {
  fs.readFile("./db/db.json", function (err, data) {
    if(err) throw err;
    res.json(JSON.parse(data));
  })
});



router.post("/notes", function (req, res) {
  let newNote = req.body;
  newNote.id = Math.floor(Math.random() * 1000);
 
  fs.readFile("./db/db.json", function (err, data) {
    let allNotes = JSON.parse(data);
   
    allNotes.push(newNote);
    let readyNotes = JSON.stringify(allNotes);
  
  fs.writeFile("./db/db.json", readyNotes ,function (err){
    if(err) throw err;
    // console.log("Note added successfully!");
    res.json(newNote)
   
  })
  })
});

router.delete("/notes/:id", function (req, res) {
    let allNotes = req.params.id;
  console.log(allNotes);
  fs.readFile("./db/db.json", function (err, data){
    if (err) throw err;
    let dataNotes = JSON.parse(data);
 
       let index = dataNotes.findIndex(x => x.id == allNotes);
       console.log(index);
      console.log("this note will be vanquished!");
        
      dataNotes.splice(index, 1);
    
    fs.writeFile("./db/db.json", JSON.stringify(dataNotes), function (err){
      if(err) {
        return console.log(err);
      }
    
      console.log(dataNotes);
    
    })
    res.json(data);
  
   
})
});
  
module.exports = router;