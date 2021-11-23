import { 
    getCastCrew,
    getGenres, 
    getMoviesSeries, 
    getOneMovieTv, 
    getResultsSearch, 
    getSimilarTitles, 
    getTitleSameGenre, 
    getTrendingDay
} from './actionCreators.js'

// get actual path
let actualLocation = location.pathname

// get Data from each page
if(actualLocation == '/index.html'){
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
} else if(actualLocation == '/series.html'){
    // get Top Rated Series
    let topRatedContainerTvHTML = document.getElementById('top-rated-series')
    getMoviesSeries(topRatedContainerTvHTML, 'tv/top_rated', 'movie')

    // get Popular Series
    let popularSeriesContainerHTML = document.getElementById('popular-series')
    getMoviesSeries(popularSeriesContainerHTML, 'tv/popular', 'tv')
}else if(actualLocation == '/movies.html'){
    // get Top Rated Movies
    let topRatedContainerMoviesHTML = document.getElementById('top-rated-movies')
    getMoviesSeries(topRatedContainerMoviesHTML, 'movie/top_rated', 'movie')

    // get Popular Movies
    let popularMoviesContainerHTML = document.getElementById('popular-movies')
    getMoviesSeries(popularMoviesContainerHTML, 'movie/popular', 'movie')
}else if(actualLocation == '/details.html'){
    //get Movie or Serie
    let detailsContainer = document.getElementById('detail-container')
    let mainCastWrapper = document.getElementById('main-cast-wrapper')
    let asideInfo = document.getElementById('more-info')
    let collectionContainer = document.getElementById('collection')
    let actualSeason = document.getElementById('actual-season')
    getOneMovieTv(detailsContainer, mainCastWrapper, asideInfo, collectionContainer, actualSeason)

    // get Similar Titles
    let similarTitles = document.getElementById('similar-titles')
    getSimilarTitles(similarTitles)
}else if(actualLocation == '/results.html'){
    //get Results from search
    let searchResultsContainer = document.getElementById('results-container')
    getResultsSearch(searchResultsContainer)
}else if(actualLocation == '/castCrew.html'){
    let castCrewContainer = document.getElementById('cast-crew-container')
    getCastCrew(castCrewContainer)
}else if(actualLocation == '/genres.html'){
    // get Genres Movies
    let genresMoviesContainer = document.getElementById('genres-movies')
    getGenres(genresMoviesContainer, 'movie')

    // get Genres Series
    let genresSeriesContainer = document.getElementById('genres-series')
    getGenres(genresSeriesContainer, 'tv')
}else if(actualLocation == '/titleSameGenre.html'){
    //get Titles with the same genre
    let titleSameGenreContainer = document.getElementById('title-same-genre-container')
    getTitleSameGenre(titleSameGenreContainer)
}
