// array of objects representing each planet and home to their corresponding HTML file names

  // const planets = [
  //   { name: 'Home', file: '../index' },
  //   { name: 'Earth', file: 'earth', image: '../planets/earth.png' },
  //   { name: 'Jupiter', file: 'jupiter', image: '../planets/jupiter.png' },
  //   { name: 'Mars', file: 'mars', image: '../planets/mars.png' },
  //   { name: 'Mercury', file: 'mercury', image: '../planets/mercury.png' },
  //   { name: 'Neptune', file: 'neptune', image: '../planets/neptune.png' },
  //   { name: 'Saturn', file: 'saturn', image: '../planets/saturn.png' },
  //   { name: 'Uranus', file: 'uranus', image: '../planets/uranus.png' },
  //   { name: 'Venus', file: 'venus', image: '../planets/venus.png' },
  // ];

//   function that generates the navigation menu dynamically based on the planets array
// imported json object from json file


// import user from "../content/navPlanets.json" assert { type: 'json' };    


async function getPlanets() {
  const response = await fetch("../content/navPlanets.json");
  const json = await response.json();
  return json;
}

async function generateMenu() {
    const menu = document.getElementById('menu');
    const ul = document.createElement('ul');
  
    // const navPlanets =  fetch('../content/navPlanets.json')
    // .then(response => response.json().then(rsp=>rsp));
// destructured planets from json object 
// const navPlanets = async ()=> fetch('');

const {planets} = await getPlanets()
console.log(planets)

    planets.forEach((planet) => {
      const li = document.createElement('li');
      const a = document.createElement('a'); 
      a.textContent = planet.name;
      a.href = planet.file + '.html';
      li.appendChild(a);
      ul.appendChild(li);
      
    });
  
    menu.appendChild(ul);
  }

  async function generateImage() {
    const planetContainer = document.getElementById('planet-container');

    // Get the current file name
    // This line of code retrieves the current file name from the URL. It uses the window.location.pathname property to get the path of the current URL, then splits it by the forward slash ("/") using the split('/') method. The pop() method is used to extract the last element of the resulting array, which represents the file name. Finally, the .split('.html')[0] part is used to remove the ".html" extension from the file name.
    const currentFileName = window.location.pathname.split('/').pop().split('.html')[0];
    
    // Find the corresponding planet object based on the current file name
    async function getCurrentPlanet() {
      const {planets} = await getPlanets()
      const resp = planets.find((planet) => planet.file === currentFileName)
      return resp
      };

    // Create an image element and set its source to the planet's image
    const planetImage = document.createElement('img');
    const currentImage = await getCurrentPlanet()
    planetImage.src = currentImage.image;
    planetImage.alt = currentImage.name;
    
    // Append the image element to the beginning of the planet-container
    planetContainer.insertBefore(planetImage, planetContainer.firstChild);
  }
// Call the generateMenu() function 
  window.addEventListener('load', generateMenu);
  window.addEventListener('load', generateImage);








