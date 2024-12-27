const movieCardEl = document.querySelector('.movies-container');
const id = localStorage.getItem("id")
const title = document.querySelector(".search-box")


async function onSearchChange(event) {
    const id = (event.target.value)
    renderCards(id)
}

async function renderCards(userId) {
    const topic = title.value
    const movie = await fetch(`https://www.omdbapi.com/?apikey=46b22cfa&s=${topic || ""}`);
    const movieData = await movie.json()
    movieCardEl.innerHTML = movieData.Search.slice(0, 6).map(cards => movieHTML(cards)).join('')
}


function movieHTML(cards) {
    return `<div class="movie-card">
    <img class="movie-poster" src="${cards.Poster}" alt="Movie Poster">
    <div class="movie-title">${cards.Title}</div>
</div>`
}




//slice method