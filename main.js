// ### variables
var pageEvents = document.querySelector('main');
var enterButton = document.querySelector('button');
var outputArticle = document.querySelector('.output-article');
var eachNewBookMark = 0;
var bookMarksArray = [];
var deleteBtn = document.querySelector('.delete');
var counter = 0;

var userInputWeb = document.querySelector('.user-input-web');
var userInputURL = document.querySelector('.user-input-url');

window.onload = function() {
  fromLS();
  outputBookMarks();

}
// ######### event listners
pageEvents.addEventListener('click', function(event) {
  // console.log(event.target.classList[0]);
  // console.log(event.target.classList);
  // console.log(event.path[1].firstChild.id);
  console.log(event.path[1].id);
  // console.log(event.target.closest.id);
  reading()
  deleteBookmark(event.path[1].id);

});



enterButton.addEventListener('click', function() {
  getInputs();
  // outputBookMarks();
  lSArray();
  fromLS();
  outputBookMarks()

});


// ########## functions
function checkInputs() {

}


function getInputs() {
  var userInputWeb = document.querySelector('.user-input-web');
  var userInputURL = document.querySelector('.user-input-url');
  if (userInputWeb.value !== "" && userInputURL.value !== " " && userInputWeb.value !== "Website Title" && userInputURL.value !== "Website URL") {
    makeClass(userInputWeb.value, userInputURL.value);
    userInputWeb.classList.remove('error');
    userInputURL.classList.remove('error');
    // console.log("the web site", userInputWeb.value);
    // console.log("the URL", userInputURL.value);
  } else {
    userInputWeb.classList.add('error');
    userInputURL.classList.add('error');
    // preventDefault(); remvoe comment for end to prevent
  }
}

function makeClass(title, url) {
  bookmark1 = new Bookmark(title, url);
  bookMarksArray.push(bookmark1);

  // console.log(bookMarksArray, bookmark1);
}

function outputBookMarks() {
  var div = document.createElement('div');
  div.innerHTML = '';

    for (var i = 0; i < arrayFls.length; i++) {
      div.innerHTML =  `<div id='${arrayFls[i].id}' class='card'><h3 class='h3'>${arrayFls[i].title}</h3><hr/><p class='url'>${arrayFls[i].url}</p><hr/><p class='read'>Read</p><p class='delete'>Delete</p></div>`
      outputArticle.appendChild(div);
    }
  };



// to localStorage
function lSArray() {
  if (bookMarksArray !== 0) {
    var toStringBooks = JSON.stringify(bookMarksArray);
    window.localStorage.setItem('bookMarkLS', toStringBooks);
  }

}
// from localStorage
function fromLS() {
  arrayFls = JSON.parse(window.localStorage.getItem('bookMarkLS'));
}

function deleteBookmark() {
    bookMarksArray.splice(0, 1);
    makeClass();

}

function reading() {
  if (event.target.classList[0] === 'read' && bookMarksArray[0].read === true) {
    bookMarksArray[0].toggleRead(!true);
    event.target.classList.toggle('read-selected');
    // console.log('toggle false', `${bookMarksArray[0].read}`);

  }
  if (event.target.classList[0] === 'read' && bookMarksArray[0].read === false) {
    bookMarksArray[0].toggleRead(!false);
    event.target.classList.toggle('read-selected');
    // console.log('toggle to true?', `${bookMarksArray[0].read}`);

  }
}
