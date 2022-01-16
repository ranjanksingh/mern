var express = require('express');
var routerDB = express.Router();
var Movie = require("../model/movie");
const ObjectId = require("mongodb").ObjectId;
//Routes will go here
routerDB.get('/', async (req, res) => {
    const movies = await Movie.find()
    res.json(movies);
 });

 routerDB.get('/:id',async (req,res) => {

    try {
    const { id } = req.params;

    var currentMovie = await Movie.findOne({ _id: id });

    //vitual function
   // console.log(currentMovie.fullName)
   // currentMovie.fullName = "pushpa 2021"
    res.json(currentMovie)
    
    } catch (error) {
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
routerDB.post('/',async (req,res) => {
    
    let data = req.body;
    console.log(data)
    if(!data.name || 
        !data.year
        || !data.rating) {
            res.status(400);
            res.json({message: "Bad Request"});
    } else {
        
        let movie = new Movie({name: data.name, year: data.year, rating: data.rating});
        const storedata = await movie.save();
        res.status(201).send({message: "New movie created.", location: "/movies/" + storedata._id})
    }
 })
 routerDB.put('/:id', async (req, res) => {

    let data = req.body;
    let id = req.params.id;
    console.log(id)
    console.log(data)
    if(!id || !data.name || !data.year || !data.rating) {
        res.status(400);
        res.json({message: "Bad Request"});
    } else {
        let myquery = { _id: ObjectId( id )};
        let movie = new Movie({name: data.name, year: data.year, rating: data.rating});
        const updateduser = await Movie.findOneAndUpdate(myquery, req.body,{ new: true });
        res.status(200).json({message: "Movie id " + req.params.id + " updated.", 
            location: "/movies/" + req.params.id});
        
    }
 });

 routerDB.delete('/:id',async (req,res) => {
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(204).json({message: `movie deleted with id ${id}`})

    } catch (error) {
        res.status(404).json({message: `moview with id ${id} not available`})
    }
 })
 
module.exports = routerDB;