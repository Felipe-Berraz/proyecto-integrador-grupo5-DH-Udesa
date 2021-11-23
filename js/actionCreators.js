const API_URL = 'https://api.themoviedb.org/3/'
const api_key = '17ce6bcdb53e4b3bd9247e8cf4166426'

// function to get the Movies and TV Series for the Index
export const getMoviesSeries = (container, path, use) => {
    /*
    possible paths:
        top_rated movies --> movie/top_rated
        popular movies --> movie/popular
        popular tv --> tv/popular
    */

    // backdrop_path original
    fetch(`${API_URL}${path}?api_key=${api_key}&language=en-US&page=1`)

        .then(function(response) {
            return response.json()
        })
        
        .then((data) => {
            let dataResults = data.results
            if(use === 'banner'){
                let customLengthArray = 1
                
                for(let i = 0; i < customLengthArray; i++){
                    container.innerHTML += 
                    `
                        <article class="swiper-slide">
                            <div class="shadow"></div>
                            <img
                                class="banner"
                                src="https://image.tmdb.org/t/p/original${dataResults[i].backdrop_path}"
                                alt="${dataResults[i].title}"
                            >
                            <div class="container-info-banner">
                                <div class="text-info">
                                    <h1 class="title-banner">${dataResults[i].title}</h1>
                                    <h4 class="title-text">VER AHORA</h4>
                                </div>
                                <div class="btn-see-more-info">
                                    <button class="btn-more-info">
                                        <a 
                                            class="links link-more-info" 
                                            href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">
                                            MÁS INFO
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </article>
                    `
                }
            }else{
                let customLengthArray = 10
                for(let i = 0; i < customLengthArray; i++){
                    if(dataResults[i].poster_path && dataResults[i].backdrop_path){
                        container.innerHTML += 
                        `
                            <article class="movie-serie-container">
                                <a href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">

                                    <div class="image-container">
                                        <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                        <img 
                                            class="image-poster" 
                                            src="https://image.tmdb.org/t/p/w200/${dataResults[i].poster_path}" 
                                            alt="${dataResults[i].name ? dataResults[i].name : dataResults[i].title}"
                                        >
                                        
                                    </div>

                                    <h3 class="title">
                                        ${dataResults[i].name ? dataResults[i].name : dataResults[i].title}
                                    </h3>

                                    <p class="release-date">
                                        ${dataResults[i].name ? dataResults[i].first_air_date : dataResults[i].release_date}
                                    </p>

                                </a>
                              
                            </article>
                        `
                    }else{
                        i++
                        container.innerHTML += `
                            <article class="movie-serie-container">
                                <a href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">

                                    <div class="image-container">
                                        <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                        <img 
                                            class="image-poster" 
                                            src="https://image.tmdb.org/t/p/w200/${dataResults[i].poster_path}" 
                                            alt="${dataResults[i].name ? dataResults[i].name : dataResults[i].title}"
                                        >
                                    </div>

                                    <h3 class="title">
                                        ${dataResults[i].name ? dataResults[i].name : dataResults[i].title}
                                    </h3>

                                    <p class="release-date">
                                        ${dataResults[i].name ? dataResults[i].first_air_date : dataResults[i].release_date}
                                    </p>
                                </a>
                                
                            </article>
                        `
                        customLengthArray++
                    }
                }
            }
        })

        .catch(function(error) {
            console.log("Error: " + error);
        })
}

