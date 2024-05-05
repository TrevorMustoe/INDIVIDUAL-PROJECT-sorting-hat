const showAllButton = document.querySelector("#show-btn");
const griffButton = document.querySelector("#griff-button");
const raveButton = document.querySelector("#rave-button")
const huffButton = document.querySelector("#huff-button")
const snakeButton = document.querySelector("#snake-button")
const startButton = document.querySelector("#start-button")
const startPage = document.querySelector("#start-page")
const buttonDiv = document.querySelector("#buttons-div")
const introPage = document.querySelector("#intro-page")
const mainContain = document.querySelector("#main-contain")
const cardsDiv = document.querySelector("#cards-div")

const studentList = [
  {
    id: 1,
    studentName: "Harry",
    house: "Griffindor",
  },
  {
    id: 2,
    studentName: "Ron",
    house: "Ravenclaw",
  },
  {
    id: 3,
    studentName: "Jeff",
    house: "Hufflepuff",
  },
  {
    id: 4,
    studentName:  "John Cena",
    house: "Slytherin",
  },
  {
    id: 5,
    studentName:  "Laura",
    house: "Slytherin",
  },
  {
    id: 6,
    studentName: "Geff",
    house: "Hufflepuff",
  },
  {
    id: 7,
    studentName: "Wron",
    house: "Ravenclaw",
  },
  {
    id: 1,
    studentName: "Garry",
    house: "Griffindor",
  }
  ]

  startButton.addEventListener("click", event => {
    buttonDiv.style.display = "block";
    app2.style.display = "block";
    app.style.display = "flex";
    introPage.style.display = "block";
    startPage.style.display = "none";
  
    cardsDiv.style.display = "flex";
  })



// creates a student card using boostrap
const studentCard = (object) => { 
  return  ` 
  <div class="card" id="card-container" >
      <div class="card-body">
      <h5 id="cardTitle" class="card-title">${object.studentName}</h5>
    
        <p id="cardText" class="card-text">${object.house}</p>
        <hr></hr>
        <button class="btn btn-danger" id="expel--${object.id}">EXPEL</button>
      </div>
  </div>
  `
  }

  const voldCards = (object) => {
    return  ` 
    <div class="card" id="card-container" >
        <div class="card-body" id="volRed" >
        <h5 id="cardTitle" class="card-title">${object.studentName}</h5>
      
          <p id="cardText" class="card-text">${object.house}</p>
          <hr></hr>
        </div>
    </div>
    `
  }

  
// make a function that hides the buttons and the rest of the info until button clicked


// start render to dom function
  const renderToDom = (divId, htmlToRender) => {
    // Creates a const and uses a query selector to grab the div we want to target
      const selectedDiv = document.querySelector(divId);

    // Accessing the inner html of the selected div and setting it to be whatever html we need to render here
      selectedDiv.innerHTML = htmlToRender;
    };



let newRandomHouse = () => {
  // creates an empty array to store new house
  let newHouse = ""
  // function to randomize math times 4 
  let randomizer = Math.ceil(Math.random() * 4);
  // switch statement for assiging house 
   console.log("Random number= ", randomizer)
 switch (randomizer){
  case 1:
    newHouse = "Griffen"
    break;
  case 2:
    newHouse = "You got Raven"
    break;
  case 3:
    newHouse = "You got huffle "
    break;
  case 4:
    newHouse = "You got snake"
    break;
    defult; 
    console.log("Sorry You didnt place bud")
 }
 //returns newly assisigned string
 return newHouse 
}

  // create function that creates a new student card based on our use input 
    const newStudent = (event) => {
      // prevenets from resetting the form right away
      event.preventDefault()
      // starts a new object to hold the user input info 
      const newStudentObject = {
        // this is the student id length plus one giving us the id of the new student
        id: studentList.length + 1, 
        // this will take our user input and add it to our name 
        studentName: document.querySelector("#userInput").value,
        //this adds the random house to the house value
        house: newRandomHouse(),

      }
      // this targets the studentList array and pushes the new student object to the end of it 
      studentList.unshift(newStudentObject)
      // resets the form 
      form.reset()
      // calls the new student list as a console.log for testing
     
      renderCards(studentList)
    }
    // create a querySelector on my form 
    const form = document.querySelector("form")
    // takes in the submit button and adds in the new student 
    form.addEventListener("submit", newStudent)
 

  
  
  // use document.query selector looking at userinput and an event listener that is looking for the enter button on search


