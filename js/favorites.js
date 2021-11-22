window.addEventListener('load', function(){

    let favorites = [];
    
    if (localStorage.getItem('favoritesToString') != null) {

        if(localStorage.getItem('favoritesToString').length > 0){
            favorites = JSON.parse(localStorage.getItem('favoritesToString'));

       
            for(let i = 0; i < favorites.length; i++){
            
                console.log(favorites[i])

                fetch(`https://api.themoviedb.org/3/${favorites[i][1]}/${favorites[i][0]}?api_key=17ce6bcdb53e4b3bd9247e8cf4166426&language=en-US`)
                    .then(response => response.json())
                    .then(data => {                                        
                        document.querySelector('#favorites-container').innerHTML += `
                        <article class="movie-serie-container">
                            <a href="details.html?id=${data.id}&path=${data.name ? 'tv' : 'movie'}">

                                <div class="image-container">
                                    <img class="overlay-shadow" src="../images/shadows/overlay_shadow.png">
                                    <img 
                                        class="image-poster" 
                                        src="https://image.tmdb.org/t/p/w200/${data.poster_path}" 
                                        alt="${data.name ? data.name : data.title}"
                                    >
                                    <div class="btn-container">
                                        <button class="btn-content">
                                            <img class="btn-play-img img-btn" src="../images/buttons/button-play.png" alt="">
                                        </button>
                                    </div>
                                </div>

                                <h3 class="title">
                                    ${data.name ? data.name : data.title}
                                </h3>

                                <p class="release-date">
                                    ${data.name ? data.first_air_date : data.release_date}
                                </p>

                            </a>
                        </article>
                        `
                    })
                    .catch(function(error){
                        console.log(`El error fue: ${error}`);
                    })
            }
        }else{
            document.querySelector('section').innerHTML += `
            <article>
                <h3>No has agregado ninguna película a favoritos</h3>
            </article>
            `;
        }
    }else{
        document.querySelector('section').innerHTML += `
            <article>
                <h3>No has agregado ninguna película a favoritos</h3>
            </article>
        `;
    }    
})
    