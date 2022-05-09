const router = require('express').Router();

const Movies = require("../models/Movie.model.js");

router.get('/movies', (req, res) => 
Movies.find()
    .then(allTheMovies => {
      // -> allTheBooks is a placeholder, it can be any word
      console.log('Movies:', allTheMovies);
 
      res.render('../views/movies.hbs',{ movies: allTheMovies });
    })
    .catch(error => {
      console.log('Error while getting the movies: ', error);
 
      // Call the error-middleware to display the error page to the user
      next(error);
    }));

    router.get('/movies/:id', async(req,res) => {
        try {
            const {id} = req.params;
            const movie = await Movies.findById(id);
            console.log('length:'+movie.length);
            res.render('movies-details', movie);
        } catch (error) {
            console.error(error);
        }
    });

module.exports = router;