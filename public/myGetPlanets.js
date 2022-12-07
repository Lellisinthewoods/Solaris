//import { getKey } from "./firebase.js";

import { app, getFirestore, collection, addDoc, getDocs } from "./myFirebase.js";

//const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api';
//let API_KEY; 
let planets_list = [];
let navArea = document.querySelector(`nav`)
let headerArea = document.querySelector(`header`)
let articleArea = document.querySelector(`article`)


async function getPlanets(number) 
{
    /*API_KEY = await getKey(BASE_URL); //DETTA ÄR FÖR DET GAMLA API:ET
    let response = await fetch('./data.json');, {
        method: "GET",
        headers: { "x-zocom": `${API_KEY}`},
      });*/
    let data = await fetch('myPlanetsData.json')
    console.log(data);
    planets_list = await data.json();
    console.log(planets_list)
    let planetName = planets_list.bodies[number].name;
    let planetDesc = planets_list.bodies[number].desc;
    let planetLatinName = planets_list.bodies[number].latinName;
    let planetCircum = planets_list.bodies[number].circumference;
    let planetDistance = planets_list.bodies[number].distance;
    let planetMaxTemp = planets_list.bodies[number].temp.day;
    let planetMinTemp = planets_list.bodies[number].temp.night;
    let planet_Moons = planets_list.bodies[number].moons.join(', ');
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
            <div>
                <h5>Månar</h5>
                <p>${planet_Moons}</p>
                </div>
                <a href="index.html"><p>Tillbaka till start</p></a>
            </footer>
        </div>
    `
    articleArea.insertAdjacentHTML('beforeend', template);
}

export {getPlanets}