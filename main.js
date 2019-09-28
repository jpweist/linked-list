// ### variables
var pageEvents = document.querySelector('main');
var enterButton = document.querySelector('button');
var outputArticle = document.querySelector('.output-article');
var eachNewBookMark = 0;
var bookMarksArray = [];
var deleteBtn = document.querySelector('.delete');
var counter = 0;
var target = '';
var userInputWeb = document.querySelector('.user-input-web');
var userInputURL = document.querySelector('.user-input-url');
// ######### event listners

window.onload = function() {
  // lSArray();
  // outputBookMarks();
  getBookmarks();

}
window.addEventListener('load', getBookmarks());


pageEvents.addEventListener('click', function(event) {
  // console.log(event.target.classList[0]);
  // console.log(event.target.classList);
  // console.log(event.path[1].firstChild.id);
  console.log(event.path[1].id);
  target = event.path[1].id;
  // console.log(event.target.closest.id);
  reading(event)
  deleteBookmark(event);

});



enterButton.addEventListener('click', function() {
  getInputs();
  lSArray();
  fromLS();
  outputBookMarks()

});


// ########## functions
function getBookmarks() {
  if(localStorage.length > 0) {
    fromLS();
  }
}
function totalBookmarks() {

  var addTotalBookmarks = bookMarksArray.length
  for (var i = 0; i < bookMarksArray.length; i++) {
    bookMarksArray[i].addTotalBookmarks();
  }
}

function getInputs() {
  var userInputWeb = document.querySelector('.user-input-web');
  var userInputURL = document.querySelector('.user-input-url');
  if (userInputWeb.value !== "" && userInputURL.value !== " " && userInputWeb.value !== "Website Title" && userInputURL.value !== "Website URL") {
    makeClass(userInputWeb.value, userInputURL.value);
    userInputWeb.classList.remove('error');
    userInputURL.classList.remove('error');
    totalBookmarks();
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
  // if (arrayFls.length <= 0 && bookMarksArray.length <= 0) {
  //   var div = document.createElement('div');
  //   div.innerHTML = '';
  //   console.log('no bookmarks')
  // }
  fromLS();
  lSArray()
  if (arrayFls.length !== 0) {

    for (var i = 0; i < arrayFls.length; i++) {
      var div = document.createElement('div');
      div.innerHTML = '';
      div.innerHTML =  `<div id='${arrayFls[i].id}' class='card'><h3 class='h3'>${arrayFls[i].title}</h3><hr/><p class='url'>${arrayFls[i].url}</p><hr/><div class="read-delete"><p class='read'>Read</p><p class='delete'>Delete</p><div></div>`
      outputArticle.appendChild(div);
      // console.log('bookmarks' + i)

  }
    }
  };



// to localStorage
function lSArray() {
  localStorage.clear();
  if (bookMarksArray.length !== 0) {
      var toStringBooks = JSON.stringify(bookMarksArray);
      localStorage.setItem('bookMarkLS', toStringBooks);
  }

}
// from localStorage
function fromLS() {
    var fromStorage = localStorage.getItem("bookMarkLS");

    arrayFls = JSON.parse(fromStorage);
}

function deleteBookmark(event) {
  var deleteID = event.path[2].id.toString();
  console.log(arrayFls.length);
  console.log(event.target.classList.value);
  if (arrayFls.length === 1) {
    bookMarksArray.splice([0], 1);
    arrayFls.splice([0], 1);
    // outputBookMarks();


  }
  for (var j = 0; j <arrayFls.length; j++) {
    if (arrayFls[j].id === deleteID) {
      bookMarksArray[j] = arrayFls[j];
      console.log(`arrayFls `, deleteID);
      return bookMarksArray.splice([j], 1);

    }
  }

  }


function reading(event) {
  // console.log(event.path[2].id.toString());
  console.log(event.target.className);
  // loop thru bookMarksArray and find the id that was clicked on for deleteBtn
  // call the toggleRead function on the object to change read to true.
    if (event.target.className === 'read') {
      for (var i = 0; i < bookMarksArray.length; i++) {

        bookMarksArray[i].toggleRead();
        bookMarksArray[i].read = true;
        event.target.classList.toggle('read-selected');
      }


    }


    }

  // if (event.target.classList[0] === 'read' && bookMarksArray[0].read === true) {
  //   bookMarksArray[0].toggleRead(!true);
  //   event.target.classList.toggle('read-selected');
  //   // console.log('toggle false', `${bookMarksArray[0].read}`);
  //
  // }
  // if (event.target.classList[0] === 'read' && bookMarksArray[0].read === false) {
  //   bookMarksArray[0].toggleRead(!false);
  //   event.target.classList.toggle('read-selected');
  //   // console.log('toggle to true?', `${bookMarksArray[0].read}`);
