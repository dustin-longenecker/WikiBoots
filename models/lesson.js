const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const NoteSchema = require("./note");

const lessonSchema = new Schema({
    title: { type: String, require: true},
    explanation: { type: String, require: true},
    code: { type: String, required: true},
    video: { type: String },
    notes: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    },
    user: { type: String }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;