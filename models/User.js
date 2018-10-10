var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  name: {
    type: String,
    unique: true
  },
  lessons: [
    
  ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
