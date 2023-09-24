'use strict';
// let name = 'John';
// let admin;
// admin = name;
//
// alert(admin);
// let planet = 'Earth';
// let username = 'Daria';
// let message = "hello";
// let message2 = 123456;
// let message3 = 12n;
// console.log('переменная message',typeof message)
// console.log('переменная message2',typeof message2)
// console.log(,typeof message3)
// let name = 'Daria';
// console.log(`Hello,${ name}!`)
// console.log(`${12/4}`)

// let result = prompt('hello', 'world')
// console.log(result)
//
// let question = confirm('do you wont continue?')
// console.log (typeof question)

// let name = prompt('what is your name ?')
// console.log(name)
// let ask = prompt('Какое «официальное» название JavaScript?', '');
// if (ask == 'Netscape'){
//     console.log('YES!')
// }else {
//     console.log('NO!')
// }
// let number = prompt('число', '');
// if (number > 0){
//     console.log(1)
// }
// if (number < 0){
//     console.log(-1)
// }
// if (number == 0){
//     console.log(0)
// }
// const message = prompt('', '');
//
// const maybeNumber = Number(message);
//
// if (Number.isNaN(maybeNumber)){
//     if(message === 'Hello') {
//         console.log('good morning')
//     }
//
//     if (message === 'Bye') {
//         console.log('see you')
//     }
// } else {
//     console.log('this is a number')
// }
// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
// let result;
// let a = 1;
// let b = 2;
// result = (a + b < 4) ? 'мало' : 'много';
// console.log(result)
// let message;
// let login = '';
// if (login === 'Сотрудник') {
//     message = 'Привет';
// } else if (login === 'Директор') {
//     message = 'Здравствуйте';
// } else if (login === '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
// let a = 'outside'
//
// if('2') {
//     a = 'inside'
// }
//
// console.log(a)
// let a = 'outside'
//
// if('2') {
//     a = 'inside'
// } else {
//     a = 'else'
// }
//
// console.log(a)
// let a = 'outside'
//
// console.log(a === '2' ? 'inside' : 'outside')
// let a = 'outside'
//
// // a === '2' ? 'inside' : 'outside'
//
// if (a === '2') {
//     a = 'inside'
// } else {
//     a = 'outside'
// }
//
// console.log(a)
// // console.log('' === 0)
// const h = 'Daryna';
// let calling = prompt('what is your name?', h)
// alert(`your name is ${calling}`)
// const name = prompt ('What is name of JS?' , '');
// if (name === 'ECMA') {
//     alert  ('YES!')
// } else {
//     alert ('NO!');
// }
// const number = prompt('what number?', '');
//
// if (number > 0) {
//   alert(1);
// }
// if (number < 0) {
//   alert(-1);
// }
//
// if (number === '0') {
//   alert(0);
// }
// console.log(1);
// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);

// const obj = {
//   a: 50,
// };
// obj.a = 15;
// console.log(obj);
// const a = 5000;
// const b = 4000;
// const obj = {
//   name: 'John',
//   age: 25,
//   isMarried: false,
// };
// console.log(obj.name);
// const arr = [1, 2, 3, 4];
// console.log(arr[3]);
// const arr = ['a', 'b', 'c'];
// const arrObj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
// };
// console.log(arrObj[1]);
// arrObj.b = 567;
// console.log(arrObj.b);
// console.log(arrObj['b']);
// const answers = [];
// answers[0] = prompt('Your first name?', '');
// answers[1] = prompt('Your last name?', '');
// answers[2] = prompt('Your age?', '');
// // document.write(answers);
// console.log(typeof answers);
// const name = 'Ivan';
// alert(`Hello, ${name}`);
// const name = 'Ivan';
// alert(`Hello, ${name}`);
let numberOfFilms;
function start() {
  numberOfFilms = +prompt('How many films have you seen?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you seen?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log('numberOfFilms', numberOfFilms);
// console.log('personalMovieDB', personalMovieDB);
// const lastFilm = prompt('Last film have you seen?', '');
// const rateFilm = prompt('Rate it, please', '');
// const last = prompt('Last film have you seen?', '');
// const rate = prompt('Rate it, please', '');
// personalMovieDB.movies[lastFilm] = rateFilm;
// personalMovieDB.movies[last] = rate;

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Last film have you seen?', '').trim();
    const rateFilm = prompt('Rate it, please', '');

    if (
      lastFilm != null &&
      rateFilm != null &&
      lastFilm != '' &&
      rateFilm != '' &&
      lastFilm.length < 50
    ) {
      personalMovieDB.movies[lastFilm] = rateFilm;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('You have seen very few films');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You typical viewer');
  } else if (personalMovieDB.count >= 30) {
    console.log('You movie fan');
  } else {
    console.log('Error');
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log('personalMovieDB', personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favorite genre ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
