// scroll animation
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const bgNav = document.getElementById('scroll-bg-header-nav')
        let scroll = window.scrollY
        if (scroll > 80) {
            bgNav.classList.add('scroll-change')
        }
  
        else{
            bgNav.classList.remove('scroll-change')
        }
    })
})

// show or hide trailer
function toggleTrailer(){
    let poster = document.getElementById('poster')
    let trailer = document.getElementById('trailer')

    if(trailer.classList.contains('display-out')){
        poster.classList.add('display-out')
        trailer.classList.remove('display-out')
    }else{
        poster.classList.remove('display-out')
        trailer.classList.add('display-out')
    }
}