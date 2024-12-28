const movieCardEl = document.querySelector('.movies-container'); //selecting the parent
const id = localStorage.getItem("id") 
const title = document.querySelector(".search-box") //selects the HTML element with "search-box"


async function onSearchChange(event) { //declares the asynchronous function onSearchChange that will be triggered when the user interacts with the search input field.
    const id = (event.target.value) // extracts the current value of the input field from the event object and assisgn the variable to 'id'.
    renderCards(id) // calls the rendercards(id) function, passing the current search input value (id) as an argument. This triggers the fetching and rendering of movie data base on the search input
}

async function renderCards(userId) { //Declares an asynchronous function renderCards that fetches and renders movies based on the provided userId.
    const topic = title.value //Retrieves the current value of the search input field (i.e., the search term) and assigns it to the topic variable.
    const movie = await fetch(`https://www.omdbapi.com/?apikey=46b22cfa&s=${topic || ""}`); //Sends a GET request to the OMDB API with the search term (topic) included in the query string (s parameter). If topic is empty, it defaults to an empty string.
    const movieData = await movie.json() // Converts the API's response to a JSON object and assigns it to the movieData variable.
    movieCardEl.innerHTML = movieData.Search.slice(0, 6).map(cards => movieHTML(cards)).join('') //Extracts the first 6 movies from the Search array in movieData. Maps each movie to an HTML string (using the movieHTML function). Joins the resulting array of HTML strings into a single string. Sets this string as the inner HTML of the movieCardEl container, rendering the movie cards on the page



}


function movieHTML(cards) { //Declares the movieHTML function, which generates an HTML structure for a single movie card.
    return `<div class="movie-card">
    <img class="movie-poster" src="${cards.Poster}" alt="Movie Poster">
    <div class="movie-title">${cards.Title}</div>
</div>`
}




//slice method