// get trending movies
export const getTrendingDay = (container) => {
    fetch(`${API_URL}trending/all/day?api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            let dataResults = data.results
            let customLengthArray = 5
                for(let i = 0; i < customLengthArray; i++){
                    if(dataResults[i].poster_path && dataResults[i].backdrop_path){
                        container.innerHTML += 
                        `
                            <article class="movie-serie-container">
                                <a href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">

                                    <div class="image-container">
                                        <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                        <img 
                                            class="image-poster" 
                                            src="https://image.tmdb.org/t/p/w200/${dataResults[i].poster_path}" 
                                            alt="${dataResults[i].name ? dataResults[i].name : dataResults[i].title}"
                                        >
                                    </div>

                                    <h3 class="title">
                                        ${dataResults[i].name ? dataResults[i].name : dataResults[i].title}
                                    </h3>

                                    <p class="release-date">
                                        ${dataResults[i].name ? dataResults[i].first_air_date : dataResults[i].release_date}
                                    </p>

                                </a>
                                
                            </article>
                        `
                    }else{
                        i++
                        container.innerHTML += `
                            <article class="movie-serie-container">
                                <a href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">

                                    <div class="image-container">
                                        <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                        <img 
                                            class="image-poster" 
                                            src="https://image.tmdb.org/t/p/w200/${dataResults[i].poster_path}" 
                                            alt="${dataResults[i].name ? dataResults[i].name : dataResults[i].title}"
                                        >
                                    </div>

                                    <h3 class="title">
                                        ${dataResults[i].name ? dataResults[i].name : dataResults[i].title}
                                    </h3>

                                    <p class="release-date">
                                        ${dataResults[i].name ? dataResults[i].first_air_date : dataResults[i].release_date}
                                    </p>

                                </a>
                            </article>
                        `
                        customLengthArray++
                    }
                }
        })
}

// function to get Movie or TV Serie details
export const getOneMovieTv = (container, wrapperCast, asideInfo, collection, actualSeason) => {
    /*
    possible paths:
        movie --> movie
        serie --> tv
    */
    window.addEventListener('load', () => {
        let queryString = location.search
        let queryStringObj = new URLSearchParams(queryString)
        let id = queryStringObj.get('id')
        let path = queryStringObj.get('path')
        
        var srcProvider

        fetch(`${API_URL}${path}/${id}/watch/providers?api_key=${api_key}`)
            .then(response => response.json())
            .then(data => {          
                if(Object.keys(data.results).length === 0){
                    srcProvider = 'https://www.themoviedb.org/t/p/original/db6NofOblrtYcwH9qXuzyMf68Ao.jpg'
                }else if('US' in data.results){
                    if('buy' in data.results.US){
                        let dataUS = data.results.US.buy[0].logo_path
                        srcProvider = `https://image.tmdb.org/t/p/original${dataUS}`
                    }
                    else if('rent' in data.results.US){
                        let dataUS = data.results.US.rent[0].logo_path
                        srcProvider = `https://image.tmdb.org/t/p/original${dataUS}`
                    }
                    else{
                        let dataUS = data.results.US.flatrate[0].logo_path
                        srcProvider = `https://image.tmdb.org/t/p/original${dataUS}`
                    }
                }else{
                    srcProvider = 'https://www.themoviedb.org/t/p/original/db6NofOblrtYcwH9qXuzyMf68Ao.jpg'
                } 
            })
            .catch(function(error) {
                console.log("Error: " + error);
            })
        
        fetch(`${API_URL}${path}/${id}?api_key=${api_key}&append_to_response=videos,credits,keywords,release_dates`)
            .then(response => response.json())
            .then(data => {            
                //get age certification
                var ageCertification
                if(path === 'movie'){
                    ageCertification = data.release_dates.results.find(rd => rd.iso_3166_1 === 'US')
                    if( ageCertification.release_dates[0].certification !== ''){
                        ageCertification = ageCertification.release_dates[0].certification 
                    }else if(ageCertification.release_dates[1].certification !== ''){
                        ageCertification = ageCertification.release_dates[1].certification 
                    }else if(ageCertification.release_dates[2].certification !== ''){
                        ageCertification = ageCertification.release_dates[2].certification 
                    }else if(ageCertification.release_dates[3].certification !== ''){
                        ageCertification = ageCertification.release_dates[3].certification 
                    }
                }else{
                    ageCertification = 'TV-G'
                }

                //get trailer video
                let videosList = data.videos.results
                let videoYT
                let fullVideo
                if(videosList.length > 0){
                    let urlYT = 'http://www.youtube.com/embed/'
                    let video = videosList.find(videos =>  videos.type === 'Trailer' || 'Teaser')
                    videoYT = `${urlYT}${video.key}`
                    fullVideo = 
                    `
                    <iframe
                        id="trailer"
                        class="display-out"
                        width="500"
                        height="281" 
                        src="${videoYT}" 
                        title="Trailer${video.name}" 
                    >
                    </iframe>
                    `
                }

                //get genres
                let genres = [];
                data.genres.forEach(genre => {
                    genres.push(
                        `
                            <a href="titleSameGenre.html?id=${genre.id}&title=${genre.name}&path=${path === 'tv' ? 'tv' : 'movie'}">
                                ${genre.name}
                            </a>
                        `
                    )
                });


                // get crew
                let crewData

                if(data.credits.crew.length > 0){
                    let director = data.credits.crew.find(crew => crew.job === 'Director')
                    let producer1 = data.credits.crew[1]
                    let producer2 = data.credits.crew[0]   
                    crewData = 
                    `       
                        <ol class="people-crew">
                            <li class="crew-item">
                                <p class="crew-name"><a href="">${director != undefined ? director.name : data.credits.crew[3].name }</a></p>
                                <p class="crew-job">${director != undefined ? director.job : data.credits.crew[3].job}</p>
                            </li>
                            <li class="crew-item middle-crew">
                                <p class="crew-name"><a href="">${producer1.name}</a></p>
                                <p class="crew-job">${producer1.job}</p>
                            </li>
                            <li class="crew-item last-crew">
                                <p class="crew-name"><a href="">${producer2.name}</a></p>
                                <p class="crew-job">${producer2.job}</p>
                            </li>
                        </ol>
                    `
                }

                //get release year
                let date;
                path === 'tv' ? date = new Date(data.first_air_date) : date = new Date(data.release_date)
                let yearOut = date.getFullYear()

                //get runtime
                let hours = data.runtime / 60
                let hoursFixed = Math.floor(hours)
                let minutes = (hours -hoursFixed) * 60
                let minutesFixed = Math.floor(minutes)

                let duration = path === 'movie' ? `${hoursFixed}h ${minutesFixed}m` : `${data.episode_run_time[0]}m`

                //display content
                var imgAdd = 
                `
                    <img
                        class="img-btn"
                        src="../images/buttons/add-btn.png"
                    >
                `
                var imgRemove = 
                `
                    <img
                        class="img-btn remove-btn"
                        src="../images/buttons/signo-menos.png"
                    >
                `        
                container.innerHTML += 
                `
                    <section class="container-video-poster">
                        <article class="image-video-container">
                            <img 
                                id="poster"
                                class="image" 
                                src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}" 
                                alt="${path === 'tv' ? data.name : data.title}"
                            >

                            ${data.videos.results.length > 0 ? fullVideo : ''}

                        </article>
                        <article class="where-to-watch-container">
                            <img
                                src="${srcProvider}"
                                alt="provider"
                                class="where-to-watch-image"
                            >
                            <div class="where-to-watch-info">
                                <p class="now-on-stream">Ahora en streaming</p>
                                <h3 class="watch-now">Ver ahora</h3>
                            </div>
                        </article>
                    </section>

                    <div class="info">

                        <div class="title-info">
                            <h2 class="title-details">
                                ${path === 'tv' ? data.name : data.title}
                                <span class="year-out">(${yearOut})</span>
                            </h2>

                            <div class="facts">
                                <span class="certification">
                                    ${ageCertification !== 'TV-G' ? ageCertification : 'TV-G'}
                                </span>
                                <span class="release">
                                    ${path === 'tv' ? data.first_air_date : data.release_date} (US)
                                </span>
                                <span class="genres">
                                    ${genres}
                                </span>
                                <span class="runtime">
                                    ${duration}
                                </span>
                            </div>
                        </div>

                        <ul class="actions">
                            <li class="list-item-rate">
                                <svg
                                    class="progress-ring"
                                    width="68"
                                    height="68">
                                        <circle
                                            class="progress-ring__circle off-stroke"
                                            stroke="${data.vote_average * 10 > 70 ? '#204529' : '#423d0f'}"     
                                            stroke-width="4"
                                            fill="transparent"
                                            r="25"
                                            cx="30"
                                            cy="30"
                                        />
                                        <circle
                                            class="progress-ring__circle main-circle"
                                            stroke="${data.vote_average * 10 > 70 ? '#21d07a' : '#d2d531'}"     
                                            stroke-width="4"
                                            fill="transparent"
                                            r="25"
                                            cx="30"
                                            cy="30"
                                        />
                                </svg>
                                <p class="progress-text">${data.vote_average * 10}<span class="small-percentage">%</span></p>
                            </li>
                            <li>
                                <button class="btn-details btn-fav">
                                    ${ imgAdd}
                                </button>
                            </li>
                            <li>
                                <button class="btn-details" onclick="toggleTrailer()">
                                    <img
                                        class="img-btn btn-play"
                                        src="../images/buttons/button-play.png"
                                    >
                                </button>
                            </li>
                        </ul>
                        <div class="main-info-details">
                            <h3 class="tagline">${data.tagline}</h3>
                            <h3 class="general-view">Vista general</h3>
                            <p>${data.overview}</p>
                        </div>
                        ${
                            data.credits.crew.length > 0 ? crewData : ''

                        }
                    </div>
                `
                container.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`

                // add to favorites btn
                let favorites = [] 
                
                if(localStorage.length > 0){
                    favorites = JSON.parse(localStorage.getItem('favoritesToString'));
                    var isFavorite = favorites.find(el => el[0] == id);
                }

                let btnFav = document.querySelector('.btn-fav');

                if(localStorage.getItem('favoritesToString') != null){ 
                    if(isFavorite != undefined) {
                        btnFav.innerHTML = imgRemove
                    }else{
                        btnFav.innerHTML = imgAdd;
                    }
                }

                btnFav.addEventListener('click', function(){
                    var dataMovieTV = [id, path]

                    if (isFavorite != undefined){
                        let indexOfDataMovieTv = favorites.indexOf(isFavorite)
                        favorites.splice(indexOfDataMovieTv);
                        btnFav.innerHTML = imgAdd
                        isFavorite = undefined
                    }else{
                        favorites.push(dataMovieTV);
                        isFavorite = true
                        btnFav.innerHTML = imgRemove
                    }
                    localStorage.setItem('favoritesToString', JSON.stringify(favorites));
                    console.log(localStorage);
                })

                // circle people rating
                let circle = document.querySelector('.main-circle');
                let radius = circle.r.baseVal.value;
                let circumference = radius * 2 * Math.PI;

                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = `${circumference}`;

                function setProgress(percent) {
                  const offset = circumference - (percent / 100 * circumference);
                  circle.style.strokeDashoffset = offset;
                }
                setProgress(data.vote_average * 10);


                //cast 
                let castData = data.credits.cast
                let length = castData.length > 5 ? 6 : castData.length
                wrapperCast.innerHTML = 
                `
                    <ol id="list-cast" class="people-cast"></ol>
                    <p class="btn-all-seasons">
                        <a 
                            href="castCrew.html?id=${data.id}&title=${path === 'tv' ? data.name : data.title}&yearOut=${yearOut}&img=${data.poster_path}&path=${path}">
                            Reparto y equipo completo
                        </a>
                    </p>
                `
                for(let i = 0; i < length; i++){
                    document.getElementById('list-cast').innerHTML += 
                        `
                            <li class="card-cast">
                                <a href="castCrewDetails.html?id=${castData[i].id}">
                                    <img
                                        src="https://image.tmdb.org/t/p/w138_and_h175_face${castData[i].profile_path}"
                                        alt="${castData[i].name}"
                                    >
                                </a>
                                <p class="name-cast cast-info">
                                    <a href="castCrewDetails.html?id=${castData[i].id}">${castData[i].name}</a>
                                </p>
                                <p class="cast-info cast-character">${castData[i].character}</p>

                            </li>
                        `
                }

                //aside INFO
                let internationalNumberFormat = new Intl.NumberFormat('en-US')
                let budget = `$${internationalNumberFormat.format(data.budget)}`
                let revenue = `$${internationalNumberFormat.format(data.revenue)}`
                let moneyMovie = 
                `
                    <p>
                        <strong>Presupuesto</strong>
                        ${data.budget != 0 ? budget : '-'}
                    </p>
                    <p>
                        <strong>Ingresos</strong>
                        ${data.revenue != 0 ? revenue : '-'}
                    </p>
                `
                let serieInfo =
                `
                    <p>
                        <strong>Primer episodio</strong>
                        ${data.first_air_date}
                    </p>
                    <p>
                        <strong>Temporadas disponibles</strong>
                        ${data.number_of_seasons}
                    </p>
                    <p>
                        <strong>Tipo</strong>
                        ${data.type}
                    </p>
                `

                for(let i = 0; i < data.spoken_languages.length; i++){
                    if(data.spoken_languages[i].iso_639_1 === data.original_language){
                        var original_language = data.spoken_languages[i].name
                    }
                }

                asideInfo.innerHTML = 
                `
                    <section class="info-wrapper">
                        <p>
                            <strong>Título original</strong>
                            ${path === 'movie' ? data.original_title : data.original_name}
                        </p>
                        <p>
                            <strong>Idioma original</strong>
                            ${original_language}
                        </p>
                        ${path === 'movie' ? moneyMovie : serieInfo}
                        <p>
                            <strong>Status</strong>
                            ${data.status}
                        </p>
                    </section>
                    <section>
                        <h4 class="title-aside">Palabras claves</h4>
                        <ul id="keywords">

                        </ul>
                    </section>
                `

                let keywords = document.getElementById('keywords')
                let pathKeywords = path === 'tv' ? data.keywords.results : data.keywords.keywords
                let lengthKeywords = path === 'tv' ? pathKeywords.length : pathKeywords.length

                for(let i = 0; i < lengthKeywords; i++){
                    keywords.innerHTML += `
                    <li>
                        <a>${pathKeywords[i].name}</a>
                    </li>
                    `
                }

                if(data.belongs_to_collection != null){
                    document.querySelector('.shadow-collection').style.display = 'block'
                    document.getElementById('collection').style.display = 'block'
                    collection.innerHTML += 
                    `
                        <div class="collection-info-container">
                            <h2 class="title-collection">${data.belongs_to_collection.name}</h2>
                            <p class="btn-see-more">
                                <a class="link-to-collection">Ver la colección</a>
                            </p>
                        </div>
                    `
                    collection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.belongs_to_collection.backdrop_path})`
                }

                if(path === 'tv'){
                    document.getElementById('actual-season').style.display = 'block'
                    let actual_season = data.seasons.length - 1

                    let data_air_date_tv = new Date(data.seasons[actual_season].air_date)
                    let month_air_date = data_air_date_tv.getMonth() + 1
                    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                    let month_text = meses[month_air_date - 1]
                    let day_air_date = data_air_date_tv.getDate()

                    actualSeason.innerHTML = 
                    `
                        <h3 class="title-seasons">Temporada actual</h3>
                        <div class="season-card">
                            <a class="poster-link">
                                <img
                                    src="https://image.tmdb.org/t/p/w130_and_h195_bestv2${data.poster_path}"
                                    alt="${data.name}"
                                >
                            </a>
                            <div class="content">
                                <h2 class="title-season">Temporada ${data.seasons[actual_season].season_number}</h2>
                                <h4>${yearOut} | ${data.seasons[actual_season].episode_count} episodios</h4>
                                <p class="season-overview">La temporada ${data.seasons[actual_season].season_number} de ${data.name} se estrenó el ${day_air_date} de ${month_text} de ${yearOut}</p>
                            </div>
                        </div>
                        <p class="btn-all-seasons">
                            <a>Ver todas las temporadas</a>
                        </p>
                    `
                }
        })
        .catch(function(error) {
            console.log("Error: " + error);
        })
    })    
}

