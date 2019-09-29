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
var arrayFls = [];

// ######## class linked vars
var totalNumOfBookMarks = bookMarksArray.length;
var bookRead = 0;
var totalReadBookMarks = totalNumOfBookMarks - bookRead;
// enterButton.disabled = true;\

// ######### event listners

window.onload = function() {
  // lSArray();
  // outputBookMarks();
  if (localStorage.length > 0) {
    outputBookMarks();

  }


}
// window.addEventListener('load', getBookmarks());


pageEvents.addEventListener('click', function(event) {
  // console.log(event.target.classList[0]);
  // console.log(event.target.classList);
  // console.log(event.path[1].firstChild.id);
  // console.log(event.path[1].id);
  // target = event.path[1].id;
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
  for (var i = 0; i < bookMarksArray.length; i++) {
    bookMarksArray[i].addTotalBookmarks();
  }
  lSArray();

}

function getInputs() {
  enterButton.disabled = !true;
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
    fromLS();
    console.log(arrayFls);
  if (arrayFls.length > 0) {
    var div = document.createElement('div');
    div.innerHTML = '';
    for (var i = 0; i < arrayFls.length; i++) {
      div.innerHTML =  `<div id='${arrayFls[i].id}' class='card'><h3 class='h3'>${arrayFls[i].title}</h3><hr/><p class='url'>${arrayFls[i].url}</p><hr/><div class="read-delete"><p class='read'>Read</p><p class='delete'>Delete</p><div></div>`
      outputArticle.appendChild(div);
      // console.log('bookmarks' + i)
    }
  } if (arrayFls.length === null) {
    delete div;
  }

}


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
    // var fromStorage = localStorage.getItem("bookMarkLS");

    arrayFls = JSON.parse(localStorage.getItem('bookMarkLS'))
}

function deleteBookmark(event) {
  if (localStorage.length > 0) {
    if (event.target.className === 'delete') {
      var deleteID = event.path[2].id.toString();
      document.getElementById(deleteID).remove();
      deleteID = deleteID.toString();
      for (var i = 0; i < bookMarksArray.length; i++) {
        bookMarksArray[i].deleteBookmark()
      }
      // console.log(arrayFls.length, deleteID.toString());
      // console.log(event.target.classList.value);
      lSArray();
      fromLS();
      lSArray();

    }
    if (arrayFls !== 0) {
      for (var j = 0; j <arrayFls.length; j++) {
        if (arrayFls[j].id === deleteID) {
          bookMarksArray[j] = arrayFls[j];
          console.log(`arrayFls `, deleteID);
          bookMarksArray.splice(j, 1);
          arrayFls.splice(j, 1);
          lSArray();
          fromLS();
          lSArray();

        }
      }
    }
    if (arrayFls === undefined ) {
      
    }

  }
  }




function reading(event) {
  // loop thru bookMarksArray and find the id that was clicked on for deleteBtn
  // call the toggleRead function on the object to change read to true.
  // console.log(event.path[2].id.toString());
  // console.log(event.target.className, event.path[2]);

  var deleteID = event.path[2].id.toString();
  console.log(deleteID);

    if (event.target.className === 'read') {
        deleteID.add =+ '.read-selected';
        for (var i = 0; i < arrayFls.length; i++) {
          bookMarksArray[deleteID].toggleRead();
        }
    if (event.target.className === 'read-selected') {
      deleteID.remove('.read-selected');
      for (var j = 0; j < arrayFls.length; j++) {
          arrayFls[j].toggleRead();
          bookMarksArray[deleteID].totalRead--;
      }

    }
        // event.target.classList.toggle('read-selected');

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
