const mongoose = require("mongoose");

const actionItemSchema = new mongoose.Schema({
  task: String,
  assignedTo: String,
  deadline: Date,
  priority: {
    type: String,
    enum: ["low", "medium", "high"]
  },
  confidence: Number,
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meeting"
  }
});

module.exports = mongoose.model("ActionItem", actionItemSchema);