
const Movie = require("./model/movie");
var movies = [
    {name: "Fight Club", year: 1999, rating: 8.1},
    {name: "Inception", year: 2010, rating: 8.7},
    {name: "The Dark Knight", year: 2008, rating: 9},
    {name: "12 Angry Men", year: 1957, rating: 8.9}
 ];
const DefaultData = async()=>{
    try {
        const movieData = Movie.find()
        //if(movieData.length <= 0) {
            await Movie.deleteMany({})
            const storeData = await Movie.insertMany(movies);
            console.log(storeData);
            //Movie.watch().on('change', data => console.log(new Date(), data));
       // }
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;