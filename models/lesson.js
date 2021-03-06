const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const NoteSchema = require("./note");

const lessonSchema = new Schema({
    title: { type: String, require: true},
    explanation: { type: String, require: true},
    code: { type: String},
    video: { type: String },
    subject: { type: String },
    notes: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    },
    user: { type: String },
    thumbsUp: { type: Number},
    thumbsDown: { type: Number}
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;