const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const API_KEY =`solaris-vKkkQHqQboi7c6JF`; //HÅRDKODAD NYCKEL
let planets_list = [];
let button0 = document.getElementById(`sun`);
let button1 = document.getElementById(`mercury`);
let button2 = document.getElementById(`venus`);
let button3 = document.getElementById(`earth`);
let button4 = document.getElementById(`mars`);
let button5 = document.getElementById(`jupiter`);
let button6 = document.getElementById(`saturn`);
let button7 = document.getElementById(`uranus`);
let button8 = document.getElementById(`neptune`);
let h1 = document.getElementById(`h1`);
let p = document.querySelector(`p`);

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
    let planetName = planets_list.bodies[number].name;
    let planetDesc = planets_list.bodies[number].desc;
    let planetLatinName = planets_list.bodies[number].latinName;
    let planetCircum = planets_list.bodies[number].circumference;
    let planetDistance = planets_list.bodies[number].distance;
    let planetMaxTemp = planets_list.bodies[number].temp.day;
    let planetMinTemp = planets_list.bodies[number].temp.night;
    let planet_Moons = planets_list.bodies[number].moons; //ARRAY!!!! Gör en egen funktion för att nå eventuella månar?
    h1.innerHTML='';
    let template = `
    <article>
        <h1>${planetName}</h1>
        <p><em>${planetLatinName}</em></p>
        <p>${planetDesc}</p>
        <p>Omkrets: ${planetCircum}</p>
        <p>Km från solen: ${planetDistance}</p>
        <p>Temperatur dagstid: ${planetMaxTemp}</p>
        <p>Temperatur nattetid: ${planetMinTemp}</p>
    </article>
    `
    h1.insertAdjacentHTML('beforeend', template);
}

async function displayPlanets(number) //behövs denna?
{
    /*for (const planet of planets)
    {
        console.log(planet)
    }*/
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