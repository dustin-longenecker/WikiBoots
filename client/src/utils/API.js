import axios from "axios";

export default {
  getLessons: function() {
    return axios.get("/api/lessons");
  },
  getLesson: function(id) {
    return axios.get("/api/lessons/" + id);
  },
  deleteLesson: function(id) {
    return axios.delete("/api/lessons/" + id);
  },
  saveLesson: function(lessonData) {
    return axios.post("/api/lessons", lessonData);
  },
  saveNote: function(id, noteData){
    console.log("id in API call", id);
    return axios.post("api/lessons/" + id, noteData)
  }
};
