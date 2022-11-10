const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const API_KEY =`solaris-vKkkQHqQboi7c6JF`; //HÅRDKODAD NYCKEL
let planets_list = [];
let button0 = document.getElementById(`0`);
let button1 = document.getElementById(`1`);
let button2 = document.getElementById(`2`);
let button3 = document.getElementById(`3`);
let button4 = document.getElementById(`4`);
let button5 = document.getElementById(`5`);
let button6 = document.getElementById(`6`);
let button7 = document.getElementById(`7`);
let button8 = document.getElementById(`8`);

/*async function getKey() 
{
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const key_data = await response.json();
    API_KEY = key_data;
}*/

async function getPlanets(number) 
{
    //getKey();
    let response = await fetch("https://fathomless-shelf-54969.herokuapp.com/bodies", {
        method: "GET",
        headers: { "x-zocom": `${API_KEY}`},
      });
    planets_list = await response.json();
    console.log(planets_list.bodies[number].name)
}

async function displayPlanets(planets) //behövs denna?
{
    for (const planet of planets)
    {
        console.log(planet)
    }
}

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