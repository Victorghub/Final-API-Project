const movieCardEl = document.querySelector('.movie-card');
const id = localStorage.getItem("id")


async function onSearchChange(event) {
    const id = (event.target.value)
    renderCards(id)
}

async function renderCards(userId) {
    const movie = await fetch(`https://www.omdbapi.com/?apikey=46b22cfa&s=fast`);
    const movieData = await movie.json()
    movieCardEl.innerHTML = movieData.map(post => postHTML(post)).join('')
    
}


function movieHTML(cards) {
    return `<div class="movie-card">
    <img class="movie-poster" src="https://via.placeholder.com/200x300" alt="Movie Poster">
    <div class="movie-title">Sample Movie</div>
</div>`
}

renderCards(userId);
