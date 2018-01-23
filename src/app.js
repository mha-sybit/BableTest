require("@babel/polyfill");
const $ = require("jquery");

const people = require('./people.js');
const article = require('./article.js');

// is a single test with a porxy
//const proxy = require('./proxy.js');

// logger an logging class in one file
// const my_aspect = require('./my_aspect');


$('<h1>People</h1>').appendTo('body');

const ul = $('<ul></ul>').appendTo('body');

for (const person of people) {
	$('<li></li>').text(person).appendTo(ul);
}