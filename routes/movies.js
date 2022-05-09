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

    router.get('/movies/:moviesId', (req, res) => {
        const { moviesId } = req.params;
        console.log('The ID from the URL is: ', moviesId);
       
        res.render('movies/movies-details.hbs');
      });

module.exports = router;