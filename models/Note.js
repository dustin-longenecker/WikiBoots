const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: String, require: true},
    body: { type: String, require: true}
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;