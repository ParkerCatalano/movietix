//business logic
function Movie(titles, time) {
  this.titles = [];
  this.time = [];
}

function Theater(movie, time) {
  this.movie = [];
  this.time = [];
}

var movieList = ["Revenant", "Deadpool", "Hail Caesar", "Brooklyn"];
var movieTimes = ["9:00", "15:00", "22:00"];



//jQuery
$(document).ready(function(event) {


    movieList.forEach(function(Movie) {
      $("ul#listings").append("<li>" + movieList.toString() + "</li>");
      $("#listings").last().click(function() {
        $("#show-movieTimes").show(Movie.time);
      });
    });

  });
