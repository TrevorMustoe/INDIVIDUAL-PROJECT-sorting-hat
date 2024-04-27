export const renderToDom = (divId, htmlToRender) => {
  // Creates a const and uses a query selector to grab the div we want to target
    const selectedDiv = document.querySelector(divId);
  // Accessing the inner html of the selected div and setting it to be whatever html we need to render here
    selectedDiv.innerHTML = htmlToRender;
  };