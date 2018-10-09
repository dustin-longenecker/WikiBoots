const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title: { type: String, require: true},
    explanation: { type: String, require: true},
    code: { type: String, required: true},
    video: { type: String }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;