const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const API_KEY = `solaris-vKkkQHqQboi7c6JF`;
let planets_list = [];
let buttons = document.querySelectorAll(`button`);
for (i of buttons){
    //debugger;
    i.addEventListener(`click`, function(){
        for(i=0;i<buttons.length;i++){
            for (x of buttons){
                if(i==x.value)
                console.log(x.value)
            }
        }
    })
}

async function getKey() 
{
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const key_data = await response.json();
    console.log(key_data);
}

async function getPlanets(number) 
{
    getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        method: 'GET',
        headers: 
        {
            'x-zocom': `${API_KEY}`
        }
    });
    planets_list = await response.json();
    console.log(planets_list);
    console.log(planets_list.bodies[number].name)
}

async function displayPlanets(planets)
{
    for (const planet of planets)
    {
        console.log(planet)
    }
}

//getKey();
//getPlanets();



function addClickEvent() { 
    const planetElems = document.querySelectorAll('button'); // Hämtar alla button-element
    console.log(planetElems);
    for(const planetElem of planetElems) { // Loopar igenom alla button-element
        planetElem.addEventListener('click', () => { // Sätter en addEventListener på varje button-element
            const planetName = planetElem.getAttribute('name'); // Hämtar URL:en från src-attributet på img-taggen ''src'
            console.log(planetName);
            const fullPlanetElem = document.querySelector('button'); // Hämtar img-taggen med id full-image
            fullPlanetElem.button = planetName;
        });
    }
}

/*button.addEventListener(`click`, async function() {
    //addClickEvent();
    console.log(button.value)
    let number = button.value;
    getPlanets(number);
    //displayPlanets();
})*/