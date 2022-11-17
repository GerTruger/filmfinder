console.log(movies)
const overzicht = document.getElementById('overzicht')

console.log(overzicht)

const addMoviesToDom = movies.map((theMovies) => {

   const newLi = document.createElement("li");
   const newA = document.createElement("a");

   overzicht.appendChild(newLi);   
   newLi.appendChild(newA)
 newA.append(theMovies.title)


});
console.log(addMoviesToDom)
// addMoviesToDom();


// const addMoviesToDom = movies.filter((theMovies) => {
//    return theMovies.type[0]
// })





// movies.forEach((element) => {

  


