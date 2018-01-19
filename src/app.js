require("@babel/polyfill");
const people = require('./people.js');
const proxy = require('./proxy.js');
const my_aspect = require('./my_aspect');
const logger = require('./logger');
// const article = require('./article.js');
const $ = require("jquery");

// import 'babel-polyfill';
// import people from './people.js';
// import $ from 'jquery';


$('<h1>People</h1>').appendTo('body');

const ul = $('<ul></ul>').appendTo('body');

for (const person of people) {
	$('<li></li>').text(person).appendTo(ul);
}