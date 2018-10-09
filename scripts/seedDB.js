const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/lessons"
);

const lessonSeed = [
    {
        title: "JaveScript for Loops",
        explanation: "Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays.",
        code:  "var i; for (i = 0; i < cars.length; i++) {text += cars[i];}",
        video: "https://www.youtube.com/watch?v=GgAyEcbxUFo"
    }
];

db.Lesson
.remove({})
.then(()=> db.Lesson.collection.insertMany(lessonSeed))
.then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
})
.catch(err =>{
    console.log(err);
    process.exit(1);
});

