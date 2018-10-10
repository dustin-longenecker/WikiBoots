const db = require("../models");

module.exports = {
    findAll: function (req, res) {

        console.log("poop");
        db.Lesson
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Lesson
            .findById(req.params.id)
            .populate("notes")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createLesson: function (req, res) {
        console.log("dave smells");
        db.Lesson
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createNote: function (req, res) {
        console.log("createNote log");
        db.Note
            .create(req.body)
            .then(function (dbLesson) {
                return db.Lesson.findOneAndUpdate({ _id: req.params.id }, { notes: dbLesson._id }, { new: true });
            })
            .then(function (dbLesson) {
                res.json(dbLesson);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    update: function (req, res) {
        db.Lesson
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Lesson
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
