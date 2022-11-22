
import { getPlanets } from "./getPlanets.js";

let button0 = document.getElementById(`sun`);
let button1 = document.getElementById(`mercury`);
let button2 = document.getElementById(`venus`);
let button3 = document.getElementById(`earth`);
let button4 = document.getElementById(`mars`);
let button5 = document.getElementById(`jupiter`);
let button6 = document.getElementById(`saturn`);
let button7 = document.getElementById(`uranus`);
let button8 = document.getElementById(`neptune`);

button0.addEventListener(`click`, function() {
    getPlanets(0);
})

button1.addEventListener(`click`, function() {
    getPlanets(1);
})

button2.addEventListener(`click`, function() {
    getPlanets(2);
})

button3.addEventListener(`click`, function() {
    getPlanets(3);
})

button4.addEventListener(`click`, function() {
    getPlanets(4);
})

button5.addEventListener(`click`, function() {
    getPlanets(5);
})

button6.addEventListener(`click`, function() {
    getPlanets(6);
})

button7.addEventListener(`click`, function() {
    getPlanets(7);
})

button8.addEventListener(`click`, function() {
    getPlanets(8);
})