// function to search 
export const getResultsSearch = (container) => {
    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let q = queryStringObj.get('q')

    document.getElementById('title-search').innerHTML = q

    fetch(`${API_URL}search/multi?api_key=${api_key}&language=en-US&query=${q}&page=1&include_adult=false`)

        .then(response => (response.json()))

        .then(data => {

            container.style.display = 'none'

            data.results.forEach(dataResults => {
                if(dataResults.poster_path){
                    container.innerHTML += `
                    <article class="movie-serie-container">
                        <a href="details.html?id=${dataResults.id}&path=${dataResults.name ? 'tv' : 'movie'}">

                            <div class="image-container">
                                <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                <img 
                                    class="image-poster" 
                                    src="https://image.tmdb.org/t/p/w200/${dataResults.poster_path}" 
                                    alt="${dataResults.name ? dataResults.name : dataResults.title}"
                                >
                                
                            </div>

                            <h3 class="title">
                                ${dataResults.name ? dataResults.name : dataResults.title}
                            </h3>

                            <p class="release-date">
                                ${dataResults.name ? dataResults.first_air_date : dataResults.release_date}
                            </p>

                        </a>
                    </article>
                `
                }
            });            
        })

        .catch(function(error) {
            console.log("Error: " + error);
        })

        .finally(() => {
            document.getElementById('loader').style.display = 'none'
            container.style.display = 'flex'
        })

}

