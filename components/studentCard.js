// this is a reuable function that makes a card with boostrap for our student info


// export allows us to export this reuable funtions so we can use it other scripts
export const studentCard = (object) => { // this will pass on object (student list) once called

  // start boostrap card
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