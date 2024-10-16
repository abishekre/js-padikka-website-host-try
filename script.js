const API_KEY = 'd4703e60cf0d1782ebbe2f62ec94230a';
const BASE_URL = 'https://api.themoviedb.org/3';

function trendingMovies(){
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => displayMovies(data.results))
    .catch(error => console.error('Error:', error));
}

function displayMovies(movies){
    console.log(movies);
    console.log("this is console");
    const trendingBody = document.getElementById("trending-body");
    trendingBody.innerHTML='';
    movies.forEach(movie => {
        trendingBody.innerHTML+=`
        <div class="movie-card-${movie.id} movie-card">
            <div class="movie-image">
                <img class="posterImage" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <img class="coverImage" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title}">
                <div class="movie-title">
                    <p class="title">${movie.title}</p>
                    <p class="description">${movie.overview}</p>
                </div>
            </div>
        </div>
        `;
    });
}

trendingMovies();
