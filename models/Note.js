const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: String, require: true},
    body: { type: String, require: true},
    user: {type: String}
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;