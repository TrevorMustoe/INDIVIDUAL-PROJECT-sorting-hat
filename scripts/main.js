const showAllButton = document.querySelector("#show-btn");
const griffButton = document.querySelector("#griff-button");
const raveButton = document.querySelector("#rave-button")
const huffButton = document.querySelector("#huff-button")
const snakeButton = document.querySelector("#snake-button")

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
  }
  ]

//create a varable for each house using a switch case to store and assign house colors

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


// start remder to dom function
  const renderToDom = (divId, htmlToRender) => {
    // Creates a const and uses a query selector to grab the div we want to target
      const selectedDiv = document.querySelector(divId);

    // Accessing the inner html of the selected div and setting it to be whatever html we need to render here
      selectedDiv.innerHTML = htmlToRender;
    };
    

//this is rendering my inro page to the screen
renderToDom("#intro-page",  `<h1 class="choose">WELCOME TO HOGWARTS </h1>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">New Student's Name</label>
    <input type="text" class="form-control" id="userInput" required aria-describedby="emailHelp" placeholder="Enter Students Name Here">
  
  </div>
  <br>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`)
// End render to dom for intro page

// make a sort function for our button that randomly sorts
// needs to take in the user input
// use math.random and math.floor to * 4 (ammount of houses)

let newRandomHouse = () => {
  // creates an empty array to store new house
  let newHouse = ""
  // function to randomize math times 4 
  let randomizer = Math.ceil(Math.random() * 4);
  // switch statement for assiging house 
   console.log(randomizer)
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
    console.log("Sorry You didn place bud")
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
      studentList.push(newStudentObject)
      // resets the form 
      form.reset()
      // calls the new student list as a console.log for testing
      console.log(studentList)
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

buttonsToDom(showAllButton, studentList)
buttonsToDom(griffButton, griffHouse)
buttonsToDom(raveButton, ravenHouse)
buttonsToDom(huffButton, huffleHouse)
buttonsToDom(snakeButton, slytherinHouse)

  //showAllButton.addEventListener("click", () => {
    // this renders the type of student we have selected at the top of the screen
      //renderCards(studentList)
   // });

   // griffButton.addEventListener("click", ()=> {
      
      //renderCards(griffHouse)
    //})

   // raveButton.addEventListener("click", ()=> {
    //  const ravenHouse = filter(studentList, "Ravenclaw")
     // renderCards(ravenHouse)
  //  })

  //  huffButton.addEventListener("click", ()=> {
   //   const ravenHouse = filter(studentList, "Hufflepuff")
   //   renderCards(ravenHouse)
   // })

   // snakeButton.addEventListener("click", ()=> {
//const ravenHouse = filter(studentList, "Snake")
   //   renderCards(ravenHouse)
//})
   

   
