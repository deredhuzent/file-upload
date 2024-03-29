const mongoose = require('mongoose')

const pictureSchema = new mongoose.Schema({
  name: String,
  path: String,
  originalName: String
},
{
  timestamps: { 
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


module.exports = mongoose.model("Picture", pictureSchema);