import { renderToDom } from "../utils/renderToDom";


const studentList = [
  {
    id: 1,
    student: "Harry",
    house: "Griffindor",
    img: "https://ik.imagekit.io/hpapi/harry.jpg"
  },
  {
    id: 2,
    student: "Ron",
    house: "Ravenclaw",
    img: "https://ik.imagekit.io/hpapi/ron.jpg",
  },
  {
    id: 3,
    student: "Jeff",
    house: "Hufflepuff",
    img: "https://ik.imagekit.io/hpapi/cedric.png"
  },
  {
    id: 4,
    student:  "John Cena",
    house: "Slytherine",
    img: "https://ik.imagekit.io/hpapi/goyle.jpg"
  }
  ]


const studentCard = (object) => { 
  return  ` 
  <div class="card" id="card-container" >
      <div class="card-body">
      <h5 id="cardTitle" class="card-title">${object.name}</h5>
      <img class="card-img-top" src="${object.imageUrl}" alt="pet picture" style="width: 100%;">
        <p id="cardText" class="card-text">${object.house}</p>
        <hr></hr>
        <button class="btn btn-danger" id="expel--${object.id}">EXPEL</button>
      </div>
  </div>
  `
  }


// start remder to dom function
  const renderToDom = (divId, htmlToRender) => {
    // Creates a const and uses a query selector to grab the div we want to target
      const selectedDiv = document.querySelector(divId);
    // Accessing the inner html of the selected div and setting it to be whatever html we need to render here
      selectedDiv.innerHTML = htmlToRender;
    };


    

  // this will pass on object (student list) once called
  // export allows us to export this reuable funtions so we can use it other scripts
  // start boostrap card

// this is a reusable function that creates takes an array (studentList) and returns 
const renderCards = (array) => {
  //creates an empty string for us to store the card info in
  let refStuff = "";
  // this iterates through an array (studentList) 
  array.forEach((item) => {
    //this adds the imported card boostrap function and add its to the empty array 
    refStuff += card(item);
  });
  // calls the renderToDom function and passes in our div of cards and the varable of reStuff which is holding out array data
  renderToDom("#app", refStuff);
}

// this is the end of the app use this to call all my functions into one function
const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(studentList) // this puts the card on dom and passes in which array I need

  // SELECT THE SEARCH INPUT
  //document.querySelector('#searchInput').addEventListener('keyup', search) //takes in user input

  // SELECT BUTTON ROW DIV
  //document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}
startApp();