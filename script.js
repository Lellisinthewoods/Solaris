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
let navArea = document.querySelector(`nav`)
let headerArea = document.querySelector(`header`)
let articleArea = document.querySelector(`article`)
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
    headerArea.style.display='none';
    navArea.style.display='none';
    let template = `
    <div id = 'planet'></div>
        <div class="grid-container">
            <header>
                <h1>${planetName}</h1>
                <br>
                <h4>${planetLatinName}</h4>
            </header>
            <Main>
                <p>${planetDesc}</p>
            </Main>
            <hr>
            <Section> 
                <div><h5>Omkrets</h5>
                <p>${planetCircum} km</p></div>
                <div><h5>Km från solen</h5>
                <p>${planetDistance} km</p></div>
                <div><h5>Temperatur dagstid</h5>
                <p>${planetMaxTemp} C</p></div>
                <div><h5>Temperatur nattetid</h5>
                <p>${planetMinTemp} C</p></div>
            </Section>
            <hr>
            <footer>
                <p>Månar: ${planet_Moons}</p>
            </footer>
        </div>
    `
    
    articleArea.insertAdjacentHTML('beforeend', template);
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