const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});
movieSchema.virtual('fullName').get(function() {
    return this.name + ' ' + this.year
  })
  
movieSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')
    
    this.name = str[0]
    this.year = str[1]
  })

const Movie = new mongoose.model("movies",movieSchema);


module.exports = Movie;