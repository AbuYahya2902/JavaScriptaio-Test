// Step 1: Create an array of movies
let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

// Step 2: Join the array into a string
let movieText = movies.join(", "); // "Inception, The Matrix, Interstellar, The Dark Knight"

// Step 3: Set the text inside the <p> tag
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("movieList").textContent = movieText;
});