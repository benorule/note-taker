var db = require("../db/db.json");
var router = require("express").Router();
var store = require("../db/store");

router.get("/notes", (req, res) => {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;

// module.exports = function (app) {
//     app.get("/api/notes", function (req, res) {
//         res.json(db);
//     });

//     app.post("/api/notes", function (req, res) {
//         db.push(req.body);
//         db.push(db);
//         res.json(true)
//     });

//     app.delete("/api/notes/id", function (req, res) {
//         db.push(req.body);
//         res.json(true)
//     });
// };
