const mongoose = require("mongoose")
const Schema   = mongoose.Schema

const userSchema = new Schema({
  name: String,
  familyName: String,
  facebookId:  String,

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})


module.exports = mongoose.model("User", userSchema)
