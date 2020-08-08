var fs = require("fs");
var util = require("util");

const uuidv1 = require("uuid/v1");

var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }
  addNote(note) {
    var { title, text } = note;
    if (!title || !text) {
      throw new Error("Input fields cannot be empty");
    }
    var newNote = { title, text, id: uuidv1() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  removeNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}
module.exports = new Store();
