function displayMovieChoice()
    {
      let choices = [
        "Inceptions",
        "The Matrix\n",
        "Interstellar",
        "The Shawshank Redemption",
        "Pulp Fiction",
        "The Godfather",
        "Forrest Gump",
        "The Dark Knight",
        "Fight Club",
    "The Lord of the Rings: The Return of the King"];
  window.movieText = choices.join("<br>");//do not use var - it woldnt' be accessible by external scripts
  randomIndex = Math.floor(Math.random() * choices.length);
  window.movieChoice = choices[randomIndex];

}
window.onload = displayMovieChoice();
  