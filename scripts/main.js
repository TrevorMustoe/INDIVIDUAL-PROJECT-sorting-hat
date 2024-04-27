// import other js files here
import { studentCard } from "../components/studentCard";
import { studentList } from "../data/reference";
import { renderToDom } from "../utils/renderToDom";

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