/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    var sortedMovies = newFunction();
    var sortedMovies = sortedMovies.sort(function(a, b) {
      if (a.year - b.year != 0) {
        return a.year - b.year;
      } else {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      }
    });
    return sortedMovies;

    function newFunction() {
        return Object.assign([], movies);
    }
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    return movies.filter(function(e) {
      return e.director === "Steven Spielberg" && e.genre.includes("Drama");
    }).length;
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    var movies = Object.assign([], arr)
    return movies.map(function(movie){
      return movie.title
    }).sort(function(a, b){
      return a.localeCompare(b)
    }).filter(function(movie, index){
      return index < 20;
    })
  }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