// function to get Similar Titles
export const getSimilarTitles = (container) => {
    /*
    possible paths:
        movies --> movie
        series --> tv
    */

    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let id = queryStringObj.get('id')
    let path = queryStringObj.get('path')

    fetch(`${API_URL}${path}/${id}/similar?api_key=${api_key}&language=en-US&page=1`)

        .then(response => (response.json()))

        .then(data => {
        
            let dataResults = data.results
            let customLengthArray = 10
            for(let i = 0; i < customLengthArray; i++){
                if(dataResults[i].poster_path){
                    container.innerHTML += 
                    `
                    <article class="movie-serie-container">
                                <a href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">

                                    <div class="image-container">
                                        <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                        <img 
                                            class="image-poster" 
                                            src="https://image.tmdb.org/t/p/w200/${dataResults[i].poster_path}" 
                                            alt="${dataResults[i].name ? dataResults[i].name : dataResults[i].title}"
                                        >
                                        <div class="btn-container">
                                            <button class="btn-content">
                                                <img class="btn-play-img img-btn" src="../images/buttons/button-play.png" alt="">
                                            </button>
                                            <button class="btn-content btn-add-container">
                                                <img class="btn-add-img img-btn" src="../images/buttons/add-btn.png" alt="">
                                            </button>
                                        </div>
                                    </div>

                                    <h3 class="title">
                                        ${dataResults[i].name ? dataResults[i].name : dataResults[i].title}
                                    </h3>

                                    <p class="release-date">
                                        ${dataResults[i].name ? dataResults[i].first_air_date : dataResults[i].release_date}
                                    </p>

                                </a>
                            </article>
                    `
                }else{
                    i++
                    container.innerHTML += 
                    `
                    <article class="movie-serie-container">
                        <a href="details.html?id=${dataResults[i].id}&path=${dataResults[i].name ? 'tv' : 'movie'}">

                            <div class="image-container">
                                <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                <img 
                                    class="image-poster" 
                                    src="https://image.tmdb.org/t/p/w200/${dataResults[i].poster_path}" 
                                    alt="${dataResults[i].name ? dataResults[i].name : dataResults[i].title}"
                                >
                                <div class="btn-container">
                                    <button class="btn-content">
                                        <img class="btn-play-img img-btn" src="../images/buttons/button-play.png" alt="">
                                    </button>
                                    <button class="btn-content btn-add-container">
                                        <img class="btn-add-img img-btn" src="../images/buttons/add-btn.png" alt="">
                                    </button>
                                </div>
                            </div>

                            <h3 class="title">
                                ${dataResults[i].name ? dataResults[i].name : dataResults[i].title}
                            </h3>

                            <p class="release-date">
                                ${dataResults[i].name ? dataResults[i].first_air_date : dataResults[i].release_date}
                            </p>

                        </a>
                    </article>
                    `
                    customLengthArray++
                }

            }
        
        })

        .catch(function(error) {
            console.log("Error: " + error);
        })
}

