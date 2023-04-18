// alert("hellowww");

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("тебе есть 18?", "");
// console.log(answer + 5);

// let und;

// const obj = {
//   name: "Leka",
//   age: 25,
//   isMarried: true,
// };

// console.log(obj["name"]);

// let arr = ["plum.png", "orange.jpeg", 6, "apple.bmp"];
// console.log(arr[1]);

// const answers = [];

// answers[0] = prompt("whats your name?", "");
// answers[1] = prompt("whats your surname?", "");
// answers[2] = prompt("how old are you", "");

// document.write(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Hello, ${user}`);

// const isChecked = true,
//   isClose = false;

// console.log(isChecked || isClose);

const nubmberOfFilms = prompt("How many movies have you seen", "");

const personalMovieDB = {
  count: nubmberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("The last movie you watched?", ""),
  b = prompt("How did you liked it?", ""),
  c = prompt("The last movie you watched?", ""),
  d = prompt("How did you liked it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