// this is a reusable function that creates takes an array (studentList) and returns 
const renderCards = (array) => {
  //creates an empty string for us to store the card info in
  let domString = "";
  // this iterates through an array (studentList) 
  array.forEach((item) => {
    //this adds the imported card boostrap function and add its to the empty array 
    domString += studentCard(item);
  });
  // calls the renderToDom function and passes in our div of cards and the varable of reStuff which is holding out array data
  renderToDom("#app", domString);
}

const renderVolCards = (array) => {
  //creates an empty string for us to store the card info in
  let domString = "";
  // this iterates through an array (studentList) 
  array.forEach((item) => {
    //this adds the imported card boostrap function and add its to the empty array 
    domString += voldCards(item);
  });
  // calls the renderToDom function and passes in our div of cards and the varable of reStuff which is holding out array data
  renderToDom("#volKids", domString);
}

 // function to filter students with specific favorite color this takes in an array and it takes in a string that we are checking
  const filter = (array, houseName) => {
  // creates anohter empty array to store our filterd items
    const houseOfArray= [];
  
  // takes the array we added and iterates through
    array.forEach((item) => {
  // while iterating checking if item in array is equal to the type of animal that we are looking for with typeOf
      if (item.house === houseName) {
  // Pushes the newly assigned item to the array we selected
        houseOfArray.push(item)
      }
    });
  
    // returns the new array only containng the filtered items 
    return houseOfArray;
  };


// make this into one function

 let buttonsToDom = (buttonType, house) => {
  let btn = buttonType.addEventListener("click", () => {
    renderCards(house)
  })
 }
 const griffHouse = filter(studentList, "Griffindor")
 const ravenHouse = filter(studentList, "Ravenclaw")
 const huffleHouse = filter(studentList, "Hufflepuff")
 const slytherinHouse = filter(studentList, "Slytherin")

//buttonsToDom(showAllButton, studentList)
//buttonsToDom(griffButton, griffHouse)
//buttonsToDom(raveButton, ravenHouse)
//buttonsToDom(huffButton, huffleHouse)
//buttonsToDom(snakeButton, slytherinHouse)



  showAllButton.addEventListener("click", () => {
    // this renders the type of student we have selected at the top of the screen
      renderCards(studentList)
    });

    griffButton.addEventListener("click", ()=> {
      const griffHouse = filter(studentList, "Griffindor")
      renderCards(griffHouse)
    })

    raveButton.addEventListener("click", ()=> {
     const ravenHouse = filter(studentList, "Ravenclaw")
     renderCards(ravenHouse)
  })

    huffButton.addEventListener("click", ()=> {
     const ravenHouse = filter(studentList, "Hufflepuff")
     renderCards(ravenHouse)
    })

   snakeButton.addEventListener("click", ()=> {
const ravenHouse = filter(studentList, "Slytherin")
     renderCards(ravenHouse)
})
   

// create a function that targets the expell button on the student cards, then use a split method on the id of the student, (use find index see notes in pet adoption) then use splice to get the expelled student into the new vold array and pain the dom with the new expelled kids.

const app = document.querySelector("#app");
const app2 = document.querySelector("#app2");

// Add an event listener to capture clicks

let badKids = []

app.addEventListener("click", (e) => {

  // 3. check e.target.id includes "delete"
  if (e.target.id.includes("expel")) {
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
    const [, id] = e.target.id.split("--");

    // 4. add logic to remove from array
    // .findIndex is an array method
    const index = studentList.findIndex((member) => member.id === Number(id));

    // this creates a new voldamort array using the index from above that was targeted
    const newVolArray = studentList[index];
    console.log(newVolArray)
  
    // .splice modifies the original array
    studentList.splice(newVolArray, 1);
    badKids.push(newVolArray)
    console.log(studentList);
    console.log("badKids =", badKids);
    // 5. Repaint the DOM with the updated array
  }
  renderCards(studentList)
  renderVolCards(badKids)

});



// do the reverse of the function above to revert it back to an enrolled student?? 

// THESE ARE JUST TESTS 
//let fakeVar = "Hello this is a string im going to split"
//let fakeArray = [1, 2, 3, 4, 5]
//let newFakeArray = fakeArray.slice(2, );
//let splitTest = fakeVar.split(" ")
//console.log(newFakeArray)
//console.log(splitTest[1])
