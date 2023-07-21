let movieArray = [];
const baseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
const form = document.querySelector(".game__interactive-form");
console.log("this is the form el:", form)
let randomNumber;

const wrongPhrases = [
    "Wrrrroooonnnnggggg!",
    "Come on man, you can do better!",
    "Are you even trying",
    "Nice try",
    "Hehe, funny guess",
    "Sorry, not it",
    "How? come on now",
    "Try again",
    "Maybe next time",
    "Okay bud...",
    "Ha! Good try but, uh, no!",
    "Better luck next time",
    "Get better",
]

const loadOneMovie = () => {
    randomNumber = Math.round(Math.random() * (movieArray.length - 1))

    
    const imgEl = document.querySelector(".game__content-img");
    // console.log("img el:",imgEl)
    const targetMovie = movieArray[randomNumber];
    console.log("movie loaded is", targetMovie.title)
    // console.log("target movie is:",targetMovie)
    const imgUrl = baseUrl + "/" + targetMovie.backdrop_path;
    // console.log("img url is:", imgUrl)
    imgEl.setAttribute("src", imgUrl);
}

const populateMovies = () => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e0b57a7718e974f2bf7c3b560937efa3&language=en-USpage=1")

    .then(({data}) => {
        movieArray = [...data.results]
        console.log("movie Array after api call:", movieArray)
        loadOneMovie();
    })
}

const handleSubmit = event => {
    event.preventDefault();
    let guess = event.target.guess.value
    console.log("guess", guess)
    guess = guess.toLowerCase().trim();
    let answer = movieArray[randomNumber].title
    answer = answer.toLowerCase();

    const guessArr = guess.split(" ")
    const guessedRight = guessArr.forEach(guess => {
        answer.includes(guess)
    })
    console.log(guessArr);

    if (answer.includes(guess) || guess.includes(answer) || guess === answer || guessedRight ) {
        console.log("guess was correct")
    } else {
        console.log("guess was false");
    }

    
}


populateMovies();

form.addEventListener("submit", handleSubmit)