// function to get the all the Genres
export const getGenres = (container, path) => {
    /*
    possible paths:
        movies genres --> movie
        tv genres --> tv
    */

    fetch(`${API_URL}genre/${path}/list?api_key=${api_key}&language=en-US`)
    
        .then(response => {return response.json()})

        .then(data => {
            data.genres.forEach(genre => {
                container.innerHTML += `
                <article class="movie-serie-container genres-card ${path === 'movie' ? 'genres-movies' : 'genres-tv'}">
                    <a href="titleSameGenre.html?id=${genre.id}&title=${genre.name}&path=${path}" class="link-genres">
                        <div class="overlay-color-genres"></div>
                        <div class="image-container genres-title-container">
                            <h1 class="genre-title">${genre.name}</h1>
                        </div>
                    </a>
                </article>
                `
            });
        })

        .catch(function(error) {
            console.log("Error: " + error);
        })
}

// function to get All cast and crew
export const getCastCrew = (container) => {
    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let id = queryStringObj.get('id')
    let title = queryStringObj.get('title')
    let yearOut = queryStringObj.get('yearOut')
    let img = queryStringObj.get('img')
    let path = queryStringObj.get('path')
    fetch(`${API_URL}${path}/${id}/credits?api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            container.innerHTML = 
            `
                <div class="return-to-movie-container">
                    <a class="link-back-movie">
                        <img
                            src="https://image.tmdb.org/t/p/w58_and_h87_face${img}"
                            alt="${title}"
                        >
                    </a>
                    <div class="info-movie-in-cast">
                        <h2>
                            <a href="details.html?id=${id}&path=${path}">${title}</a>
                            <span>(${yearOut})</span>
                        </h2>
                        <h3>
                            <a href="details.html?id=${id}&path=${path}">
                                ← Volver a principal
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="main-cast-crew-container">
                    <section class="cast-crew">
                        <h3>
                            Reparto
                            <span>${data.cast.length}</span>
                        </h3>
                        <ol id="cast" class="credits"></ol>
                    </section>
                    <section class="cast-crew">
                        <h3>
                            Equipo
                            <span>${data.crew.length}</span>
                        </h3>
                        <ol id="crew" class="credits"></ol>
                    </section>
                </div>
            `
            let castContainer = document.getElementById('cast')
            let crewContainer = document.getElementById('crew')

            data.cast.forEach(cast => {
                let profile_img = `https://image.tmdb.org/t/p/w66_and_h66_face${cast.profile_path}`
                let default_profile_img = '../images/icons/default_profile.svg'
                castContainer.innerHTML += 
                `
                    <li>
                        <a href="castCrewDetails.html?id=${cast.id}">
                            <img
                                src="${cast.profile_path != null ? profile_img : default_profile_img}"
                                alt="${cast.name}"
                            >
                        </a>
                        <div class="info-cast-crew">
                            <p>
                                <a href="castCrewDetails.html?id=${cast.id}">
                                    ${cast.name}
                                </a>
                            </p>
                            <p class="character-job">${cast.character}</p>
                        </div>
                    </li>
                `
            })

            data.crew.forEach(crew => {
                let profile_img = `https://image.tmdb.org/t/p/w66_and_h66_face${crew.profile_path}`
                let default_profile_img = '../images/icons/default_profile.svg'
                crewContainer.innerHTML += 
                `
                    <li>
                        <a href="castCrewDetails.html?id=${crew.id}">
                            <img
                                src="${crew.profile_path != null ? profile_img : default_profile_img}"
                                alt="${crew.name}"
                            >
                        </a>
                        <div class="info-cast-crew">
                            <p>
                                <a href="castCrewDetails.html?id=${crew.id}">
                                    ${crew.name}
                                </a>
                            </p>
                            <p class="character-job">${crew.job}</p>
                        </div>
                    </li>
                `
            })

        }) 
}

