// ### variables
var pageEvents = document.querySelector('main');
var enterButton = document.querySelector('button');
var eachNewBookMark = 0;

// ######### event listners
pageEvents.addEventListener('click', function(event) {
  // console.log(event.target.classList[0]);
  // console.log(event.target.value);
});

enterButton.addEventListener('click', function() {
  getInputs();

});


// ########## functions
function getInputs() {
  var userInputWeb = document.querySelector('.user-input-web');
  var userInputURL = document.querySelector('.user-input-url');
  if (userInputWeb.value !== "" && userInputURL.value !== " ") {
    console.log("the web site", userInputWeb.value);
    console.log("the URL", userInputURL.value);
    makeClass(userInputWeb.value, userInputURL.value)

  }
}

function makeClass(title, url) {
  bookmark1 = new Bookmark(title, url);
  console.log(bookmark1);
}
