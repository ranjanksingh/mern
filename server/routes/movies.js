var express = require('express');
var router = express.Router();
var movies = [
   {_id: 101, name: "Fight Club", year: 1999, rating: 8.1},
   {_id: 102, name: "Inception", year: 2010, rating: 8.7},
   {_id: 103, name: "The Dark Knight", year: 2008, rating: 9},
   {_id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];

//Routes will go here
router.get('/', (req, res) => {
    res.json(movies);
 });

 router.get('/:id([0-9]{3,})',(req,res) => {

    var currentMovie = movies.filter(movie => movie._id == req.params.id)

    if(currentMovie.length == 1) {
        res.json(currentMovie[0])
    } else {
        res.status(400).send({message: "Movie with id not found"})
    }

 });
/*
if(!data.name || 
        !data.year.toString.match(/^[0-9]{4}$/g)
        || !data.rating.toString.match(/^[0-9]\.[0-9]$/g)) {
            res.status(400);
            res.json({message: "Bad Request"});
    }
*/
 router.post('/', (req,res) => {
    
    let data = req.body;
    console.log(data)
    if(!data.name || 
        !data.year
        || !data.rating) {
            res.status(400);
            res.json({message: "Bad Request"});
    } else {
        let newId = movies[movies.length-1]._id + 1;

        let movie = {_id: newId, name: data.name, year: data.year, rating: data.rating}
        movies.push(movie)
        res.status(201).send({message: "New movie created.", location: "/movies/" + newId})
    }
 })
 router.put('/:id', (req, res) => {

    let data = req.body;
    let id = req.params.id;
    console.log(id)
    console.log(data)
    if(!id || !data.name || !data.year || !data.rating) {
        res.status(400);
        res.json({message: "Bad Request"});
    } else {
        let idIndex = movies.map(movie => movie._id).indexOf(parseInt(id))

        console.log("idindex "+idIndex)
        if(idIndex >= 0) {
            let movie = {
                _id: id,
                name: data.name,
                year: data.year, 
                rating: data.rating};
            
            movies[idIndex] = movie;
            res.status(200).json({message: "Movie id " + req.params.id + " updated.", 
            location: "/movies/" + req.params.id});
        } else {
        let newId = movies[movies.length-1]._id + 1;

        let movie = {_id: newId, name: data.name, year: data.year, rating: data.rating}
        movies.push(movie)
        res.status(201).json({message: "New movie created.", location: "/movies/" + newId})
        //instead of creating moview we can throw exeption
        }
    }
 });

 router.delete('/:id', (req,res) => {
    let id = req.params.id;
    let idIndex = movies.map(movie => movie._id).indexOf(parseInt(id))
    if(idIndex< 0) {
        res.status(404).json({message: `moview with id ${id} not available`})
    } else {
        movies.splice(idIndex,1);
        res.status(204).json({message: `movie deleted with id ${id}`})
    }
 })
 
module.exports = router;