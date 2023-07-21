let movieArray = [];
const baseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const loadOneMovie = () => {
    const randomNumber = Math.round(Math.random() * (movieArray.length - 1))
    
    document.querySelector(".game__content-img")
}

const populateMovies = () => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e0b57a7718e974f2bf7c3b560937efa3&language=en-USpage=1")

    .then(({data}) => {
        movieArray = [...data.results]
        console.log("movie Array after api call:", movieArray)
    })
}

