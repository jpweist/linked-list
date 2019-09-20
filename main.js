// ### variables
var pageEvents = document.querySelector('main');
var enterButton = document.querySelector('button');
var outputArticle = document.querySelector('.output-article');
var eachNewBookMark = 0;
var bookMarksArray = [];

// ######### event listners
pageEvents.addEventListener('click', function(event) {
  console.log(event.target.classList[0]);
  // console.log(event.target.value);
});

enterButton.addEventListener('click', function() {
  getInputs();
  // outputBookMarks();
  outputBookMarks()


});

// ########## functions
function getInputs() {
  var userInputWeb = document.querySelector('.user-input-web');
  var userInputURL = document.querySelector('.user-input-url');
  if (userInputWeb.value !== "" && userInputURL.value !== " ") {
    console.log("the web site", userInputWeb.value);
    console.log("the URL", userInputURL.value);
    makeClass(userInputWeb.value, userInputURL.value)
    checkInputs()


  }
}
function checkInputs() {
}

function makeClass(title, url) {
  bookmark1 = new Bookmark(title, url);
  bookMarksArray.push(bookmark1);
  console.log(bookMarksArray, bookmark1);
}

function outputBookMarks() {
  for (var i = 0; i < bookMarksArray.length; i++) {
    var div = document.createElement('div');

    div.innerHTML = `<input id='${bookMarksArray[i].id}' class='card'>
    <h3>${bookMarksArray[i].title}</h3>
    <hr/>
    <p class="url">${bookMarksArray[i].url}</p>
    <hr/>
    <p class="read">Read</p>
    <p class="delete">Delete</p></input> `;
    outputArticle.appendChild(div);
    // console.log(i);

  }
}
