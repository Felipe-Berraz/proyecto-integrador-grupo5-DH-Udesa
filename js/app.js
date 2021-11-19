import { 
    getMoviesSeries, 
    getOneMovieTv, 
    getResultsSearch, 
    getTrendingDay
} from './actionCreators.js'

// get actual path
let actualLocation = location.pathname

// get Data from each page
switch (actualLocation) {
    case '/index.html':
        // get Top Rated Movies for Banner
        let bannerContainer = document.getElementById('banner-container')
        getMoviesSeries(bannerContainer, 'movie/popular', 'banner')

        // get Top Rated Movies
        let topRatedContainerMovies = document.getElementById('top-rated-movies')
        getMoviesSeries(topRatedContainerMovies, 'movie/top_rated', 'movie')

        // get Top Rated Series
        let topRatedContainerTv = document.getElementById('top-rated-series')
        getMoviesSeries(topRatedContainerTv, 'tv/top_rated', 'movie')

        // get Popular Movies
        let popularMoviesContainer = document.getElementById('popular-movies')
        getMoviesSeries(popularMoviesContainer, 'movie/popular', 'movie')

        // get Popular Series
        let popularSeriesContainer = document.getElementById('popular-series')
        getMoviesSeries(popularSeriesContainer, 'tv/popular', 'tv')

        // get Trending Today
        let trendingToday = document.getElementById('trending-today')
        getTrendingDay(trendingToday)
        break;
    case '/details.html':
        //get Movie or Serie
        let detailsContainer = document.getElementById('detail-container')
        let mainCastWrapper = document.getElementById('main-cast-wrapper')
        let asideInfo = document.getElementById('more-info')
        let collectionContainer = document.getElementById('collection')
        let actualSeason = document.getElementById('actual-season')
        getOneMovieTv(detailsContainer, mainCastWrapper, asideInfo, collectionContainer, actualSeason)
        break;
    case '/results.html':
        //get Results from search
        let searchResultsContainer = document.getElementById('results-container')
        getResultsSearch(searchResultsContainer)
        break;
    case '/castCrew.html': //santi
        let castCrewContainer = document.getElementById('cast-crew-container')
        getCastCrew(castCrewContainer)
        break;
    case '/genres.html':
        // get Genres Movies
        let genresMoviesContainer = document.getElementById('genres-movies')
        getGenres(genresMoviesContainer, 'movie')

        // get Genres Series
        let genresSeriesContainer = document.getElementById('genres-series')
        getGenres(genresSeriesContainer, 'tv')
        break;
    case '/titleSameGenre.html':
        //get Titles with the same genre
        let titleSameGenreContainer = document.getElementById('title-same-genre-container')
        getTitleSameGenre(titleSameGenreContainer)
        break;
    default:
        break;
}
