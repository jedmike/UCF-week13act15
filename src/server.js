const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})

// =========== tables on load
// retrieve data (get)
// append [0 - 4] to tables
// append [5 - ... ] to waitlist

// Displays all characters
// app.get("/api/partiess", function(req, res) {
//     return res.json(parties);
//   });

// Displays a single character, or shows "No character found"
// app.get("/api/parties/:party", function(req, res) {
//     for (var i = 0; i < parties.length; i++) {
//       if (i < 5) {
        // console.log(`table: ${i + 1}`);
//         return res.json(parties[i]);
//       } else {
    // console.log(`waitlist: ${i + 1}`);
            //append to waitlist
// }
//     }
//     return res.send("No party found");
//   });

//++++++++++++++++++++++++++++++++

// ====== reserve page on submit-btn click
// retrieve data
// send to storage space (post)

// Create New Characters - takes in JSON input
// app.post("/api/parties", function(req, res) {
//     var newParty = req.body;
//     console.log(newParty);
//     parties.push(newParty);
//     res.json(newParty);
// });