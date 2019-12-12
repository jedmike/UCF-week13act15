const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

const tables = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/reserve.html'))
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/tables.html'))
})

app.get('/api/tables', (req, res) => {
    return res.json(tables);
})

app.post('/api/tables', (req, res) => {
    const reservation = req.body;

    console.log(reservation)

    tables.push(reservation)

    res.json(reservation)

})

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