const mongoose = require("mongoose");

const transcriptSchema = new mongoose.Schema({
  content: String,
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meeting"
  }
});

module.exports = mongoose.model("Transcript", transcriptSchema);
