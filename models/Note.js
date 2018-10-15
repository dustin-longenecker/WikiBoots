const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    comment: { type: String},
    user: {type: String}
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;