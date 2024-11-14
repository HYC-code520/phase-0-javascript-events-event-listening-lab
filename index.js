function addingEventListener() {
    // Select the button element by its ID
    const button = document.getElementById('button');
  
    // Add an event listener for the 'click' event
    button.addEventListener('click', function () {
      alert('Button was clicked!');
    });
  }
  