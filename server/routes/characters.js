
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      age: Number,
      eyeColor: String,
      hairColor: String,
      occupation: String,
      imageUrl: String,
      description: {
        type: String,
        required: true
      }
    });
    
module.exports = mongoose.model('Character', characterSchema);