// function to get Titles with the same genre
export const getTitleSameGenre = (container) => {
    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let id = queryStringObj.get('id')
    let path = queryStringObj.get('path')
    let title = queryStringObj.get('title')

    document.getElementById('title-same-genre').innerHTML = title

    fetch(`${API_URL}discover/${path}?api_key=${api_key}&language=en-US&with_genres=${id}&page=1`)

        .then(response => (response.json()))

        .then(data => {

            data.results.forEach(dataResults => {
                if(dataResults.poster_path){
                    container.innerHTML += `
                    <article class="movie-serie-container">
                        <a href="details.html?id=${dataResults.id}&path=${dataResults.name ? 'tv' : 'movie'}">

                            <div class="image-container">
                                <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                <img 
                                    class="image-poster" 
                                    src="https://image.tmdb.org/t/p/w200/${dataResults.poster_path}" 
                                    alt="${dataResults.name ? dataResults.name : dataResults.title}"
                                >
                                
                            </div>

                            <h3 class="title">
                                ${dataResults.name ? dataResults.name : dataResults.title}
                            </h3>

                            <p class="release-date">
                                ${dataResults.name ? dataResults.first_air_date : dataResults.release_date}
                            </p>

                        </a>
                    </article>
                    `
                }else{
                    i++
                    container.innerHTML += 
                    `
                    <article class="movie-serie-container">
                        <a href="details.html?id=${dataResults.id}&path=${dataResults.name ? 'tv' : 'movie'}">

                            <div class="image-container">
                                <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                <img 
                                    class="image-poster" 
                                    src="https://image.tmdb.org/t/p/w200/${dataResults.poster_path}" 
                                    alt="${dataResults.name ? dataResults.name : dataResults.title}"
                                >
                                
                            </div>

                            <h3 class="title">
                                ${dataResults.name ? dataResults.name : dataResults.title}
                            </h3>

                            <p class="release-date">
                                ${dataResults.name ? dataResults.first_air_date : dataResults.release_date}
                            </p>

                        </a>
                    </article>
                    `
                    customLengthArray++
                }
            });
        })

        .catch(function(error) {
            console.log("Error: " + error);
        })

}